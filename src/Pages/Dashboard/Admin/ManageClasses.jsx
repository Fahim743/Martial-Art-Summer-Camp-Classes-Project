import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAXios";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const [axiosSecure] = useAxios();

  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    return res.data;
  });

  console.log(classes);

  const handleAccept = (id) => {
    fetch(`https://martial-art-summer-camp-server-side.vercel.app/classes/makeAccept/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Class is approved",
            showConfirmButton: false,
            timer: 1000,
          });
          refetch();
        }
      });
  };
  const handleReject = (id) => {
    fetch(`https://martial-art-summer-camp-server-side.vercel.app/classes/makeReject/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Class is Rejected",
            showConfirmButton: false,
            timer: 1000,
          });
          refetch();
        }
      });
  };

  const handleFeedback =id =>{
    Swal.fire({
        title: "Feedback",
        text: "Please write your reason behind your decision",
        input: "textarea",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "Enter",
        showLoaderOnConfirm: true,
        preConfirm: (feedback) => {
         
          return axiosSecure
            .patch(`/classes/saveFeedback/${id}`, { feedback: feedback })
            .then((response) => {
              if (response.data.modifiedCount) {
                refetch();
                Swal.fire({
                  title: "Feedback Received",
                  text: "Your feedback has been Received.",
                  icon: "success",
                });
              } else {
                throw new Error("Failed to collect your feedback.");
              }
            })
            .catch(() => {
              Swal.fire({
                title: "Error",
                text: "Failed to collect your feedback.",
                icon: "error",
              });
            });
        },
      });
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((myClass) => (
              <tr key={myClass._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={myClass?.classPhoto} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{myClass.className}</div>
                  </div>
                </td>
                <td>{myClass.instructorName}</td>
                <td>{myClass.instructorEmail}</td>
                <td>{myClass.status}</td>
                <th>
                  <button
                    disabled={myClass.status === "accepted" || myClass.status === "rejected"  ? true : false}
                    onClick={() => handleAccept(myClass._id)}
                    className="btn  btn-success text-white mr-2 btn-xs"
                  >
                    Accept
                  </button>
                  <button
                   disabled={myClass.status === "rejected" || myClass.status === "accepted"  ? true : false}
                    onClick={() => handleReject(myClass._id)}
                    className="btn bg-red-500 text-white btn-xs"
                  >
                    Reject
                  </button>
                  <button  onClick={()=>handleFeedback(myClass._id)}
                  className="btn bg-orange-400 text-white mr-2 btn-xs">
                    Send Feedback
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
