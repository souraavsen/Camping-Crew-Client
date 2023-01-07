import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import service from "../../../Images/campsite15.jpg";
import useAuth from "../../Hooks/useAuth";

const AllPlans = () => {
  const [allplans, setAllPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://camping-crew.onrender.com/all-plans`)
      .then((res) => res.json())
      .then((data) => {
        setAllPlans(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className='py-16'>
        <h4 className='text-3xl text-black pb-16 font-extrabold text-center font_architect '>
          Our Plans
        </h4>

        {loading ? (
          <div className='min-h-screen'>
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
          </div>
        ) : (
          <>
            {!allplans.length > 0 && (
              <div className='min-h-screen -mb-96'>
                <img
                  className='m-auto w-60'
                  src='https://i.ibb.co/KNy4Yp0/empty-data-set.jpg'
                  alt=''
                />
              </div>
            )}
            <div className='w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-12'>
              {user.email && (
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

              {allplans.map((eachplan) => (
                <div className='mx-auto' key={eachplan._id}>
                  <div>
                    <img
                      src={eachplan.image ? eachplan.image : service}
                      className='rounded h-48 w-56 z-30 shadow-md mb-2'
                      alt=''
                    />
                  </div>
                  <div className='w-60 z-0 px-2 ml-4 pt-40 pb-4 rounded -mt-40 bg-yellow-100 flex flex-col items-center justify-center shadow-md'>
                    <h2 className='text-center font-bold text-lg'>
                      {eachplan.name}
                    </h2>
                    <h2 className='text-center text-sm'>
                      {eachplan.description.slice(0, 50)}...
                    </h2>
                    <Link
                      to={`/plans/${eachplan._id}`}
                      className='explore_btn mt-2 text-center text-black w-28 font-semibold bg-yellow-300 py-1 rounded'
                    >
                      Join <i class='fas fa-arrow-right btn_animation'></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AllPlans;
