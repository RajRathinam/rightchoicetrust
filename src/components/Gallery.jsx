import { useState } from "react";

export default function ImageGallery() {
  const [filter, setFilter] = useState("ALL");

  const categories = [

    { name: "SCHOOL MEETUP", image: "../../public/gallery/school.jpg", type: "SCHOOL MEETUP" },

    { name: "EDUCATIONAL ASSIST", image: "../../public/gallery/edu1.jpg", type: "EDUCATIONAL ASSIST" },
    { name: "EDUCATIONAL ASSIST", image: "../../public/gallery/edu2.jpg", type: "EDUCATIONAL ASSIST" },
    { name: "EDUCATIONAL ASSIST", image: "../../public/gallery/edu3.jpg", type: "EDUCATIONAL ASSIST" },
    { name: "EDUCATIONAL ASSIST", image: "../../public/gallery/edu4.jpg", type: "EDUCATIONAL ASSIST" },
    { name: "EDUCATIONAL ASSIST", image: "../../public/gallery/edu5.jpg", type: "EDUCATIONAL ASSIST" },
    { name: "EDUCATIONAL ASSIST", image: "../../public/gallery/edu6.jpg", type: "EDUCATIONAL ASSIST" },
    { name: "EDUCATIONAL ASSIST", image: "../../public/gallery/edu7.jpg", type: "EDUCATIONAL ASSIST" },
    { name: "EDUCATIONAL ASSIST", image: "../../public/gallery/edu8.jpg", type: "EDUCATIONAL ASSIST" },

    { name: "CAREER COUNSELLING", image: "../../public/gallery/councelling1.jpg", type: "CAREER COUNSELLING" },
    { name: "CAREER COUNSELLING", image: "../../public/gallery/councelling2.jpg", type: "CAREER COUNSELLING" },
    { name: "CAREER COUNSELLING", image: "../../public/gallery/councelling3.jpg", type: "CAREER COUNSELLING" },
    { name: "CAREER COUNSELLING", image: "../../public/gallery/councelling4.jpg", type: "CAREER COUNSELLING" },
    { name: "CAREER COUNSELLING", image: "../../public/gallery/councelling5.jpg", type: "CAREER COUNSELLING" },
    { name: "CAREER COUNSELLING", image: "../../public/gallery/councelling6.jpg", type: "CAREER COUNSELLING" },
    { name: "CAREER COUNSELLING", image: "../../public/gallery/councelling7.jpg", type: "CAREER COUNSELLING" },
    { name: "CAREER COUNSELLING", image: "../../public/gallery/councelling8.jpg", type: "CAREER COUNSELLING" },
    { name: "CAREER COUNSELLING", image: "../../public/gallery/councelling9.jpg", type: "CAREER COUNSELLING" },
    { name: "CAREER COUNSELLING", image: "../../public/gallery/councelling10.jpg", type: "CAREER COUNSELLING" },
    { name: "CAREER COUNSELLING", image: "../../public/gallery/councelling11.jpg", type: "CAREER COUNSELLING" },
    { name: "CAREER COUNSELLING", image: "../../public/gallery/councelling12.jpg", type: "CAREER COUNSELLING" }

  ];

  const filteredCategories =
    filter === "ALL" ? categories : categories.filter((category) => category.type === filter);

  return (
    <div className="sm:p-10 p-3">
      <div className="flex flex-wrap justify-center sm:gap-4 gap-2 mb-5 sm:mb-10">
        {["ALL", "SCHOOL MEETUP", "EDUCATIONAL ASSIST", "CAREER COUNSELLING"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`sm:px-4 text-[11px] sm:text-lg sm:py-2 px-2 py-1 border rounded-3xl transition ${filter === category ? "bg-gradient-to-tr from-[#000428] to-[#004e92] text-white" : "bg-transparent text-black border-black"}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredCategories.map((category, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
            <img src={category.image} alt={category.name} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute opacity-0 hover:opacity-100 bottom-0 w-full bg-black bg-opacity-75 text-white text-center py-2">
              {category.type}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}