import React from 'react'

const Coreservice = () => {
  const studentData = [
    { count: 12, category: "MBBS Students" },
    { count: 2000, category: "Medical Students" },
    { count: 4000, category: "Engineering Students" },
    { count: 30, category: "Agriculture Students" },
    { count: 10, category: "Fisheries Students" },
    { count: 10, category: "Law Students" },
    { count: 1000, category: "Arts & Science Students" },
    { count: 500, category: "Polytechnic Students" },
  ];

const total = "7,500";

  return (
    <section>
      <section className="min-h-screen p-3 sm:flex justify-around items-center bg-gradient-to-br from-[#000428] to-[#004e92] sm:p-6">
    <h1 className="text-3xl text-white font-extrabold border-white/20 text-center border-b-2 p-2 mb-4">Core Service</h1>
  <div className="max-w-3xl flex flex-col gap-3 w-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl p-3 sm:p-8 text-white">
    <p className="sm:text-lg text-[15px]">
    Right Choice is a transformative program dedicated to providing free higher education to deserving students from economically disadvantaged backgrounds. By partnering with leading educational institutions, we ensure that students receive not only tuition-free education but also support for transportation, hostel facilities (where applicable), food, books, and stationery, making quality education accessible to all.    </p>
  <p className="sm:text-lg text-[15px]">We identify high-potential students who have scored above <b>85%</b> but lack the financial means to even apply. A rigorous two-step verification process, including neighborhood visits and in-person interviews, ensures that no deserving student is overlooked.</p>
  <p className="sm:text-lg text-[15px]">Since the inception of this initiative, we have successfully placed <b>{total}+</b> students across various disciplines, including:</p>
  <ul className="list-disc pl-5 sm:text-lg text-[15px] space-y-2">
      {studentData.map((item, index) => (
        <li key={index}>{`${item.count}+ ${item.category}`}</li>
      ))}
    </ul>
  <p className="sm:text-lg text-[15px]">To help students transition smoothly into their academic journey, dedicated mentors provide continuous guidance, assessment, and emotional support. Additionally, students undergo soft skills training and employability programs, ensuring they are career-ready upon graduation.</p>
  <p className="sm:text-lg text-[15px]">Our Right Choice Centre of Excellence offers specialized technical certifications, equipping students with industry-relevant skills to enhance their future prospects.</p>
  <p className="sm:text-lg text-[15px]">At Right Choice, we firmly believe that education is a right, not a privilege. Through this initiative, we are shaping a generation of confident, skilled, and empowered individuals, ready to make a difference in society.</p>
  </div>
</section>

    </section>
  )
}

export default Coreservice
