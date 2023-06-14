
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
const AddClass = () => {
  
  const {user} = useContext(AuthContext)
    const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Helmet>
        <title>DashBoard|Add Class</title>
      </Helmet>
      
      <div className="text-4xl text-center text-teal-600"><h3>Add Class</h3></div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body w-full grid grid-cols-3 gap-x-5"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text text-teal-500">Class Name</span>
          </label>
          <input
            type="text"
            placeholder="Class Name"
            className="input input-bordered"
            {...register("className")}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-teal-500">Class Photo Url</span>
          </label>
          <input
            type="text"
            placeholder="Class Photo url"
            className="input input-bordered"
            {...register("classPhoto")}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-teal-500">Instructor Name </span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered"
            disabled="true"
            value={user?.displayName}
            {...register("instructorName")}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-teal-500">Instructor Email </span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered"
            value={user?.email}
            disabled="true"
            {...register("instructorEmail")}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-teal-500">Available Seats </span>
          </label>
          <input
            type="number"
            placeholder="Available Seats"
            className="input input-bordered"
       
            {...register("availableSeats")}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-teal-500">Price </span>
          </label>
          <input
            type="number"
            placeholder="Price"
            className="input input-bordered"
            {...register("price")}
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-teal-400 text-white">
            <input type="submit" value="Add" />
            <FaPlus> </FaPlus>
          </button>{" "}
        </div>
      </form>
    </div>
  );
};

export default AddClass;
