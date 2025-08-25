"use client";

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

const NavProj = () => {
const sideMenuRef = useRef();
    const [currentTime, setCurrentTime] = useState(new Date());

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateY(0)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateY(-100%)'
    }

    const dateString = currentTime.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });


  return (
    <>
        <nav className="w-full fixed px-6 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 bg-[#EEEEEE] text-base md:text-lg lg:text-xl">
            <a href="/" className="cursor-pointer text-[#393E46]">
                Home
            </a>

            <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-[#393E46]">
                <li><a href='#sofe' className="hover:font-bold transition-all duration-200" >SOFE</a></li>
                <li><a href='#webdev'className="hover:font-bold transition-all duration-200" >WeBDeV</a></li>
                <li><a href='#gamedev'className="hover:font-bold transition-all duration-200" >GameDev</a></li>
                <li><a href='#thesis'className="hover:font-bold transition-all duration-200" >Thesis</a></li>
            </ul>

            <div className='flex items-center'>


                <a href='/#contact' className='hidden lg:flex items-center py-2.5 hover:font-bold transition-all duration-200"'>
                    Get in Touch!
                </a>
                <button className='block md:hidden ml-3' onClick={openMenu}>
                    <Image src='/menu.png' alt='menu' width={40} height={40} className='cursor-pointer'></Image>
                </button>
            </div>

            {/* MOBILE MENU */}
            <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-10 py-30 px-20 fixed top-0 left-0 w-screen h-120
             z-50 bg-black/90 transition-transform duration-500 ease-in-out 
             font-bold text-xl text-white">
                
                <div className='absolute right-5 top-6' onClick={closeMenu}>
                    <Image src='/close.png' alt='' width={50} height={40} className='cursor-pointer'></Image>
                </div>
                <li><a href='#sofe' className="hover:font-bold transition-all duration-200" >SOFE</a></li>
                <li><a href='#webdev'className="hover:font-bold transition-all duration-200" >WeBDeV</a></li>
                <li><a href='#gamedev'className="hover:font-bold transition-all duration-200" >GameDev</a></li>
                <li><a href='#thesis'className="hover:font-bold transition-all duration-200" >Thesis</a></li>
            </ul>

        </nav>
    </>
  )
}


export default NavProj
