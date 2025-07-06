import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { IoBookSharp } from "react-icons/io5";
import { MdOutlineHelp } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { MdQuestionAnswer } from "react-icons/md";
export default function Sidebar() {
  return (
    <>
    <section className="hidden lg:flex flex-col justify-between h-[84vh] p-6 bg-surface  shadow-xl w-[20%] my-2 mr-4 rounded-sm">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <AiFillDashboard />
          <p>Dashboard</p>
        </div>
        <div className="flex  items-center gap-4">
          <IoBookSharp />
          <p>Courses</p>
        </div>
        <div className="flex items-center gap-4">
          <IoBookSharp />
          <p>Chapter</p>
        </div>
        <div className="flex items-center gap-4">
          <MdOutlineHelp />
          <p>Help</p>
        </div>
        <div className="flex items-center gap-4">
          <IoMdSettings />
          <p>Settings</p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
        <IoLogOut />
          <p>Log out</p>
        </div>
        <div className="flex items-center gap-4">
        <MdQuestionAnswer />
          <p>FAQs</p>
        </div>
      </div>
      </section>
    </>
  );
}
