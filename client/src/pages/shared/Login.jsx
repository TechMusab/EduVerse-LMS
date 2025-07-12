import React from "react";
import { useNavigate } from "react-router-dom";
import background from "../../assets/hero-background.mp4";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Toast from "../../components/shared/Toast";

export default function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [toast, setToast] = useState(null);
  
  const onSubmit = async (data) => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    console.log(result);
    if (res.status === 200) {
      setToast({ message: result.message, type: "success" });
      localStorage.setItem("token", result.token);
      navigate("/dashboard");
    } else {
      setToast({ message: result.message, type: "error" });
    }
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };
  
  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      <section className="w-screen h-screen bg-background flex gap-6">
        <div className="md:h-full md:w-1/2 relative overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover hidden md:block"
            src={background}
          ></video>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 hidden md:block"></div>
        </div>
        
        <div className="w-full md:h-full md:w-1/2 flex flex-col justify-center px-8">
          <div className="max-w-md mx-auto w-full">
            <a
              href="#"
              className="text-primary-500 font-display font-semibold w-full flex justify-center mb-8 text-4xl animate-fade-in"
            >
              EduVerse
            </a>
            
            <div className="text-center mb-8 animate-slide-up">
              <h3 className="text-2xl font-display mb-2">
                Welcome back to
                <span className="gradient-primary bg-clip-text text-transparent ml-2 font-display font-semibold text-2xl">
                  EduVerse
                </span>
              </h3>
              <p className="text-text-light">
                Sign in to continue your learning journey
              </p>
            </div>
            
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="relative">
                <input
                  type="text"
                  id="username"
                  placeholder=" "
                  {...register("username")}
                  className="peer h-14 w-full rounded-xl border-2 border-gray-300 bg-gray-50 px-4 pt-4 pb-1 text-sm text-text outline-none focus:border-primary-500 transition-all duration-300"
                />
                <label
                  htmlFor="username"
                  className="absolute left-4 top-4 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary-500"
                >
                  Enter username
                </label>
              </div>

              <div className="relative">
                <input
                  type="password"
                  id="password"
                  placeholder=" "
                  {...register("password")}
                  className="peer h-14 w-full rounded-xl border-2 border-gray-300 bg-gray-50 px-4 pt-4 pb-1 text-sm text-text outline-none focus:border-primary-500 transition-all duration-300"
                />
                <label
                  htmlFor="password"
                  className="absolute left-4 top-4 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary-500"
                >
                  Enter Password
                </label>
              </div>

              <button 
                type="submit"
                className="w-full py-3 cursor-pointer gradient-primary rounded-xl text-white text-lg font-semibold hover:shadow-glow-hover transition-all duration-300"
              >
                Sign In
              </button>
            </form>
            
            <p className="text-text-light text-center mt-8">
              Don't have an account?{" "}
              <a
                onClick={() => navigate("/sign-up")}
                className="text-primary-500 font-semibold cursor-pointer hover:underline transition-colors"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
} 