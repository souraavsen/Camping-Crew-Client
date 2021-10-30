import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Signin.css";

const Signin = () => {
  const {
    setEmail,
    setPassword,
    signInWithEmail,
    googleSignin,
    error,
    setError,
  } = useAuth();
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setError("");
  };

  return (
    <div className='flex flex-col pt-16 pb-24 mx-4 md:mx-0 lg:mx-0'>
      <form
        class='w-full max-w-lg mx-auto bg-yellow-200 bg-opacity-70 signin_background pb-24 pt-6 px-4 mb-4'
        onSubmit={(e) => {
          signInWithEmail(e);
        }}
      >
        <div className='flex w-11/12 lg:w-full justify-center items-center mb-6 '>
          <h4 className='text-2xl font-bold'>Sign In</h4>
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
              onChange={handleEmail}
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
              onChange={handlePassword}
            />
            <p class='text-xs italic text-red-500 text-center'>{error}</p>
          </div>
        </div>
        <div className='mx-auto flex justify-center'>
          <button
            className='py-2 text-black font-semibold mx-auto text-xl px-4 bg-yellow-400 hover:bg-opacity-70 bg-opacity-60 mt-4 rounded'
            type='submit'
          >
            Sign In
          </button>
        </div>
      </form>
      <p className='text-center pt-6'>
        Haven't created account yet?{" "}
        <span>
          <Link
            className='text-yellow-500 hover:text-yellow-600 bg-opacity-60'
            to={"/signup"}
          >
            Sign up
          </Link>
        </span>
      </p>

      {/* Google Signin process*/}
      <button
        className='py-2 text-black font-semibold mx-auto text-xl px-4 bg-yellow-500 hover:bg-opacity-70 bg-opacity-60 mt-4 rounded'
        onClick={googleSignin}
      >
        <i class='fab fa-google'></i>{" "}
        <span className='text-sm font-semibold'>Signin with Google</span>
      </button>
    </div>
  );
};

export default Signin;
