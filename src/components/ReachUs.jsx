import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const ReachUs = () => {
    const socialLinks = {
        whatsapp: "916380698618",
        youtube: "@ramachandranl8870",
        instagram: "rightchoice_trust"
      };

    const contact = {
        address: "No. 3, Public Office Road, Kala Hotel 1st Floor, Opp. Devi Theatre, Nagapattinam - 611001",
        phone: "+91 9095929553",
        email: "founder@rightchoicetrust.org",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d408.9247745995935!2d79.84109!3d10.768851!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a556d0025598d93%3A0xa3a75ec6f8b1fca4!2sRight%20Choice%20Educational%20And%20Charitable%20Trust!5e1!3m2!1sen!2sin!4v1741965824988!5m2!1sen!2sin",
    };

    return (
        <section className="py-10 px-6 sm:px-12 bg-[#f0f7f7]">
            <h1 className='text-4xl sm:text-5xl text-center p-5 sm:p-5 text-blue sm:mb-11 font-extrabold'>Reach Us</h1>
             
            <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-lg border border-white/30 shadow-lg rounded-xl p-6 sm:p-8 flex flex-col lg:flex-row gap-6">
                
                {/* Left Section - Contact Details */}
                <div className="flex flex-col justify-center gap-6 w-full lg:w-1/2">
                    <div className="flex items-center gap-4">
                        <FaMapMarkerAlt className="text-3xl text-blue" />
                        <p className="text-sm sm:text-lg leading-relaxed">{contact.address}</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <FaPhoneAlt className="text-2xl text-blue" />
                        <p className="text-sm sm:text-lg">{contact.phone}</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <FaEnvelope className="text-2xl text-blue" />
                        <p className="text-sm sm:text-lg">{contact.email}</p>
                    </div>
                        <div className='sm:w-[20%] flex justify-evenly gap-5'>
                          <div className='bg-white/5 border border-blue p-2 px-2 rounded-[50%] hover:scale-125  hover:bg-white transition-all duration-300  flex justify-center items-center'>
                            <a href={`https://wa.me/${socialLinks.whatsapp}`} target="_blank" rel="noopener noreferrer">
                              <IoLogoWhatsapp className='text-2xl hover:text-[#004e92] text-blue font-bold' />
                            </a>
                          </div>
                          <div className='bg-white/5 border border-blue p-2 px-2 rounded-[50%] hover:scale-125  hover:bg-white transition-all duration-300  flex justify-center items-center'>
                            <a href={`https://www.youtube.com/${socialLinks.youtube}`} target="_blank" rel="noopener noreferrer">
                              <FaYoutube className='text-2xl hover:text-[#004e92] text-blue font-bold' />
                            </a>
                          </div>
                          <div className='bg-white/5 border border-blue p-2 px-2 rounded-[50%] hover:scale-125  hover:bg-white transition-all duration-300  flex justify-center items-center'>
                            <a href={`https://www.instagram.com/${socialLinks.instagram}`} target="_blank" rel="noopener noreferrer">
                              <FaInstagram className='text-2xl hover:text-[#004e92] text-blue font-bold' />
                            </a>
                          </div>
                        </div>
                </div>

                {/* Right Section - Google Map */}
                <div className="w-full lg:w-1/2">
                    <iframe
                        title="Google Map"
                        src={contact.mapUrl}
                        className="w-full h-60 rounded-lg border border-white/30 shadow-lg"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

            </div>
        </section>
    );
};

export default ReachUs;
