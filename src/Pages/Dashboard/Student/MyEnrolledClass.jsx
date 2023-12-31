const MyEnrolledClass = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Class image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                </div>
              </td>
              <td>
                <div>
                  <div className="font-bold">Instructor Name</div>
                </div>
              </td>
              <td>
                <div>
                  <div className="font-bold">Instructor Email</div>
                </div>
              </td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrolledClass;
