import { useEffect, useState } from "react";

const Class = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`https://martial-art-summer-camp-server-side.vercel.app/classes`)
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

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
                 { <button className="btn btn-primary" disabled="true">
                    Select
                  </button>}
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
