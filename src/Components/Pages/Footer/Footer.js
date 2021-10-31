import React from "react";
import footerimg from "../../../Images/camping-crew-header.png";

const Footer = () => {
  return (
    <div className='bg-gray-900 pt-8 flex flex-col justify-center items-center'>
      <div className='container md:flex justify-around align-center py-3'>
        <div className='px-3 px-lg-0'>
          <div>
            <p className='text-white text-3xl font-extrabold text-center font_architect'>
              Camping Crew
            </p>
          </div>
          <div className='mt-4 flex flex-col justify-center items-center md:items-start'>
            <p className='text-white'>
              <i className='fas fa-crosshairs mr-3 text-white'></i> Mirpur Road,
              Dhaka.
            </p>
            <p className='text-white'>
              <i className='far fa-envelope mr-3 text-white'></i>{" "}
              campingcrew@gmail.com
            </p>
            <p className='text-white'>
              <i className='fas fa-phone-alt mr-3 text-white'></i>01761023894
            </p>
          </div>
          <div className='flex flex-col justify-center items-center md:items-start text-lg my-4'>
            <div className='flex items-center justify-center py-2'>
              <i class='fab fa-facebook text-yellow-300 text-3xl cursor-pointer'></i>
              <i class='fab fa-twitter text-yellow-300 text-3xl px-6 cursor-pointer'></i>
              <i class='fab fa-linkedin text-yellow-300 text-3xl cursor-pointer'></i>
            </div>
          </div>
        </div>
        <div className='md:my-auto'>
          <img className='pb-2 mx-auto w-28 md:w-32' src={footerimg} alt='' />
        </div>
        <div className='px-3 px-lg-0 mt-5 mt-lg-0 ms-lg-5'>
          <div>
            <h5>Receive Email Updates</h5>
            <div className='d-flex'>
              <input
                type='text'
                placeholder='Your Email Address'
                className='form-control rounded-0'
              />
              <button className='bg-yellow-300 font-semibold text-black px-3 ml-2 rounded'>
                Contact
              </button>
            </div>
          </div>
          <div className='mt-5'>
            <div className='text-yellow-300 text-center text-xl'>
              “Life is better by the camp fire.”
            </div>
          </div>
        </div>
      </div>

      <p className='text-white font-extralight text-center pb-4'>
        camping crew © 2021. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
