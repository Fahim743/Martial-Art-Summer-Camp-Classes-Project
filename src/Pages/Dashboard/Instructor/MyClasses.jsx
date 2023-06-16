import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const MyClasses = () => {

  const { user } = useContext(AuthContext);
  console.log(user)
 
  const [instructorClass, setInstructorClass] = useState([]);

  useEffect(() => {
    fetch(`https://martial-art-summer-camp-server-side.vercel.app/classes/${user?.email}`)
      .then((res) => res.json())
      .then((data) => 
      setInstructorClass(data));
  }, []);
  console.log(instructorClass);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Class Photo</th>
              <th>Class Name</th>
              <th>Enrolled Student</th>
              <th>Status</th>
              <th>Feedback</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {instructorClass.map((insClass) => (
              <>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={insClass.classPhoto}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                    <td>
                      {" "}
                    
                        <div className="font-bold">{insClass.className}</div>
                      
                    </td>
                  <td className="text-center">
                   1
                  </td>
                  <td>{insClass.status}</td>
                  <th>
                   {insClass.status=="pending" || insClass.status=="rejected" ? <p>{insClass.feedback}</p>:<p>No feedback</p> }
                  </th>
                </tr>
                
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
