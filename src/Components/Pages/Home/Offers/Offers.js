import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./Offers.css";

const Offers = () => {
  const [offers, setOffers] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetch(`http://localhost:5000/all-offers`)
      .then((res) => res.json())
      .then((data) => {
        setOffers(data);
        setLoading(false)
      });
  }, []);


  return (
    <div>
      <div className='w-11/12 bg-gray-900 bg-opacity-90 background_img mx-auto rounded-md mt-16 mb-20'>
        <h2 className='text-white font-bold font_architect text-3xl text-center pt-10 pb-6'>
          We Offer The Best
        </h2>

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

        <div className='mx-16 px-8 py-16 grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-14 justify-between items-center'>
          {offers.map((offer) => (
            <div className='flex justify-start mb-4 py-2 items-center border-b'>
              <img
                src={offer.image}
                alt=''
                className='w-10 h-10 md:w-16 md:h-16 rounded-full'
              />
              <div className='flex justify-center flex-col items-center ml-4'>
                <Card.Text className='text-yellow-300 md:text-xl font-bold'>
                  {offer.title}
                </Card.Text>
                <Card.Text className='text-xs text-white max-w-xs text-justify'>
                  {offer.details}
                </Card.Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
