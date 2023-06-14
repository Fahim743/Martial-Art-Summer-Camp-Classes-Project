

const Class = () => {
    return (
        <div className="card card-side bg-base-100 shadow-xl m-5">
        <figure>
          <img
            src="/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: Flutter!</h2>
          <p>Instructor: Name Name</p>
          <p>Available seats: 000</p>
          <p>Price: 000</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" disabled="true">Select</button>
          </div>
        </div>
      </div>
    );
};

export default Class;