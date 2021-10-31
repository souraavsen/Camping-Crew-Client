import React, { useEffect, useState } from "react";

const Activities = () => {

  const [loading, setLoading] = useState(true);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch(`https://bloodcurdling-warlock-64846.herokuapp.com/all-activities`)
      .then((res) => res.json())
      .then((data) => {
        setActivities(data);
        setLoading(false);
      });
  }, []);


  return (
    <div className='pt-4 pb-20 '>
      <h2 className='text-black font-semibold font_architect text-3xl text-center pb-16'>
        Recent Activities
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

      <div className='w-10/12 mx-auto grid grid-cols-1  lg:grid-cols-2 gap-8'>
        {activities.map((activity) => (
          <div className='mx-auto'>
            <div className='lg:w-72 h-68 z-0 pl-4 pr-16 py-4 rounded bg-gradient-to-br from-yellow-50 ... flex flex-col shadow-md'>
              <li className='font-bold text-lg'>{activity.title}</li>
              <h2 className='text-justify'>{activity.details}</h2>
            </div>
            <div className='z-30'>
              <img
                src={activity.image}
                className='rounded mt-6 lg:h-64 lg:w-64 shadow-md mb-2 lg:ml-60 lg:-mt-32'
                alt=''
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
