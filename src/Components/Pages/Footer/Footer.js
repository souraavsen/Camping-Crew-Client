import React from "react";
// importing image for footer
import footerimg from "../../../Images/camping-crew-header.png";

const Footer = () => {
  return (
    <div className='bg-gray-900 pt-8'>
      <div className='container mx-auto flex justify-around items-center'>
        <div className='flex flex-col items-center justify-center'>
          <img className='pb-2' src={footerimg} width='60%' alt='' />
          <h3 className='text-3xl text-white font-semibold pl-2 '>
            Cmaping Crew
          </h3>
          <div className='flex items-center justify-center py-2'>
            <i class='fab fa-facebook text-yellow-300 text-3xl cursor-pointer'></i>
            <i class='fab fa-twitter text-yellow-300 text-3xl px-6 cursor-pointer'></i>
            <i class='fab fa-linkedin text-yellow-300 text-3xl cursor-pointer'></i>
          </div>
        </div>
      </div>
      <p className='text-white font-light text-center py-8'>
        camping crew © 2021. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
