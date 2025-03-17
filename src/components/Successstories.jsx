import React from 'react'

const Successstories = () => {
    const stories = [
        {
            name: "Priya S.",
            quote: "The scholarship from Right Choice Trust helped me pursue my engineering degree. Today, I'm working as a software engineer at a leading tech company. Forever grateful!",
            degree: "B.Tech Graduate, 2021",
            image: "../../public/raj.png",
        },
        {
            name: "Karthik R.",
            quote: "The career guidance I received from the Trust helped me choose the right path. Their mentorship was invaluable in shaping my career in medicine.",
            degree: "MBBS Graduate, 2022",
            image: "../../public/raj.png", 
        }, {
            name: "Karthik R.",
            quote: "The career guidance I received from the Trust helped me choose the right path. Their mentorship was invaluable in shaping my career in medicine.",
            degree: "MBBS Graduate, 2022",
            image: "../../public/raj.png", 
        }, {
            name: "Karthik R.",
            quote: "The career guidance I received from the Trust helped me choose the right path. Their mentorship was invaluable in shaping my career in medicine.",
            degree: "MBBS Graduate, 2022",
            image: "../../public/raj.png", 
        }, {
            name: "Karthik R.",
            quote: "The career guidance I received from the Trust helped me choose the right path. Their mentorship was invaluable in shaping my career in medicine.",
            degree: "MBBS Graduate, 2022",
            image: "../../public/raj.png", 
        },
    ];

    return (
        <section className="py-10 px-4 sm:px-12 bg-gradient-to-tr from-[#000428] to-[#004e92]">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8">
                Success Stories
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {stories.map((story, index) => (
                    <div
                        key={index}
                        className="backdrop-blur-lg bg-white/10 border border-white/30 shadow-lg rounded-xl p-4 sm:p-8 text-center hover:scale-105 transition-all duration-300"
                    >
                        {/* Profile Image */}
                        <img
                            src={story.image}
                            alt={story.name}
                            className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full border-4 border-white shadow-md object-cover"
                        />
                        
                        {/* Name */}
                        <h3 className="text-xl font-semibold text-white mt-4">{story.name}</h3>
                        
                        {/* Quote */}
                        <p className="text-white text-sm sm:text-lg mt-4 leading-relaxed">
                            "{story.quote}"
                        </p>

                        {/* Degree */}
                        <span className="block text-white/80 text-sm sm:text-base mt-4">
                            {story.degree}
                        </span>
                    </div>
                ))}
            </div>
        </section>
  )
}

export default Successstories
