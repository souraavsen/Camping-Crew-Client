import React from "react";
import service from "../../../../Images/campsite3.jpg";

const Activities = () => {
  return (
    <div className='pt-4 pb-20 '>
      <h2 className='text-black font-semibold font_architect text-3xl text-center pb-16'>
        Recent Activities
      </h2>
      <div className='w-10/12 mx-auto grid grid-cols-1  lg:grid-cols-2 gap-8'>
        <div className='mx-auto'>
          <div className='lg:w-72 h-68 z-0 pl-4 pr-16 py-4 rounded bg-gradient-to-br from-yellow-50 ... flex flex-col shadow-md'>
            <li className='font-bold text-lg'>Name</li>
            <h2 className='text-justify'>
              Lorem ipsum dolor sit Lorem ipsum dolor sit amet. Lorem ipsum
              dolor sit Lorem ipsum dolor sit amet. Lorem ipsum dolor sit Lorem
              ipsum dolor sit amet.
            </h2>
          </div>
          <div className='z-30'>
            <img
              src={service}
              className='rounded mt-6 lg:h-64 lg:w-6/12 shadow-md mb-2 lg:ml-60 lg:-mt-32'
              alt=''
            />
          </div>
        </div>

        <div className='mx-auto'>
          <div className='lg:w-72 h-68 z-0 pl-4 pr-16 py-4 rounded bg-gradient-to-br from-yellow-50 ... flex flex-col shadow-md'>
            <li className='font-bold text-lg'>Name</li>
            <h2 className='text-justify'>
              Lorem ipsum dolor sit Lorem ipsum dolor sit amet. Lorem ipsum
              dolor sit Lorem ipsum dolor sit amet. Lorem ipsum dolor sit Lorem
              ipsum dolor sit amet.
            </h2>
          </div>
          <div className='z-30'>
            <img
              src={service}
              className='rounded mt-6 lg:h-64 lg:w-6/12 shadow-md mb-2 lg:ml-60 lg:-mt-32'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
