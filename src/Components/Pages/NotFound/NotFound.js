import React from 'react'
import { Link } from 'react-router-dom'
import CampingCrew from "../../../Images/Notfoundcamp.gif";

const NotFound = () => {

    // this Component is for the wrong routes
    return (
      <div>
        <div className='flex flex-col items-center w-7/12 pb-16 mx-auto my-10 rounded-md bg-gray-200'>
          <img src={CampingCrew} alt='' />
          <h1 className='text-lg text-gray-900'>
            Oopps 404! The Page you are looking for is not found.
          </h1>
          <Link
            to='/'
            className='py-2 text-black font-semibold mx-auto text-xl px-4 bg-yellow-400 hover:bg-opacity-70 bg-opacity-60 mt-4 rounded'
          >
            Go back to Home
          </Link>
        </div>
      </div>
    );
}

export default NotFound
