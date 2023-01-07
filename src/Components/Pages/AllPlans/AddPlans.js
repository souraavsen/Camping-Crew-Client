import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddPlans = () => {

  const history = useHistory();

  const [plandata, setPlandata] = useState({
    name: "",
    description: "",
    image: "",
    date: "",
    duration: "",
    price: "",
  });

  const [ifsaved, setIfsaved] = useState(false);

  const handlePlanData = (e) => {
    const data = { ...plandata };
    data[e.target.id] = e.target.value;
    setPlandata(data);
    setIfsaved(false)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios
      .post(
        "https://camping-crew.onrender.com/add-plans",
        plandata)
      .then((res) => {
        console.log(res);
          setPlandata({
            name: "",
            description: "",
            image: "",
            date: "",
            duration: "",
            price: "",
          });
        setIfsaved(true);
        e.target.reset()
        history.push("/all-plans");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(ifsaved);
  console.log(plandata.description);

  return (
    <div>
      <div className='flex flex-col pt-16 pb-24'>
        <form
          class='w-11/12 md:w-full max-w-5xl mx-auto bg-yellow-200 bg-opacity-70 py-6 px-4 mb-4'
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className='flex w-11/12 lg:w-full justify-center items-center mb-6 '>
            <h4 className='text-3xl font-bold font_architect py-4'>
              Add Plans
            </h4>
          </div>

          <div class='flex flex-wrap -mx-3 mb-6'>
            <div class='w-11/12 lg:w-full mx-auto md:w-1/2 px-3 mb-6 md:mb-0'>
              <label
                class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                for='grid-first-name'
              >
                Plan Name
              </label>
              <input
                class='block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                type='text'
                id='name'
                value={plandata.name}
                placeholder='plan name'
                onChange={(e) => handlePlanData(e)}
              />
            </div>
            <div class='w-11/12 lg:w-full mx-auto md:w-1/2 px-3 pb-3'>
              <label
                class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                for='grid-last-name'
              >
                Description
              </label>
              <textarea
                class='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                placeholder='description'
                id='description'
                onChange={(e) => handlePlanData(e)}
              >
                {ifsaved ? "" : plandata.description}
              </textarea>
            </div>

            <div class='w-11/12 lg:w-full mx-auto md:w-1/2 px-3 pb-3'>
              <label
                class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                for='grid-last-name'
              >
                Image Link
              </label>
              <input
                class='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                type='text'
                id='image'
                value={plandata.image}
                placeholder='image link'
                onChange={(e) => handlePlanData(e)}
              />
            </div>

            <div class='w-11/12 lg:w-full mx-auto md:w-1/2 px-3 pb-3'>
              <label
                class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                for='grid-last-name'
              >
                Date
              </label>
              <input
                class='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                type='text'
                id='date'
                value={plandata.date}
                placeholder='Start date - End date'
                onChange={(e) => handlePlanData(e)}
              />
            </div>

            <div class='w-11/12 lg:w-full mx-auto md:w-1/2 px-3 pb-3'>
              <label
                class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                for='grid-last-name'
              >
                Duration
              </label>
              <input
                class='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                type='text'
                id='duration'
                value={plandata.duration}
                placeholder='Total plan duration in day'
                onChange={(e) => handlePlanData(e)}
              />
            </div>

            <div class='w-11/12 lg:w-full mx-auto md:w-1/2 px-3 pb-3'>
              <label
                class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                for='grid-last-name'
              >
                Price
              </label>
              <input
                class='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                type='text'
                id='price'
                value={plandata.price}
                placeholder='amount'
                onChange={(e) => handlePlanData(e)}
              />
            </div>
          </div>

          <div class='flex flex-wrap -mx-3 mb-6'>
            <button
              className='py-2 text-black font-semibold mx-auto text-xl px-4 bg-yellow-400 hover:bg-opacity-70 bg-opacity-60 mt-4 rounded'
              type='submit'
            >
              Add Plan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPlans;
