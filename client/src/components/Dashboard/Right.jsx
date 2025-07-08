import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../css/custom-calender.css";
export default function Right() {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <section className="flex flex-col gap-4 p-4">
        <div className="p-4 bg-gray-100">
          <h3 className="font-bold mb-4">Status</h3>
          <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md p-4">
            <Calendar onChange={setDate} value={date} />
          </div>
        </div>
        <div className="p-4 bg-gray-100">
          <h3 className="font-bold mb-4">Upcoming</h3>
          <div className="max-w-sm mx-auto rounded-xl shadow-md p-4 flex gap-4">
            <p className="font-semibold">10 July</p>
            <div className="flex flex-col gap-2">
              <p className="text-sm">Assignment 1</p>
              <p className="text-sm">Assignments</p>
            </div>
          </div>
          <div className="max-w-sm mx-auto rounded-xl shadow-md p-4 flex gap-4">
            <p className="font-semibold">20 July</p>
            <div className="flex flex-col gap-2">
              <p className="text-sm">Assignment 2</p>
              <p className="text-sm">Project Submission</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
