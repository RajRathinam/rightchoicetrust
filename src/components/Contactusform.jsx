import { useState } from "react";

export default function Contactusform() {
  return (
    <div className="flex justify-center sm:py-12 items-center min-h-screen bg-gradient-to-tr from-[#000428] to-[#004e92] p-2 sm:p-4 py-4">
      <div className="bg-white p-2 py-3 sm:p-8 rounded-lg shadow-2xl w-full max-w-4xl">
        <h3 className="text-3xl font-bold mb-4 relative inline-block border-b-4 pb-2">ENQUIRY FORM</h3>
        <form action="https://formsubmit.co/restart18112024@gmail.com" method="POST" className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input type="text" name="Name" className="input input-bordered w-full" placeholder="Enter Your Name" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Email</label>
              <input type="email" name="Email" className="input input-bordered w-full" placeholder="Enter Your Email" required />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input type="tel" name="Phone Number" className="input input-bordered w-full" pattern="[0-9]{10}" placeholder="Enter Phone Number" required />
            </div>
          </div>
          <div>
            <label className="block text-gray-700">I am interested in:</label>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" name="Interest" value="Refer a Student" className="checkbox" />
                I want to refer a student
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="Interest" value="Donate to Trust" className="checkbox" />
                I would like to donate in your trust
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="Interest" value="Open Enrollment" className="checkbox" />
                I want to open enrollment for my institution
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="Interest" value="Become a Member" className="checkbox" />
                I want to be a member in your trust
              </label>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea name="Message" className="textarea textarea-bordered w-full" rows="3" placeholder="Enter your message" required></textarea>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="w-full py-2 text-xl bg-black text-white font-bold rounded-lg">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
