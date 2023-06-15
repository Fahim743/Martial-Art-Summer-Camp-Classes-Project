import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="" id="error-page">
      
        <div className="container mx-auto mt-4">
          <img className="w-1/2 h-3/2 mx-auto"
            src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </div>
        <div className="text-center">
          <h1 className="text-4xl text-teal-500 mt-3">Oops!</h1>
          <p className="text-2xl mt-3 text-teal-400" >Sorry, an unexpected error has occurred.</p>
          <p>
            <i className="text-2xl mt-3 text-teal-400">{error.statusText || error.message}</i>
          </p>
          <button className="btn bg-teal-400 text-white"><Link to={'/'}>Back</Link></button>
        </div>
      </div>
  
  );
}
