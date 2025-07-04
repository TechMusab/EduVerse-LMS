import React from "react";
import { useNavigate } from "react-router-dom";
import background from "../assets/hero-background.mp4";

export default function Signup() {
    const navigate = useNavigate();
  return (
    <>
      <section className="w-screen h-screen bg-surface flex gap-6">
        <div className="md:h-full md:w-1/2">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover hidden md:block"
            src={background}
          ></video>
        </div>
        <div className="w-full md:h-full md:w-1/2">
          <a
            href="#"
            className="text-primary-500 font-display font-semibold w-full flex justify-center mt-8 text-4xl"
          >
            EduVerse
          </a>
          <h3 className="text-2xl font-display flex justify-center mt-4">
            Login to
            <span className="text-primary-500 ml-2 font-display font-semibold   text-2xl">
              EduVerse
            </span>
          </h3>
          <p className="text-muted flex justify-center  ">
            Login to your account to continue
          </p>
          <form className="mt-14 " action="">
            <div className="relative w-[90%] my-4 ">
              <input
                type="text"
                id="username"
                placeholder=" "
                className="peer h-12 w-full rounded-3xl border border-gray-300 bg-gray-100 px-4 pt-4 pb-1 text-sm text-black outline-none focus:border-blue-500"
              />
              <label
                htmlFor="username"
                className="absolute left-4 top-3 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500"
              >
                Enter username
              </label>
            </div>

            <div className="relative w-[90%] my-4">
              <input
                type="password"
                id="password"
                placeholder=" "
                className="peer h-12 w-full rounded-3xl border border-gray-300 bg-gray-100 px-4 pt-4 pb-1 text-sm text-black outline-none focus:border-blue-500"
              />
              <label
                htmlFor="password"
                className="absolute left-4 top-3 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500"
              >
                Enter Password
              </label>
            </div>

            <button className="w-[90%] py-2 cursor-pointer  bg-primary-500 rounded-4xl text-primary-text text-lg mt-6 hover:bg-primary-600">
              Login
            </button>
          </form>
          <p className="text-muted mt-24 flex justify-center">
            Don't have an account?{" "}
            <a onClick={()=>navigate('/sign-up')} className="text-primary-500 font-semibold cursor-pointer">
              Sign up
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
