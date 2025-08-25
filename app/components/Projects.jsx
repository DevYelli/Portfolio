import React from 'react'

const Projects = () => {
  return (
    <div id="projects" className="w-full px-[12%] scroll-mt-40">
        <h2 className='text-center text-5xl'>Academic Projects</h2>
        <p className='text-center max-w-[1500px] mx-auto mt-2 mb-12 text-[18px]'>
            I developed these various projects during my academic years, applying both creativity and technical skills. 
            These projects allowed me to explore different programming languages.
        </p>

        <div className="max-w-6xl mx-auto my-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {/* Grid item */}
                <div className="border-2 border-[#929AAB] p-4 sm:p-6 flex flex-col items-start
                    cursor-pointer transition duration-500 
                    hover:shadow-[4px_4px_6px_rgba(0,0,0,0.3)] hover:bg-[#EEEEEE] hover:-translate-y-1
                    min-h-[400px]">
                <h3 className="text-[28px] md:text-[32px] md:text-[50px] mb-4 mt-5 text-gray-700 text-left w-full break-words leading-snug">Software Engineering Project</h3>
                <p className="text-[14px] sm:text-[16px] md:text-[20px] text-gray-600 leading-6 mb-2 text-left w-full mt-4">
                    During our Software Engineering course, my team developed a Facial Recognition Attendance Management System.
                </p>
                <a href="/projects" className="flex items-center gap-2 text-md font-medium text-[#929AAB] hover:underline mt-auto">
                    Read more
                </a>
                </div>

                <div className="border-2 border-[#929AAB] p-4 sm:p-6 flex flex-col items-start
                    cursor-pointer transition duration-500 
                    hover:shadow-[4px_4px_6px_rgba(0,0,0,0.3)] hover:bg-[#EEEEEE] hover:-translate-y-1
                    min-h-[auto]">
                <h3 className="text-[28px] md:text-[32px] lg:text-[50px] mb-4 mt-5 text-gray-700 text-left w-full break-words leading-snug">OOP Website Development</h3>
                <p className="text-[14px] sm:text-[16px] md:text-[20px] text-gray-600 leading-6 mb-2 text-left w-full mt-4">
                    During my Object-Oriented Programming course, I developed a static website inspired by a HoYoVerse game.
                </p>
                <a href="/projects" className="flex items-center gap-2 text-md font-medium text-[#929AAB] hover:underline mt-auto">
                    Read more
                </a>
                </div>

                <div className="border-2 border-[#929AAB] p-4 sm:p-6 flex flex-col items-start
                    cursor-pointer transition duration-500 
                    hover:shadow-[4px_4px_6px_rgba(0,0,0,0.3)] hover:bg-[#EEEEEE] hover:-translate-y-1
                    min-h-[400px]">

                    <h3 className="text-[28px] sm:text-[32px] md:text-[50px] mb-4 mt-5 text-gray-700 text-left w-full break-words">
                        Game Development
                    </h3>

                    <p className="text-[14px] sm:text-[16px] md:text-[20px] text-gray-600 leading-6 mb-2 text-left w-full mt-4">
                        My team developed a game inspired by Overcooked using Unity 3D and Blender.
                    </p>

                    <a href="/projects" className="flex items-center gap-2 text-md font-medium text-[#929AAB] hover:underline mt-auto">
                        Read more
                    </a>
                </div>


                <div className="border-2 border-[#929AAB] p-4 sm:p-6 flex flex-col items-start
                    cursor-pointer transition duration-500 
                    hover:shadow-[4px_4px_6px_rgba(0,0,0,0.3)] hover:bg-[#EEEEEE] hover:-translate-y-1
                    min-h-[auto]">
                <h3 className="text-[28px] sm:text-[32px] md:text-[50px] mb-4 mt-5 text-gray-700 text-left w-full break-words">Thesis UI/UX Design</h3>
                <p className="text-[14px] sm:text-[16px] md:text-[20px] text-gray-600 leading-6 mb-2 text-left w-full mt-4">
                    These were additional projects during my academic year, where my team or I focused on graphic design and creative work.
                </p>
                <a href="/projects" className="flex items-center gap-2 text-md font-medium text-[#929AAB] hover:underline mt-auto">
                    Read more
                </a>
                </div>
            </div>
        </div>




    </div>
  )
}

export default Projects
