import React, { useState, useEffect } from "react";
import service from "../../../../Images/campsite15.jpg";
import "./OfferingServices.css";
import { Link } from "react-router-dom";

const OfferingServices = () => {
  const [plans, setPlans] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/all-plans`)
      .then((res) => res.json())
      .then((data) => {
        setPlans(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/all-activities`)
      .then((res) => res.json())
      .then((data) => {
        setActivities(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className='pb-10'>
      <div>
        <svg
          className='-mt-24 md:-mt-40 lg:-mt-52 '
          id='visual'
          viewBox='0 0 900 200'
          xmlns='http://www.w3.org/2000/svg'
          version='1.1'
        >
          <path
            d='M0 76L25 86.2C50 96.3 100 116.7 150 117.8C200 119 250 101 300 101.2C350 101.3 400 119.7 450 128.5C500 137.3 550 136.7 600 140.5C650 144.3 700 152.7 750 147.5C800 142.3 850 123.7 875 114.3L900 105L900 201L875 201C850 201 800 201 750 201C700 201 650 201 600 201C550 201 500 201 450 201C400 201 350 201 300 201C250 201 200 201 150 201C100 201 50 201 25 201L0 201Z'
            fill='#ffffff'
            stroke-linecap='round'
            stroke-linejoin='miter'
          ></path>
        </svg>
      </div>
      <div className='py-16'>
        <h4 className='text-3xl text-black pb-16 font-extrabold text-center font_architect '>
          Explore Our Plans
        </h4>

        {loading && (
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
        )}
        <div className='w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {plans.map((plan) => (
            <div className='mx-auto' key={plan._id}>
              <div>
                <img
                  src={plan.image ? plan.image : service}
                  className='rounded h-48 w-56 z-30 shadow-md mb-2'
                  alt=''
                />
              </div>
              <div className='w-60 z-0 px-2 ml-4 pt-40 pb-4 rounded -mt-40 bg-yellow-100 flex flex-col items-center justify-center shadow-md'>
                <h2 className='text-center font-bold text-lg'>{plan.name}</h2>
                <h2 className='text-center text-sm'>
                  {plan.description.slice(0, 50)}...
                </h2>
                <Link
                  to={`/plans/${plan._id}`}
                  className='explore_btn mt-2 text-center text-black w-28 font-semibold bg-yellow-300 py-1 rounded'
                >
                  Explore <i class='fas fa-arrow-right btn_animation'></i>
                </Link>
              </div>
            </div>
          ))}

          {!loading && (
            <Link
              to='/add-plans'
              className='mx-auto flex justify-center items-center text-black'
              title='Add Plan'
            >
              <div className='w-40 h-40 z-0 p-4 rounded border border-black border-dashed bg-yellow-100 bg-opacity-60 flex flex-col justify-center items-center shadow-md'>
                <h2 className='text-center font-bold text-5xl'>+</h2>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default OfferingServices;
