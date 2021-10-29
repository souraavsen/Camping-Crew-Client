import React from "react";
import service from "../../../../../Images/campsite3.jpg";
import service1 from "../../../../../Images/campsite14.jpg";
import service2 from "../../../../../Images/campsite15.jpg";
import './OfferingServices.css'

const OfferingServices = () => {
  return (
    <div className="pb-10">
      <div>
        <svg
          className='-mt-24 md:-mt-40 lg:-mt-52'
          id='visual'
          viewBox='0 0 900 200'
          // width='900'
          // height='200'
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
        <h4 className='text-3xl pb-16 font-extrabold text-center font_architect '>
          Explore Our Services
        </h4>
        <div className='w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          
          <div className='mx-auto'>
            <div>
              <img
                src={service}
                className='rounded h-48 w-56 z-30 shadow-md mb-2'
                alt=''
              />
            </div>
            <div className='w-60 z-0 px-2 ml-4 pt-40 pb-4 rounded -mt-40 bg-yellow-100 flex flex-col items-center justify-center shadow-md'>
              <h2 className='text-center font-bold text-lg'>Name</h2>
              <h2 className='text-center'>
                Lorem ipsum dolor sit Lorem ipsum dolor sit amet.
              </h2>
              <button className='explore_btn mt-1 w-28 font-semibold bg-yellow-300  py-1 rounded'>
                Explore <i class='fas fa-arrow-right btn_animation'></i>
              </button>
            </div>
          </div>
          
          
          <div className='mx-auto'>
            <div>
              <img
                src={service1}
                className='rounded h-48 w-56 z-30 shadow-md mb-2'
                alt=''
              />
            </div>
            <div className='w-60 z-0 px-2 ml-4 pt-40 pb-4 rounded -mt-40 bg-yellow-100 flex flex-col items-center justify-center shadow-md'>
              <h2 className='text-center font-bold text-lg'>Name</h2>
              <h2 className='text-center'>
                Lorem ipsum dolor sit Lorem ipsum dolor sit amet.
              </h2>
              <button className='explore_btn mt-1 w-28 font-semibold bg-yellow-300  py-1 rounded'>
                Explore <i class='fas fa-arrow-right btn_animation'></i>
              </button>
            </div>
          </div>
          
          
          <div className='mx-auto'>
            <div>
              <img
                src={service2}
                className='rounded h-48 w-56 z-30 shadow-md mb-2'
                alt=''
              />
            </div>
            <div className='w-60 z-0 px-2 ml-4 pt-40 pb-4 rounded -mt-40 bg-yellow-100 flex flex-col items-center justify-center shadow-md'>
              <h2 className='text-center font-bold text-lg'>Name</h2>
              <h2 className='text-center'>
                Lorem ipsum dolor sit Lorem ipsum dolor sit amet.
              </h2>
              <button className='explore_btn mt-1 w-28 font-semibold bg-yellow-300  py-1 rounded'>
                Explore <i class='fas fa-arrow-right btn_animation'></i>
              </button>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default OfferingServices;
