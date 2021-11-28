import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Myplans = () => {
  const [allBookings, setAllBookings] = useState([]);
  const [ifdeleted, setIfdeleted] = useState(true);
  const { user } = useAuth();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://bloodcurdling-warlock-64846.herokuapp.com/all-bookings`)
      .then((res) => res.json())
      .then((data) => {
        setAllBookings(data);
        setLoading(false);
      });
  }, [ifdeleted]);

  const handleDeleteBooking = (id) => {
    const permission = window.confirm("Are you sure want to cancel ?");
    if (permission) {
      fetch(`https://bloodcurdling-warlock-64846.herokuapp.com/remove-booking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          setIfdeleted(!ifdeleted);
        });
    }
  };

  const userBooked = allBookings.filter(
    (booked) => booked.email === user.email
  );

  return (
    <div className='pb-20'>
      <h1 className='text-4xl font-bold text-center pb-12 font_architect text-black pt-16'>
        My Joined Plans
      </h1>

      {loading && (
        <div className='min-h-screen'>
          <div class='sk-cube-grid'>
            <div class='sk-cube sk-cube1'></div>
            <div class='sk-cube sk-cube2'></div>
            <div class='sk-cube sk-cube3'></div>
            <div class='sk-cube sk-cube4'></div>
            <div class='sk-cube sk-cube5'></div>
            <div class='sk-cube sk-cube6'></div>
            <div class='sk-cube sk-cube7'></div>
            <div class='sk-cube sk-cube8'></div>
            <div class='sk-cube sk-cube9'></div>
          </div>
        </div>
      )}

      {!loading && (
        <div>
          {!userBooked.length > 0 && (
            <div className='min-h-screen -mb-96'>
              <img
                className='m-auto w-60'
                src='https://i.ibb.co/KNy4Yp0/empty-data-set.jpg'
                alt=''
              />
            </div>
          )}
          {userBooked.map((booking, index) => (
            <div className='flex justify-between items-center w-11/12 lg:w-9/12 mx-auto px-10 py-4 rounded-md shadow-md my-10 bg-yellow-100 '>
              <div className='w-8/12 md:w-4/6 flex-wrap flex justify-between items-center'>
                <Link
                  to={`/plans/${booking.package_id}`}
                  className=' font-semibold text-center text-black'
                >
                  {booking.packagename}
                </Link>
                <h2 className=' font-semibold text-center truncate'>
                  {booking.transiction}
                </h2>
              </div>
              <div className='w-4/12 md:ml-24 md:w-2/6 flex justify-between items-center'>
                <div>
                  {booking.status === "Pending" ? (
                    <h2 className=' font-semibold text-center px-2 py-1 rounded-full text-white text-xs bg-yellow-700 bg-opacity-60'>
                      {booking.status}
                    </h2>
                  ) : (
                    <h2 className=' font-semibold text-center px-2 py-1 rounded-full text-white text-xs bg-green-600 bg-opacity-60'>
                      {booking.status}
                    </h2>
                  )}
                </div>
                {booking.status === "Pending" && (
                  <button
                    className='ml-8 md:ml-auto text-red-700 px-2 py-0.5 rounded bg-red-400 font-semibold bg-opacity-90 hover:bg-opacity-70'
                    title='Cancel'
                    onClick={() => handleDeleteBooking(booking._id)}
                  >
                    X
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Myplans;
