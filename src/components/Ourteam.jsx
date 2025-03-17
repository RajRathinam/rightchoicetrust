import React from 'react';

const OurTeam = () => {
    const founder = {
        name: "Dr. L. Ramachandran M.Tech., Ph.D.",
        title: "Founder & Chairman",
        description:
            "Dr. Ramachandran (M.Tech., Ph.D.) is a highly accomplished educator and the visionary founder of Right Choice Educational & Charitable Trust. With over 15 years of experience in the educational field, he has guided and mentored countless students toward academic and professional success.",
        image: "/founder_pass.jpg",
    };
    const teamMembers = [
        {
            name: "L. Thanasekar",
            title: "CEO",
            location: "Tenkasi",
            qualifications: "B.E, M.E - (Ph.D)",
            image: "/thanasekar.png",
        },
        {
            name: "Dr. Sivakumar",
            title: "Career Advisor",
            location: "Coimbatore",
            qualifications: "M.E, Ph.D",
            image: "/sivakumar.jpg",
        },
        {
            name: "Dr. A. Arjunan",
            title: "Scholarships Organizer",
            location: "Tanjavur",
            qualifications: "DCE, B.E, M.E, Ph.D",
            image: "/arjunan.png",
        },
        {
            name: "S. Mohamed Naina Maricar",
            title: "Legal Analyzer",
            location: "Nagapattinam",
            qualifications: "MBA, LLB",
            image: "/mohamed.png",
        },
    ];
    

    return (
        <section className="py-10 px-3 sm:px-12 bg-[#f0f7f7]">
              <h1 className='text-4xl sm:text-5xl text-center p-5 sm:p-5 text-blue sm:mb-5 font-extrabold'>Our Team</h1>
            <div className="max-w-4xl mb-11 sm:mb-20 mx-auto bg-gradient-to-tr from-[#000428] to-[#004e92] shadow-lg rounded-xl p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8">
              
                <div className="w-40 h-40 sm:w-50 sm:h-50 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
                    <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover"
                    />
                </div>

             
                <div className="text-center md:text-left text-white">
                    <h2 className="text-2xl sm:text-3xl font-bold">{founder.name}</h2>
                    <p className="text-lg text-white/80 mt-1">{founder.title}</p>
                    <p className="text-sm sm:text-lg mt-4 leading-relaxed">
                        {founder.description}
                    </p>
                </div>
            </div>
            <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="bg-gradient-to-tr from-[#000428] to-[#004e92] text-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center"
                    >
                    
                        <div className="w-35 h-40 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                       
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <p className="text-white/80 text-lg">{member.qualifications}</p>
                        <p className="text-sm mt-2">{member.title}</p>
                        <p className="text-white/70 text-sm">{member.location}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurTeam;
