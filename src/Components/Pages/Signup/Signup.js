import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Signup.css";

const Signup = () => {
  const {
    googleSignin,
    setEmail,
    setPassword,
    SingUpWithEmail,
    error,
    setFirstName,
    setLastName,
    setError,
  } = useAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError("");
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  return (
    <div className='flex flex-col pt-16 pb-24 mx-4 md:mx-0 lg:mx-0'>
      <form
        class='w-full max-w-lg mx-auto bg-yellow-200 bg-opacity-70 background pb-24 pt-6 px-4 mb-4'
        onSubmit={(e) => {
          SingUpWithEmail(e);
        }}
      >
        <div className='flex w-11/12 lg:w-full justify-center items-center mb-6 '>
          <h4 className='text-2xl font-bold'>Sign Up</h4>
        </div>

        <div class='flex flex-wrap -mx-3 mb-6'>
          <div class='w-11/12 lg:w-full mx-auto md:w-1/2 px-3 mb-6 md:mb-0'>
            <label
              class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='grid-first-name'
            >
              First Name
            </label>
            <input
              class='block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              type='text'
              placeholder='first name'
              onChange={handleFirstName}
            />
          </div>
          <div class='w-11/12 lg:w-full mx-auto md:w-1/2 px-3'>
            <label
              class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='grid-last-name'
            >
              Last Name
            </label>
            <input
              class='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type='text'
              placeholder='last name'
              onChange={handleLastName}
            />
          </div>
        </div>
        <div className='-mx-3 mb-6'>
          <div class='w-11/12 lg:w-full mx-auto px-3'>
            <label
              class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='grid-last-name'
            >
              E-mail
            </label>
            <input
              class='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type='emial'
              required
              placeholder='example@example.com'
              onChange={handleEmailChange}
            />
          </div>
        </div>

        <div class='flex flex-wrap -mx-3 mb-6'>
          <div class='w-11/12 lg:w-full mx-auto px-3'>
            <label
              class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='grid-password'
            >
              Password
            </label>

            <input
              class='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type='password'
              required
              placeholder='password'
              onChange={handlePasswordChange}
            />
            <p class='text-xs italic text-red-500 text-center'>{error}</p>
          </div>
          <button
            className='py-2 text-black font-semibold mx-auto text-xl px-4 bg-yellow-400 hover:bg-opacity-70 bg-opacity-60 mt-4 rounded'
            type='submit'
          >
            Create Account
          </button>
        </div>
      </form>
      <p className='text-center'>
        Already have an account?{" "}
        <span>
          <Link
            className='text-yellow-500 hover:text-yellow-600 bg-opacity-60'
            to={"/signin"}
          >
            Sign in
          </Link>
        </span>
      </p>
      {/* For Signup with google */}
      <button
        className='py-2 text-black font-semibold mx-auto text-xl px-4 bg-yellow-500 hover:bg-opacity-70 bg-opacity-60 mt-4 rounded'
        onClick={googleSignin}
      >
        <i class='fab fa-google'></i>{" "}
        <span className='text-sm font-semibold'>Countinue with Google</span>
      </button>
    </div>
  );
};

export default Signup;
