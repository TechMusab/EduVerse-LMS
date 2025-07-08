import React from "react";
import { IoBookSharp } from "react-icons/io5";
import Progressbar from "../Progressbar";
import { PiReadCvLogoBold } from "react-icons/pi";

export default function Center() {
  return (
    <>
      <section className="w-[100%] lg:w-[50%] bg-surface shadow-xl p-6 mx-4 mt-2">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center bg-gray-100 rounded-sm">
          <div className="flex gap-6 justify-center items-center p-4">
            <IoBookSharp size={30} />
            <div className="flex flex-col gap-1">
              <p className="text-text text-sm">The Name of the Course</p>

              <div className="w-full h-1 bg-muted rounded-full">
                <div
                  className="h-1 bg-primary-500 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>

              <p className="text-sm text-muted">60% Completed</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 p-4">
            <button className="bg-primary-500 text-white px-2 py-2 lg:px-4 rounded-lg hover:bg-primary-600 cursor-pointer">
              Continue
            </button>
            <button className="bg-gray-200 text-text px-2 py-2 lg:px-4  rounded-lg hover:bg-gray-300 cursor-pointer">
              View Course
            </button>
          </div>
        </div>
        <div className="bg-gray-100 mt-2 p-4">
          <h3 className="font-bold">Status</h3>
          <div className="flex flex-col md:flex-row gap-6 mt-2">
            <div className="py-4 px-6 w-[100%] bg-yellow-100 rounded-lg md:w-[30%]">
              <div className=" flex justify-between">
                <PiReadCvLogoBold className="bg-orange-300 rounded-full w-10 h-10 p-2" />
                <Progressbar bg="#facc15"></Progressbar>
              </div>
              <p className="font-bold text-2xl">42</p>
              <p className="text-gray-600 text-sm">Lessons</p>
              <p className="text-primary-500 text-base font-light">of 73 Completed</p>
            </div>
            <div className="py-4 px-6 w-[100%] bg-red-100 rounded-lg md:w-[30%]">
              <div className=" flex justify-between">
                <PiReadCvLogoBold className="bg-red-300 rounded-full w-10 h-10 p-2" />
                <Progressbar bg="#f87171"></Progressbar>
              </div>
              <p className="font-bold text-2xl">4</p>
              <p className="text-gray-600 text-sm">Assignments</p>
              <p className="text-primary-500 text-base font-light">of 10 Completed</p>
            </div>
            <div className="py-4 px-6 w-[100%] bg-green-100 rounded-lg md:w-[30%]">
              <div className=" flex justify-between">
                <PiReadCvLogoBold className="bg-green-300 rounded-full w-10 h-10 p-2" />
                <Progressbar bg="#4ade80"></Progressbar>
              </div>
              <p className="font-bold text-2xl">3</p>
              <p className="text-gray-600 text-sm">Tests</p>
              <p className="text-primary-500 text-base font-light">of 10 Completed</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 mt-2 p-4">
          <div className="p-4 flex justify-between">
            <h3 className="font-bold md:text-2xl">My Courses</h3>
            <div className="flex gap-4">
            <p className="font-semibold">Active</p>
            <p className="font-semibold">Completed</p>

            </div>
          </div>
          <div className="flex justify-between p-4 text-gray-500">
          <p>Course Name</p>
          <p>Completed</p>
          <p>Status</p>
          </div>
         <ul className="font-semibold">
            <li className="flex justify-between p-4 border-b border-gray-200">
              <p>Web Development</p>
              <p>60%</p>
              <p className="text-green-500">In Progress</p>
            </li>
            <li className="flex justify-between p-4 border-b border-gray-200">
              <p>Data Science</p>
              <p>100%</p>
              <p className="text-gray-500">Completed</p>
            </li>
            <li className="flex justify-between p-4 border-b border-gray-200">
              <p>Machine Learning</p>
              <p>80%</p>
              <p className="text-green-500">In Progress</p>
            </li>
         </ul>
        </div>
      </section>
    </>
  );
}
