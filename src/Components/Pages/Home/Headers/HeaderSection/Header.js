import React from "react";
import { Link } from "react-router-dom";
import headerimage from "../../../../../Images/camping-crew-header.png";
import "./Header.css";

const Header = () => {
  return (
    <div className='bg-gray-100'>
      <div className='main_container z-20 w-full h-screen flex flex-col justify-center items-center'>
        <div className='text-white font-bold bg-gray-800 bg-opacity-80 px-24 py-8 rounded-bl-3xl rounded-tr-3xl backdrop-filter backdrop-blur-sm border-2 border-gray-700 -mt-40 md:mt-0 lg:mt-0'>
          <img src={headerimage} className='mx-auto pb-4' alt='' />
          <h4 className='text-2xl md:text-5xl font-extrabold text-center font_architect'>Camping Crew</h4>
          <h5 className='text-white text-center pt-8'>
            “Wander Often, Wonder Always”
          </h5>
        </div>
        <Link to="/all-plans" className='header_button mt-6 hover:text-black'>Let's Join</Link>
      </div>
    </div>
  );
};

export default Header;
