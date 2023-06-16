import { useEffect, useState } from "react";
import checkAdmin from "../../Hooks/checkAdmin";
import checkInstructor from "../../Hooks/checkInstructor";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAXios";

const Class = () => {
  const {user} = useContext(AuthContext)
  const [classes, setClasses] = useState([]);

  const [isAdmin] = checkAdmin();
  const [ isInstructor] = checkInstructor();
  const [axiosSecure] = useAxios();

  useEffect(() => {
    fetch(`https://martial-art-summer-camp-server-side.vercel.app/classes`)
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  const handleSendClass = (id) => {
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please login before selecting a class!",
      });
      // navigate(from, { replace: true });
    } else if (user) {
      console.log(id);
      const filter = classes.find((item) => item._id === id);
      const {
        classPhoto,
        className,
        instructorEmail,
        instructorName,
        price,
        availableSeats,
        status,
        _id,
      } = filter;
      const choosenItems = {
        _id,
        classPhoto,
        className,
        instructorEmail,
        instructorName,
        price,
        availableSeats,
        status,
        studentCart: [user?.email],
      };
      console.log(choosenItems);

      axiosSecure
        .post("/classCart", choosenItems)
        .then((response) => {
          if (response.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Added to cart",
              showConfirmButton: false,
              timer: 1700,
            });
          }
        })
        .catch((error) => {
          console.log("Error response:", error.response); 
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please select another one!",
            footer: "Please select another class",
          });
        });
    }
  };

  return (
    <>
      {classes.map((allClass) => (
        <div key={allClass._id}>
          {allClass.status == "accepted" && (
            <div className="card card-side bg-base-100 shadow-xl m-5">
              <figure>
                <img src={allClass.classPhoto} alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Name: {allClass.className}!</h2>
                <p>Instructor: {allClass.instructorName}</p>
                <p>Available seats: {allClass.availableSeats}</p>
                <p>Price: {allClass.price}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleSendClass(allClass._id)}
                  className="btn btn-primary" 
                  disabled={isAdmin || isInstructor || allClass.availableSeats === 0 ? true : false  }>
                    Select
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Class;
