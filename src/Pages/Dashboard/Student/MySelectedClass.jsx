import { useContext } from "react";
import useAxios from "../../../Hooks/useAXios";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const MySelectedClass = () => {
  const [axiosSecure] = useAxios();
  const { user } = useContext(AuthContext);

  const { data: classCart = [], refetch } = useQuery(
    ["classCart"],
    async () => {
      const res = await axiosSecure.get(`/classCart/${user?.email}`);
      return res.data;
    }
  );
  const handleRemove = (id) => {
    if (!user) {
      alert("Please Sign In");
    } else {
      axiosSecure
        .delete(`/classCart/${id}/${user?.email}`)
        .then((response) => {
          console.log("Course deleted:", response.data);
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Class Deleted  Successfully",
            showConfirmButton: false,
          
          });
        })
        .catch((error) => {
          console.log("Error when deleting class:", error);
          // Show an error message
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error while removing the class!",
           
          });
        });
    }
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Class image</th>
              <th>Class Name</th>
              <th>Action</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {classCart.map((single) => (
              <tr >
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={single.classPhoto}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{single.className}</div>
                  </div>
                </td>
                <td>
                  <button
                    onClick={() => handleRemove(single._id)}
                    className="btn bg-red-700 text-white btn-xs"
                  >
                    Remove{" "}
                  </button>
                </td>
                <td className="text-center">
                  <button className="btn btn-success text-white btn-xs ">
                    Pay
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClass;
