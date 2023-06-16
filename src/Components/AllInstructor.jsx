import { useEffect, useState } from "react";

const AllInstructor = () => {
  const [instructor, setInstructor] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/user`)
      .then((res) => res.json())
      .then((data) => setInstructor(data));
  }, []);

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3  gap-x-3">
      {instructor.slice(0,6).map((ins) => {
        return (
          <div key={ins._id}>
          
            {ins.role=="instructor" &&
                <div className="card w-100 bg-base-100 text-teal-500 shadow-xl mt-5 mb-5">
                <figure><img className="w-full h-[400px] rounded mt-3 object-cover" src={ins.photo}  /></figure>
                <div className="card-body">
                  <h2 className="card-title">{ins.displayName}</h2>
                  <p>Email: {ins.email}</p>
                  
                </div>
              </div>
            }
          </div>
        );
      })}
    </div>
  );
};

export default AllInstructor;
