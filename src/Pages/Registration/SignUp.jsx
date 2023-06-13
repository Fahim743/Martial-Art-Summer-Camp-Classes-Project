import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Email sign up
  const onSubmit = (data) => {
    if (data.password == data.confirmPassword) {
      createUser(data.email, data.password).then((result) => {
        const user = result.user;
        console.log(user);
        reset();
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password doesnt match!",
      });
    }
  };
  // Google SIgn Up

  const handleGoogleSignUp = () => {
    googleSignIn().then((res) => {
      const user = res.user;
      console.log(user);
    });
  };

  return (
    <div>
      <Helmet>
        <title>MMA | Registration</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-2/4 h-2/4 flex-col lg:flex-col">
          <div className="text-center text-4xl text-teal-500 mb-4">Sign Up</div>
          <div className="card flex-shrink-0 w-3/4  shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-teal-500">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  {...register("name")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-teal-500">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Name"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-400 mt-2"> Must insert Email</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-teal-500">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[!@#$%^&*])(?=.*[A-Z])/
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === 'required' && (
                  <span className="text-red-400 mt-2">
                    {" "}
                    Must insert password
                  </span>
                )}
                {errors.password?.type === 'minLength' && (
                  <span className="text-red-400 mt-2">
                    {" "}
                    Must insert 6 character to proceed
                  </span>
                )}
                {errors.password?.type === 'pattern' && (
                  <span className="text-red-400 mt-2">
                    {" "}
                    Must insert 1 uppercase and 1 special character character to
                    proceed
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-teal-500">
                    Confirm Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="input input-bordered"
                  {...register("confirmPassword", { required: true })}
                />
                {errors.confirmPassword && (
                  <span className="text-red-400 mt-2">
                    {" "}
                    Insert password again to confirm
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-teal-500">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered"
                  {...register("photo")}
                />
              </div>

              <small>
                <h3>
                  Already have an Account ?{" "}
                  <Link className="text-teal-400" to={"/login"}>
                    Sign In here
                  </Link>
                </h3>
              </small>

              <div className="form-control mt-6">
                <input
                  className="btn bg-teal-400 text-white"
                  type="submit"
                  value="Sign up"
                />{" "}
              </div>

              {/* Google sign up */}
              <div className="text-center">
                <h2 className="mb-3 mt-4 text-teal-500">Sign up with</h2>
                <button
                  onClick={handleGoogleSignUp}
                  className="btn w-2/4 bg-teal-400 text-white "
                >
                  <FaGoogle></FaGoogle>{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
