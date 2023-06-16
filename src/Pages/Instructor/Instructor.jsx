import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Instructor = () => {
  const [instructor, setInstructor] = useState([]);

  useEffect(() => {
    fetch(`https://martial-art-summer-camp-server-side.vercel.app/user`)
      .then((res) => res.json())
      .then((data) => setInstructor(data));
  }, []);


  return (
    <div className=" container mx-auto grid grid-cols-3 gap-6 ">
      <Helmet>
        <title>MMA | Instructor</title>
      </Helmet>

      {instructor.map((ins) => {
        return (
          <div key={ins._id}>
          
            {ins.role=="instructor" &&
                <div className="card w-96 bg-base-100 text-teal-500 shadow-xl mt-5 mb-5">
                <figure><img className="w-80 h-64 rounded mt-3" src={ins.photo}  /></figure>
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

export default Instructor;
