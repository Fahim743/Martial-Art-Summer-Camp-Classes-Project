import { Helmet } from "react-helmet-async";

const Instructor = () => {
  return (
    <div className=" container mx-auto grid grid-cols-4">
      <Helmet>
        <title>MMA | Instructor</title>
      </Helmet>

      <div className="card w-96 bg-base-100 shadow-xl mb-5 mt-4">
        <figure className="px-10 pt-10">
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Name: Ananda Hasan</h2>
          <p>Email: Ananda@gmail.com</p>
          <div className="card-actions">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
