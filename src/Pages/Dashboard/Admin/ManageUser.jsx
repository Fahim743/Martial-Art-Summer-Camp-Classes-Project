import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAXios";
import Swal from "sweetalert2";

const ManageUser = () => {
  const [axiosSecure] = useAxios();

  const { data: user = [], refetch } = useQuery(["user"], async () => {
    const res = await axiosSecure.get("/user");
    return res.data;
  });


  const handleManageInst=(id , name)=>{
    console.log(id)

    fetch(`http://localhost:5000/user/makeInstructor/${id}`,
        {
          method: "PATCH",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
           
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${name} is now an instructor`,
              showConfirmButton: false,
              timer: 1000,
            });
            refetch();
          }
        });


  }


  const handleManageAdmin=(id, name)=>{
    console.log(id)

   
    fetch(`http://localhost:5000/user/makeAdmin/${id}`,
        {
          method: "PATCH",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
           
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${name} is now an admin`,
              showConfirmButton: false,
              timer: 1000,
            });
            refetch();
          }
        });

  }



  return (
    <div className="container mx-8">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            {user.map((myUser) => (
              <>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={myUser.photo} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="font-bold">{myUser.displayName}</div>
                  </td>
                  <td>{myUser.email}</td>
                  <td>{myUser.role}</td>
                  <td>
                    <button
                      className="btn bg-teal-500 text-white  btn-xs mr-2"
                      disabled={myUser.role === "admin" ? true : false}
                      onClick={() => handleManageAdmin(myUser._id, myUser.displayName)}
                    >
                      Make Admin
                    </button>
                    <button
                      className="btn bg-teal-500  text-white btn-xs"
                      disabled={myUser.role === "instructor" ? true : false}
                      onClick={() => handleManageInst(myUser._id, myUser.displayName)}
                    >
                      Make Instructor
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
