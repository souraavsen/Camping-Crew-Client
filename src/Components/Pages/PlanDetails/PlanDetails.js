import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import img from "../../../Images/campsite15.jpg";
import bookingnow from "../../../Images/booknow.png";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";

const PlanDetails = () => {
  const [planDetails, setPlanDetails] = useState({});
  const [joinflag, setJoinflag] = useState(false);
  const [joinusers, setJoinusers] = useState([]);

  const [allBookings, setAllBookings] = useState([]);

  const planId = useParams();
  const history = useHistory();
  const { user } = useAuth();

  const usernameref = useRef();
  const useremailref = useRef();
  const packagenameref = useRef();
  const packageIdref = useRef();

  useEffect(() => {
    fetch(`http://localhost:5000/plan-details/${planId.id}`)
      .then((res) => res.json())
      .then((data) => {
        setPlanDetails(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/booking-details/${planId.id}`)
      .then((res) => res.json())
      .then((data) => {
        setJoinusers(data);
      });
  }, []);

  const [orderdata, setOrderdata] = useState({
    username: "",
    email: "",
    package_id: "",
    packagename: "",
    contact: "",
    transiction: "",
    status: "Pending",
  });

  const handleorderdata = (e) => {
    const data = { ...orderdata };
    data[e.target.id] = e.target.value;
    data.username = usernameref.current.value;
    data.email = useremailref.current.value;
    data.package_id = packageIdref.current.value;
    data.packagename = packagenameref.current.value;
    setOrderdata(data);
  };

  const bookPlan = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:5000/add-booking", orderdata)
      .then((res) => {
        e.target.reset();
        console.log(res);
        // history.push("/all-plans");
        setOrderdata({
          username: "",
          email: "",
          package_id: "",
          packagename: "",
          contact: "",
          transiction: "",
          status: "Painding",
        });
        window.alert("Plan Booked Succefully.");
        history.push("/my-plans");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/all-bookings`)
      .then((res) => res.json())
      .then((data) => {
        setAllBookings(data);
      });
  }, []);

  const ifUserBooked = allBookings.filter((info) => info.email === user.email);
  console.log(ifUserBooked);
  let ifPlan = ifUserBooked.filter(
    (plan) => plan.package_id === planDetails._id
  );
  console.log(ifPlan);

  return (
    <div className='pt-12 pb-24'>
      <h1 className='text-4xl font-bold text-center pb-12 font_architect'>
        {planDetails.name}
      </h1>
      <div className='container lg:flex md:flex justify-between px-8 py-6'>
        <img
          className='rounded-md shadow-md md:w-1/2'
          src={planDetails.image ? planDetails.image : img}
          alt=''
        />
        <div className='md:ml-20'>
          <h4 className='text-justify py-6'>{planDetails.description}</h4>
          <div className='flex items-center pb-4'>
            <h4 className='pr-8 border-r-2 border-gray-400'>
              {planDetails.date}
            </h4>
            <h4 className='pl-8'>{planDetails.duration} Days</h4>
          </div>
          <h4>
            Price:{" "}
            <span className='text-lg text-yellow-900 font-semibold'>
              {planDetails.price}$
            </span>{" "}
            only
          </h4>
          <div className='flex justify-center items-center'>
            {ifPlan.length > 0 ? (
              <button
                className='py-1 text-black font-semibold mx-auto text-lg px-4 bg-yellow-200 cursor-default bg-opacity-60 mt-16 mb-4 rounded'
                disabled
              >
                Thanks For Joining Us
              </button>
            ) : (
              <button
                className='py-1 text-black font-semibold mx-auto text-lg px-4 bg-yellow-400 hover:bg-opacity-70 bg-opacity-60 mt-16 mb-4 rounded shadow-sm'
                onClick={() => setJoinflag(!joinflag)}
              >
                Join Us
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Joining Form */}
      {joinflag && (
        <div className='pt-20' id='joiningform'>
          <h1 className='text-4xl font-bold text-center pb-12 font_architect'>
            Book Now
          </h1>
          <div className='container lg:flex justify-center items-center'>
            <form onSubmit={(e) => bookPlan(e)}>
              <div class='flex flex-wrap mt-1 mb-6'>
                <div className='w-full flex justify-between md:mx-6'>
                  <div class='w-full px-3 mb-6 md:mb-0'>
                    <label
                      class='block tracking-wide text-gray-700 text-xs font-bold mb-2'
                      for='grid-first-name'
                    >
                      Name
                    </label>
                    <input
                      class='block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                      type='text'
                      id='username'
                      value={user.displayName}
                      ref={usernameref}
                      placeholder='user name'
                      readOnly
                      onChange={(e) => handleorderdata(e)}
                    />
                  </div>

                  <div class='w-full px-3 mb-6 md:mb-0'>
                    <label
                      class='block tracking-wide text-gray-700 text-xs font-bold mb-2'
                      for='grid-last-name'
                    >
                      Email
                    </label>
                    <input
                      class='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                      type='text'
                      id='email'
                      value={user.email}
                      ref={useremailref}
                      placeholder='email'
                      readOnly
                      onChange={(e) => handleorderdata(e)}
                    />
                  </div>
                </div>

                <div className='w-full flex justify-between md:mx-6'>
                  <input
                    id='package_id'
                    type='hidden'
                    value={planDetails._id}
                    ref={packageIdref}
                  />

                  <div class='w-full px-3 mb-6 pt-3 md:mb-0'>
                    <label
                      class='block tracking-wide text-gray-700 text-xs font-bold mb-2'
                      for='grid-last-name'
                    >
                      Package Name
                    </label>
                    <input
                      class='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                      type='text'
                      id='packagename'
                      value={planDetails.name}
                      readOnly
                      ref={packagenameref}
                      placeholder='Package Name'
                      onChange={(e) => handleorderdata(e)}
                    />
                  </div>
                  <div class='w-full px-3 mb-6 pt-3 md:mb-0'>
                    <label
                      class='block tracking-wide text-gray-700 text-xs font-bold mb-2'
                      for='grid-last-name'
                    >
                      Contact No.
                    </label>
                    <input
                      class='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                      type='text'
                      id='contact'
                      value={orderdata.contact}
                      required
                      placeholder='01XXXXXXXXXXX'
                      onChange={(e) => handleorderdata(e)}
                    />
                  </div>
                </div>
                <div class='w-full px-3 md:mx-6 mb-6 pt-3 md:mb-0'>
                  <label
                    class='block tracking-wide text-gray-700 text-xs font-bold mb-2'
                    for='grid-last-name'
                  >
                    Transection No.
                  </label>
                  <input
                    class='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    type='text'
                    id='transiction'
                    value={orderdata.transiction}
                    placeholder='Transection No'
                    onChange={(e) => handleorderdata(e)}
                  />
                </div>
                <input id='status' type='hidden' value='Painding' />

                <div class='w-full flex items-center px-3 md:mx-6 mb-6 pt-3 md:mb-0'>
                  <input
                    class='block bg-gray-200 text-gray-700 border border-gray-200 focus:outline-none focus:bg-white focus:border-gray-500'
                    type='checkbox'
                  />
                  <label
                    class='block tracking-wide text-gray-700 text-base font-bold ml-4'
                    for='grid-last-name'
                  >
                    I agree to the Terms and Conditions
                  </label>
                </div>
              </div>
              <div class='flex flex-wrap mx-auto mb-6'>
                <button
                  className='py-1 text-black font-semibold mx-auto text-lg px-4 bg-yellow-400 hover:bg-opacity-70 bg-opacity-60 mt-16 mb-4 rounded shadow-sm'
                  type='submit'
                >
                  Confirm Joining
                </button>
              </div>
            </form>

            <div className='w-11/12 mx-auto mt-7 mb-auto'>
              <Card className='bg-dark text-white'>
                <Card.Img src={planDetails.image} alt='Card image' />
                <Card.ImgOverlay className='bg-gray-800 bg-opacity-50 flex flex-col justify-center items-center'>
                  <Card.Title className='font-semibold text-3xl pb-4'>
                    {planDetails.name}
                  </Card.Title>
                  <Card.Text>{planDetails.date}</Card.Text>
                  <Card.Text>{planDetails.duration} Days</Card.Text>
                  <div className='flex justify-around pt-6 items-center'>
                    <Card.Text className='text-yellow-300 text-2xl font-bold'>
                      ${planDetails.price}
                    </Card.Text>
                    <img src={bookingnow} width='15%' alt='' />
                  </div>
                </Card.ImgOverlay>
              </Card>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanDetails;
