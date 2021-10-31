import React, { useEffect, useState } from "react";
import image from "../../../Images/campsite15.jpg";

const Booking = ({ plan, deleteSingleBooking, handelUpdatesStatus }) => {

  const [planDetails, setPlanDetails] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/plan-details/${plan.package_id}`)
      .then((res) => res.json())
      .then((data) => {
        setPlanDetails(data);
      });
  }, []);


  return (
    <div>
      <div className='mx-8 my-4 rounded-md'>
        <div className='flex flex-col'>
          <div className='flex flex-col justify-center items-center shadow-md bg-white rounded-md bg-opacity-60 '>
            <div className='mx-auto my-8'>
              <img
                className='h-40 w-48 rounded shadow-xl'
                src={planDetails.image}
                alt=''
              />
            </div>
            <div className='w-68 mx-4 px-4 pb-2 mb-4 shadow-sm'>
              <p className='text-base py-1'>
                <span className='font-semibold'>{plan.packagename}</span>
              </p>
              <p className='text-base py-1'>
                by-{" "}
                <span className='text-yellow-600 font-semibold'>
                  {plan.username}
                </span>
              </p>
              <p className='text-base py-1'>Contact: {plan.contact}</p>
              <p className='text-base py-1'>{plan.transiction}</p>
              {plan.status === "Pending" ? (
                <h2 className='font-semibold text-center w-24 mx-auto py-2 my-1 rounded-full text-white text-xs bg-yellow-700 bg-opacity-60'>
                  {plan.status}
                </h2>
              ) : (
                <h2 className='font-semibold text-center w-24 mx-auto py-2 my-1 rounded-full text-white text-xs bg-green-700 bg-opacity-60'>
                  {plan.status}
                </h2>
              )}
            </div>
          </div>
          {plan.status === "Pending" && (
            <div className='bg-transparent flex justify-around items-center pt-3'>
              <button
                className='bg-yellow-200 border-2 border-yellow-300 text-lg px-6 py-1 mx-auto mb-6 rounded-full cursor-pointer hover:bg-transparent font-light text-yellow-500'
                title='Accept'
                onClick={() => handelUpdatesStatus(plan._id)}
              >
                <i class='fas fa-check'></i>
              </button>
              <button
                className='bg-red-200 border-2 border-red-300 text-lg px-7 py-1 mx-auto mb-6 rounded-full cursor-pointer hover:bg-transparent text-red-600 font-extrabold'
                onClick={() => deleteSingleBooking(plan._id)}
                title='Cancel'
              >
                X
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
