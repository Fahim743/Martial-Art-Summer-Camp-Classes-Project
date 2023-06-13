import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaGrin } from 'react-icons/fa';

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { logIn , googleSignIn } = useContext(AuthContext);
  const [showPass, setShowPass] = useState("password");


  const handleShowPass =()=>{
    if (showPass == "password") {
      setShowPass("text");
    }
    else{
      setShowPass("password");
    }
  }

  const onSubmit = (data) =>{
    const email = data.email;
    const password=data.password;
    logIn(email,password)
    .then(res=>{
      const user = res.user;
      console.log(user);

    })
  };
  const handleGoogleSignin= ()=>{
    googleSignIn().then((res) => {
      const user = res.user;
      console.log(user);
    });
  }
  return (
    <div>
      <Helmet>
        <title>MMA | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-2/4 h-2/4 flex-col lg:flex-col">
          <div className="text-center text-4xl text-teal-500 mb-4">Log In </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-teal-500">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-400 mt-2">
                    {" "}
                    Must insert email to log in
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-teal-500">Password</span>
                </label>
                <input
                  type={showPass}
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                
                {errors.password && (
                  <span className="text-red-400 mt-2">
                    {" "}
                    Must insert password to log in
                  </span>
                )}
                {/* Show Pass */}
                <label className="label place-content-end">
                
                <button onClick={handleShowPass} className="btn bg-teal-400 text-white">
                  <FaGrin></FaGrin>
                  <small>Show/Hide</small>
                </button>
                </label>
              </div>
              <small>
                <h3>
                  Are you new here ?{" "}
                  <Link className="text-teal-600" to={"/registration"}>
                    {" "}
                    Sign Up here
                  </Link>{" "}
                </h3>
              </small>

              <div className="form-control mt-6">
                <input  value=" Log In " type="submit" className="btn bg-teal-400 text-white">
                 
                </input>
              </div>

            </form>
              <div className="text-center">
                <h2 className="mb-2 mt-4 text-teal-500">Sign in with</h2>
                <button onClick={handleGoogleSignin} className="mb-5 btn w-2/4 bg-teal-400 text-white ">
                  <FaGoogle></FaGoogle>{" "}
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
