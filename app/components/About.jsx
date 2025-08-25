import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='relative max-w-8xl mx-auto min-h-screen flex flex-col items-center justify-center scroll-mt-0 px-5 sm:px-6 lg:px-8 py-10'>
        <h2 className='text-center text-5xl'>About me</h2>
        <div className='flex w-full max-w-[1500px] gap-20 my-10'>
                <p className='text-justify text-[18px]'>
                    I’m a Bachelor of Science in Computer Science graduate student who gained experience through my internship at the 
                    ICT Literacy and Competency Development Bureau, where I worked on device quality assurance, document management, 
                    and productivity tools. Beyond academics, I enjoy creating projects that combine both functionality 
                    and creativity, from building a facial recognition attendance system with Firebase integration to designing a 
                    Unity 3D game and interactive websites. I have learned programming languages such as:
                </p>
        </div>  
{/* --------------------- PROG LANG --------------------*/}        
        <div className="flex flex-row flex-wrap justify-center gap-8 md:gap-12">
            {/* CSS */}
            <div className="flex flex-col items-center gap-2">
                <div className="relative w-20 h-20">
                <Image src="/css.png" alt="CSS" fill className="object-contain filter grayscale hover:grayscale-0 transition duration-300 cursor-pointer" />
                </div>
                <p className="text-center text-lg font-medium">CSS</p>
            </div>

            {/* HTML */}
            <div className="flex flex-col items-center gap-2">
                <div className="relative w-20 h-20">
                <Image src="/html.png" alt="HTML" fill className="object-contain filter grayscale hover:grayscale-0 transition duration-300 cursor-pointer" />
                </div>
                <p className="text-center text-lg font-medium">HTML</p>
            </div>

            {/* Python */}
            <div className="flex flex-col items-center gap-2">
                <div className="relative w-20 h-20">
                <Image src="/python.png" alt="Python" fill className="object-contain filter grayscale hover:grayscale-0 transition duration-300 cursor-pointer" />
                </div>
                <p className="text-center text-lg font-medium">Python</p>
            </div>

            {/* React */}
            <div className="flex flex-col items-center gap-2">
                <div className="relative w-20 h-20">
                <Image src="/react.png" alt="React" fill className="object-contain filter grayscale hover:grayscale-0 transition duration-300 cursor-pointer" />
                </div>
                <p className="text-center text-lg font-medium">ReactJS</p>
            </div>

            {/* Tailwind */}
            <div className="flex flex-col items-center gap-2">
                <div className="relative w-20 h-20">
                <Image src="/tailwind.png" alt="Tailwind" fill className="object-contain filter grayscale hover:grayscale-0 transition duration-300 cursor-pointer" />
                </div>
                <p className="text-center text-lg font-medium">Tailwind</p>
            </div>
        </div>
        <div className='flex w-full max-w-4xl justify-center gap-20 my-10'>
                <p className='text-center text-[18px]'>
                    Moreover, here are the tools and technologies I have worked with to build my skills and experience:
                </p>
        </div>

{/* --------------------- TOOLS --------------------*/}        
        <div className="flex flex-row flex-wrap justify-center gap-8 md:gap-12">
            {/* Visual Studio Code */}
            <div className="flex flex-col items-center gap-2">
                <div className="relative w-15 h-20">
                <Image src="/vsc.png" alt="CSS" fill className="object-contain filter grayscale hover:grayscale-0 transition duration-300 cursor-pointer" />
                </div>
                <p className="text-center text-lg font-medium">Visual Studio Code</p>
            </div>

            {/* Figma */}
            <div className="flex flex-col items-center gap-2">
                <div className="relative w-15 h-20">
                <Image src="/figma.png" alt="CSS" fill className="object-contain filter grayscale hover:grayscale-0 transition duration-300 cursor-pointer" />
                </div>
                <p className="text-center text-lg font-medium">Figma</p>
            </div>

            {/* Canva */}
            <div className="flex flex-col items-center gap-2">
                <div className="relative w-20 h-20">
                <Image src="/canva.png" alt="HTML" fill className="object-contain filter grayscale hover:grayscale-0 transition duration-300 cursor-pointer" />
                </div>
                <p className="text-center text-lg font-medium">Canva</p>
            </div>

            {/* Blender */}
            <div className="flex flex-col items-center gap-2">
                <div className="relative w-20 h-20">
                <Image src="/blender.png" alt="Python" fill className="object-contain filter grayscale hover:grayscale-0 transition duration-300 cursor-pointer" />
                </div>
                <p className="text-center text-lg font-medium">Blender</p>
            </div>

            {/* Firebase */}
            <div className="flex flex-col items-center gap-2">
                <div className="relative w-20 h-20">
                <Image src="/firebase.png" alt="React" fill className="object-contain filter grayscale hover:grayscale-0 transition duration-300 cursor-pointer" />
                </div>
                <p className="text-center text-lg font-medium">Firebase</p>
            </div>

            {/* MySql */}
            <div className="flex flex-col items-center gap-2">
                <div className="relative w-20 h-20">
                <Image src="/mysql.png" alt="Tailwind" fill className="object-contain filter grayscale hover:grayscale-0 transition duration-300 cursor-pointer" />
                </div>
                <p className="text-center text-lg font-medium">MySql</p>
            </div>
            {/* Unity */}
            <div className="flex flex-col items-center gap-2">
                <div className="relative w-20 h-20">
                <Image src="/unity.png" alt="Tailwind" fill className="object-contain filter grayscale hover:grayscale-0 transition duration-300 cursor-pointer" />
                </div>
                <p className="text-center text-lg font-medium">Unity</p>
            </div>
        </div>


    </div>

  )
}

export default About
