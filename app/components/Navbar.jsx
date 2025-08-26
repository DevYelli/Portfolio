"use client";

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
const Navbar = () => { 
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());

    const dateString = currentTime.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });


  return (
    <>
        <nav className="w-full fixed px-15 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 bg-[#EEEEEE] text-base md:text-lg lg:text-xl">
            <a className='cursor-default'>
                <span>{dateString}</span>
            </a>
            <ul className='hidden md:flex items-center gap-6 lg:gap-8 text-[#393E46]'>
                <li><a href='#top' className="hover:font-bold transition-all duration-200" >Home</a></li>
                <li><a href='#about'className="hover:font-bold transition-all duration-200" >About Me</a></li>
                <li><a href='#projects'className="hover:font-bold transition-all duration-200" >Projects</a></li>
            </ul>

            <div className='flex items-center'>


                <a href='#contact' className='hidden lg:flex items-center gap-6 px-10 py-2.5 hover:font-bold transition-all duration-200"'>
                    Get in Touch!
                </a>
                <button className='block md:hidden ml-3' onClick={() => setMenuOpen(true)}>
                    <Image src='/menu.png' alt='menu' width={30} height={30} className='cursor-pointer'></Image>
                </button>
            </div>

            {/* MOBILE MENU */}
            <ul className={`flex md:hidden flex-col gap-10 py-8 px-5 fixed top-0 left-0 w-screen h-100
          z-50 bg-black/90 transition-transform duration-500 ease-in-out 
          font-bold text-xl text-white transform pl-15 pt-20 ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}>
                
                <div className='absolute right-10 top-6' onClick={() => setMenuOpen(false)}>
                    <Image src='/close.png' alt='' width={30} height={30} className='cursor-pointer'></Image>
                </div>
                
                <li><a href='#top' onClick={() => setMenuOpen(false)} >Home</a></li>
                <li><a href='#about' onClick={() => setMenuOpen(false)} >About me</a></li>
                <li><a href='#projects' onClick={() => setMenuOpen(false)} >Projects</a></li>
                <li><a href='#contact' onClick={() => setMenuOpen(false)} >Get in touch</a></li>
            </ul>

        </nav>
    </>
  )
}

export default Navbar
