import React from 'react';

const journeyData = [
    { year: "2020", title: "Foundation", description: "Right Choice Educational & Charitable Trust was established by Dr. L. Ramachandran with a vision to support education in Nagapattinam." },
    { year: "2020", title: "First Scholarship Program", description: "619 Students gained support for scholarships in various courses during this year." },
    { year: "2021", title: "Free NEET Coaching", description: "Established NEET Coaching and 938 students gained scholarships support during this year." },
    { year: "2022", title: "Tutorial Classes", description: "Tutorial classes started for students, and 1362 students gained scholarship support during this year." },
    { year: "2023", title: "Digital Learning Initiative - Free Books", description: "Launched digital learning initiatives by providing free books for NEET, and 2281 students gained scholarship support during this year." },
    { year: "2024", title: "Computer Coaching Classes", description: "Launched Computer classes for students, and 3052 students gained scholarship support during this year." }
];

const OurJourney = () => {
    return (
        <section className="bg-[#f0f7f7] sm:p-12 py-5 px-2">
            <h1 className="text-3xl text-darkblue font-extrabold border-white/20 text-center border-b-2 p-2 mb-4">
                Our Journey
            </h1>
            <ul className="timeline gap-5 timeline-snap-icon max-md:timeline-compact timeline-vertical">
                {journeyData.map((event, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <li key={index}>
                            
                            {index !== 0 && <hr />}
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="sm:h-10 sm:w-10 h-7 w-7"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div
                                className={`timeline-${isEven ? "start" : "end"} p-2 sm:mb-10 ${
                                    isEven ? "md:text-end sm:hover:-translate-x-3" : "sm:hover:translate-x-3"
                                } bg-slate-200 sm:p-3 rounded-2xl transition-all duration-300 text-[15px] sm:text-lg`}
                            >
                                <time className="font-mono px-2 py-1 sm:px-4 sm:py-2 bg-darkblue rounded-2xl text-white">
                                    {event.year}
                                </time>
                                <div className="text-xl sm:text-2xl sm:my-2 font-black">{event.title}</div>
                                {event.description}
                            </div>
                          
                            {index !== journeyData.length - 1 && <hr />}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default OurJourney;
