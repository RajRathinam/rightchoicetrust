import { useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

export default function StatsSection() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 500, // Faster animations (default is 1000ms)
        easing: "ease-in-out", // Smooth effect
        once: true, // Animates only once
      });
    }
  }, []);

  const stats = [
    { icon: FaCalendarAlt, value: "10+", label: "Years of Excellence" },
    { icon: FaPeopleGroup,value: "7500+", label: "Lives Touched" },
    { icon: FaHandshake,value: "435+", label: "Partners" },
    { icon: FaHeart,value: "1500+", label: "Volunteers" },
  ];

  return (
    <section className="sm:py-20 py-10 flex flex-col gap-4 bg-gradient-to-tr from-[#000428] to-[#004e92]">
      <h1 className="text-3xl text-white font-extrabold text-center p-2 mb-4">
      Numbers that tell our story
            </h1>
      <div className="container mx-auto px-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg p-6 rounded-2xl flex flex-col justify-between items-center"
              data-aos="flip-up"
              data-aos-delay={index * 100} // Faster delay (default is 200+)
            >
               <stat.icon className="text-5xl text-white" />
              <h2 className="text-[40px] sm:text-[55px] font-bold text-white">{stat.value}</h2>
              <p className="text-white font-bold tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
