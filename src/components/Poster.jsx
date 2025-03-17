import React from 'react'
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Poster = () => {

  const contactInfo = {
    phone: "90959 29553",
    address: "No 3, Public Office Road, Kala Hotel 1st floor, Nagapattinam",
    email: "founder@rightchoicetrust.com"
  };

  const socialLinks = {
    whatsapp: "916380698618",
    youtube: "@ramachandranl8870",
    instagram: "rightchoice_trust"
  };

  return (
    <section className="bg-darkblue p-5 sm:p-5 flex">
      <div className='bg-white rounded-xl h-[210px] sm:h-[195px] w-full p-4 hidden sm:flex'>
        <div className='sm:w-[10%] sm:h-[100px] flex flex-col gap-1'>
          <div className='p-3 bg-gradient-to-r from-[#8257E6] via-[#C054FF] to-[#E65ACF] rounded-[50%] flex justify-center items-center'>
            <img src="/logo.png" className='w-[100px] h-[100px]' />
          </div>
          <div className='border-l-4 border-r-4 rounded-lg border-blue'>
            <h1 className='font-bold text-center'>Since 2020</h1>
            <h3 className='text-sm text-center'>Reg. No: 44/2020</h3>
          </div>
        </div>
        <div className='sm:w-[77%] px-8 flex flex-col justify-between items-center'>
          <div className='flex w-full h-full justify-evenly'>
            <div className='flex justify-center items-center'>
              <span className='text-[#2e1192] font-[cursive] font-bold'><span className='text-[#378cdc]' >அச்சம்</span> விடு..</span>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
              <h1 className='uppercase border-b-4 border-[#2e1192] text-5xl pb-1 text-[#2e1192] font-extrabold'><span className='text-[#378cdc]'>Right</span>Choice</h1>
              <h1 className=' text-[#378cdc] text-xl font-semibold text-center'>Educational & Charitable Trust</h1>
            </div>
            <div className='flex justify-center items-center'>
              <span className='text-[#2e1192] font-[cursive] font-bold'><span className='text-[#378cdc]'>உச்சம்</span> தொடு..</span>
            </div>
          </div>
          <div className='w-full'>
            <p className='bg-gradient-to-r rounded-md text-white flex justify-evenly from-[#8257E6] via-[#C054FF] to-[#E65ACF] w-full p-2'>
              <span className='flex justify-center items-center gap-1'>
                <IoCallSharp />
                <a href={`tel:${contactInfo.phone}`} className="hover:underline">{contactInfo.phone}</a>
              </span>
              <span className='flex justify-center items-center gap-1'>
                <FaLocationDot />
                {contactInfo.address}
              </span>
              <span className='flex justify-center items-center gap-1'>
                <MdEmail />
                <a href={`mailto:${contactInfo.email}`} className="hover:underline">{contactInfo.email}</a>
              </span>
            </p>
          </div>
        </div>
        <div className='sm:w-[13%] flex justify-between items-center'>
      <span className='bg-green-600 p-2 text-white rounded-[50%] hover:text-green-600 hover:bg-white border-2 hover:border-green-600'>
        <a href={`https://wa.me/${socialLinks.whatsapp}`} target="_blank" rel="noopener noreferrer">
          <IoLogoWhatsapp className='text-3xl' />
        </a>
      </span>
      <span className='bg-red-500 p-2 text-white rounded-[50%]  hover:text-red-500 hover:bg-white border-2 hover:border-red-500'>
        <a href={`https://www.youtube.com/${socialLinks.youtube}`} target="_blank" rel="noopener noreferrer">
          <FaYoutube className='text-3xl' />
        </a>
      </span>
      <span className='bg-gradient-to-tr from-[#405DE6] via-[#C13584] to-[#FD1D1D] p-2 text-white rounded-[50%]  hover:text-[#C13584] hover:from-[#ffffff] hover:via-[#ffffff] hover:to-[#ffffff] border-2 hover:border-[#C13584]'>
        <a href={`https://www.instagram.com/${socialLinks.instagram}`} target="_blank" rel="noopener noreferrer">
          <FaInstagram className='text-3xl' />
        </a>
      </span>
    </div>
      </div>
      <div className='sm:hidden flex flex-col bg-white rounded-xl h-[250px] w-full gap-2 p-3'>
        <div className='flex justify-between items-center'>

          <h1 className='text-[#2e1192] text-sm text-center font-[cursive] font-bold'><p className='text-[#378cdc]' >அச்சம்</p> விடு..</h1>

          <div className='flex flex-col gap-1'>
            <div className='p-3 bg-gradient-to-r from-[#8257E6] via-[#C054FF] to-[#E65ACF] rounded-[50%] flex justify-center items-center'>
              <img src="/logo.png" className='w-[90px] h-[90px]' />
            </div>
            <div className='border-l-2 border-r-2 rounded-lg border-blue'>
              <h1 className='font-bold text-center text-sm'>Since 2020</h1>
              <h3 className='text-[11px] text-center'>Reg. No: 44/2020</h3>
            </div>
          </div>

          <h1 className='text-[#2e1192] text-sm text-center font-[cursive] font-bold'><p className='text-[#378cdc]'>உச்சம்</p> தொடு..</h1>

        </div>
        <div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <h1 className='uppercase border-b-4 text-[18px] tracking-widest border-[#2e1192] text-[#2e1192] font-bold'><span className='text-[#378cdc]'>Right</span>Choice</h1>
            <h1 className=' text-[#378cdc] text-[14px] tracking-widest font-semibold text-center'>Educational & Charitable Trust</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Poster
