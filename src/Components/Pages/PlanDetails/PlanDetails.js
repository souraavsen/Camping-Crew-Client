import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import img from "../../../Images/campsite3.jpg";

const PlanDetails = () => {
  const [planDetails, setPlanDetails] = useState({});

  const planId = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/plan-details/${planId.id}`)
      .then((res) => res.json())
      .then((data) => {
        setPlanDetails(data);
      });
  }, []);
    

  return (
    <div className='pt-12 pb-24'>
      <h1 className='text-4xl font-bold text-center pb-12 font_architect'>
        {planDetails.name}
      </h1>
      <div className='container lg:flex md:flex justify-between px-8 py-6'>
        <img
          className='rounded-md shadow-md'
          src={planDetails.image ? planDetails.image : img}
          width='40%'
          alt=''
        />
        <div className='ml-20'>
          <h4 className='text-justify py-6'>{planDetails.description}</h4>
          <div className='flex items-center pb-4'>
            <h4 className='pr-8 border-r-2 border-gray-400'>
              {planDetails.date}
            </h4>
            <h4 className='pl-8'>{planDetails.duration} Days</h4>
          </div>
          <h4>
            Price:{" "}
            <span className='text-lg text-yellow-900 font-semibold'>
              {planDetails.price}$
            </span>{" "}
            only
          </h4>
          <button className='bg-yellow-300 px-6 py-2 rounded text-black font-semibold shadow-sm mx-auto my-4'>
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;
