import { useState } from "react";

export default function Registrationform() {
  return (
    <div className="flex bg-white justify-center items-center sm:py-10 min-h-screen bg-gradient-to-tr from-[#000428] to-[#004e92] p-2 py-4">
      <div className="bg-white p-2 sm:p-8 rounded-lg shadow-2xl w-full max-w-4xl">
        <h3 className="text-lg sm:text-3xl font-bold mb-4 relative inline-block border-b-4 pb-2">STUDENT REGISTRATION FORM</h3>
        <form action="https://formsubmit.co/restart18112024@gmail.com" method="POST" className="p-1 space-y-4">
          <div>
            <label className="block uppercase  text-gray-600">Student Name</label>
            <input type="text" name="Student Name" className="input input-bordered w-full" placeholder="Enter Student Name" required />
          </div>
          <div className="grid grid-cols-1 mt-0 md:grid-cols-2 gap-2 sm:gap-4">
            <div>
              <label className="block uppercase text-gray-600">Mobile Number</label>
              <input type="tel" name="Mobile Number" className="input input-bordered w-full" pattern="[0-9]{10}" placeholder="Enter Mobile Number" required />
            </div>
            <div>
              <label className="block uppercase text-gray-600">Whatsapp Number</label>
              <input type="tel" name="Whatsapp Number" className="input input-bordered w-full" pattern="[0-9]{10}" placeholder="Enter Whatsapp Number" required />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
            <div>
              <label className="block uppercase text-gray-600">Age</label>
              <input type="number" name="Age" className="input input-bordered w-full" min="1" placeholder="Enter Age" required />
            </div>
            <div>
              <label className="block uppercase text-gray-600">Date of Birth</label>
              <input type="date" name="DOB" className="input input-bordered w-full" required />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
            <div>
              <label className="block uppercase text-gray-600">Community</label>
              <select name="Community" className="select select-bordered w-full" required>
                <option disabled>Select Community</option>
                <option value="OC">OC</option>
                <option value="BC">BC</option>
                <option value="BCM">BCM</option>
                <option value="MBC & DNC">MBC & DNC</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
              </select>
            </div>
            <div>
              <label className="block uppercase text-gray-600">School Name</label>
              <input type="text" name="School Name" className="input input-bordered w-full" placeholder="Enter School Name" required />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
            <div>
              <label className="block uppercase text-gray-600">District</label>
              <input type="text" name="Place" className="input input-bordered w-full" placeholder="Enter District" required />
            </div>
            <div>
              <label className="block uppercase text-gray-600">Studying Group</label>
              <select name="Studying Group" className="select select-bordered w-full" required>
                <option disabled>Select Studying Group</option>
                <option value="PCMB">PCMB</option>
                <option value="PCMC">PCMC</option>
                <option value="PCBC">PCBC</option>
                <option value="PCBZ">PCBZ</option>
                <option value="M-VOC">M-VOC</option>
                <option value="ARTS">ARTS</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block uppercase text-gray-600">Course Willingness</label>
            <select name="Course Willingness" className="select select-bordered w-full" required>
              <option disabled>Select Course</option>
              <option value="Medical">Medical</option>
              <option value="Engg">Engg</option>
              <option value="Law">Law</option>
              <option value="Agri">Agri</option>
              <option value="Fisheries">Fisheries</option>
              <option value="Arts">Arts</option>
              <option value="Poly">Poly</option>
            </select>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="w-full py-2 text-xl text-white font-bold rounded-lg" style={{ background: "linear-gradient(90deg, #667eea, #764ba2)" }}>Submit Registration</button>
          </div>
        </form>
      </div>
    </div>
  );
}
