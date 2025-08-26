"use client";
import React from 'react'
import Image from 'next/image'
import { ReactTyped } from 'react-typed';

const Header = () => {
  return (
    <div className='w-11/12 max-w-5xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-alice mt-40'>
        Good day! I'm Marielle C. Paitan and aspiring to be
      </h3>
      <div className="w-40 sm:w-60 md:w-72 aspect-square rounded-full overflow-hidden mx-auto">
        <Image src='/profile.jpg' alt='' width={300} height={300} className='object-cover w-full h-full rounded-full'></Image>
      </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[100px] font-bold text-center">
            <span className='text-[#393E46]'>JR. DEVELOPER<br></br></span><span className="text-transparent stroke-text">UI/UX DESIGNER</span>
        </h1>
        <p className='max-w-8xl mx-auto text-[18px]'>
            A fresh graduate of the Bachelor of Science in Computer Science. 
            Beyond academics, I enjoy creating projects that combine both functionality and creativity.
            I aspire to grow as a software developer while also exploring UI/UX design, bringing innovative and practical solutions to life.
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4 '>
            <a href='/resume.pdf' target="_blank" rel="noopener noreferrer" className='px-10 py-3 border rounded-full border-black-500 flex items-center gap-2 
            hover:bg-[#393E46] hover:text-white transition-all duration-200'>Resume</a>
        </div>
    </div>
  )
}

export default Header
