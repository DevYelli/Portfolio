"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Slider = dynamic(() => import('react-slick'), { ssr: false })

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const Sofe = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  var settings = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div id="sofe" className="w-11/12 mx-auto py-40 flex flex-col gap-6">
      <h2 className="text-center text-5xl">Software Engineering Project</h2>
      <p className="text-justify max-w-[1500px] mx-auto mt-2 mb-12 text-[18px]">
        As a front-end programmer for our Software Engineering Python Project, I developed the graphical user interface (GUI) of OnTheClock, 
        a facial recognition attendance management system, using PyQt and Tkinter. Our team initially worked with SQL for database integration 
        but later transitioned to Firebase to take advantage of its real-time and online capabilities. In addition to the system, 
        I also created a simple website using HTML and CSS, further enhancing the project’s functionality and accessibility.
      </p>

        <div className="border-4 border-[#393E46] bg-[#929AAB] rounded-2xl p-8">
            <Slider {...settings} className="w-full">
                {[
                { src: "/sofe/splash.jpg", title: ""},
                { src: "/sofe/create.jpg", title: "", desc: "" },
                { src: "/sofe/login.jpg", title: ""},
                { src: "/sofe/create.jpg", title: "", desc: "" },
                { src: "/sofe/student.jpg", title: "", desc: "" },
                { src: "/sofe/records1.jpg", title: ""},
                { src: "/sofe/section.jpg", title: "", desc: "" },
                { src: "/sofe/take.jpg", title: "", desc: "" },
                { src: "/sofe/attend.jpg", title: ""},
                { src: "/sofe/example.jpg", title: "", desc: "" },
                ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                    <Image
                    src={item.src}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="rounded-lg mx-auto"
                    />
                    <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
                ))}
            </Slider>
        </div>

        <div id="webdev" className=" py-40 flex flex-col gap-6">
            <h2 className="text-center text-5xl">OOP Website Development</h2>
            <p className="text-justify max-w-[1500px] mx-auto mt-2 mb-12 text-[18px]">
                Object-Oriented Programming Personal Project: Umbreon – A HoYoverse-inspired website that I developed as a static project. 
                Since it was created purely for practice, it does not include responsive features, and the layout may look a bit messy on different 
                screen sizes. Despite its limitations, this project allowed me to experiment with ReactJS, CSS, and basic object-oriented concepts while 
                building a themed interface. It was a valuable step in improving my coding foundations, even if the outcome was a simple and non-dynamic site.
            </p>
                <div className="flex justify-center mt-2">
                    <a href='https://umbreon-oopr.netlify.app/' target='_blank' rel="noopener noreferrer" className='text-center border-2 border-black rounded-lg 
                    inline-block px-6 py-3 text-lg font-medium hover:bg-black hover:text-white transition'>Check here</a>
                </div>
                    
                <div className="border-4 border-[#393E46] bg-[#929AAB] rounded-2xl p-8">
                    <Slider {...settings} className="w-full">
                        {[
                        { src: "/webdev/login.png", title: ""},
                        { src: "/webdev/home.png", title: ""},
                        { src: "/webdev/news.png", title: ""},
                        { src: "/webdev/topup.png", title: ""},
                        { src: "/webdev/gi.png", title: ""},
                        { src: "/webdev/hi3.png", title: ""},
                        { src: "/webdev/hsr.png", title: ""},
                        { src: "/webdev/zzz.png", title: ""},
                        { src: "/webdev/nation.png", title: ""}
                        ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <Image
                            src={item.src}
                            alt={item.title}
                            width={500}
                            height={300}
                            className="rounded-lg mx-auto"
                            />
                            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                        ))}
                    </Slider>
                </div>
        </div>

        <div id="gamedev" className=" py-40 flex flex-col gap-6">
            <h2 className="text-center text-5xl">Game Development</h2>
            <p className="text-justify max-w-[1500px] mx-auto mt-2 mb-12 text-[18px]">
                As a Programmer and Designer, I contributed to the development of Bewitched Brew, a Unity 3D game inspired by Overcooked. 
                I created animations to bring the characters and gameplay to life, designed some of the UI elements in Unity 3D, and integrated 
                sound effects to enhance the overall player experience.
            </p>
                    <div className="flex justify-center mt-2">
                        <a href='https://youtu.be/YpErBc-OcoQ' target='_blank' rel="noopener noreferrer" className='text-center border-2 border-black rounded-lg 
                        inline-block px-6 py-3 text-lg font-medium hover:bg-black hover:text-white transition'>Watch the demo here</a>
                    </div>
                    
                <div className="border-4 border-[#393E46] bg-[#929AAB] rounded-2xl p-8">
                    <Slider {...settings} className="w-full">
                        {[
                        { src: "/gamedev/main.jpg", title: ""},
                        { src: "/gamedev/gameplay.jpg", title: ""},
                        ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <Image
                            src={item.src}
                            alt={item.title}
                            width={500}
                            height={600}
                            className="rounded-lg mx-auto"
                            />
                            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                        ))}
                    </Slider>
                </div>
        </div>

        <div id="thesis" className=" py-60 flex flex-col gap-6">
            <h2 className="text-center text-5xl">Thesis UI/UX Design</h2>
            <p className="text-justify max-w-[1500px] mx-auto mt-2 mb-12 text-[18px]">
                As a UI/UX Designer, I simply designed the UI/UX of Skelatomy, an AR mobile app created as a supplementary learning tool for 
                Physical Therapy students. Using Canva, I crafted intuitive and visually engaging interfaces that presented reliable anatomical 
                content, ensuring an interactive and user-friendly experience for educational purposes.
            </p>             
                <div className="border-4 border-[#393E46] bg-[#929AAB] rounded-2xl p-8">
                    <Slider {...settings} className="w-full">
                        {[
                        { src: "/thesis/1.jpg", title: ""},
                        { src: "/thesis/1.png", title: ""},
                        { src: "/thesis/2.png", title: ""},
                        { src: "/thesis/3.png", title: ""},
                        { src: "/thesis/4.jpg", title: ""},
                        { src: "/thesis/5.png", title: ""},
                        { src: "/thesis/6.png", title: ""},
                        { src: "/thesis/7.jpg", title: ""},
                        ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="min-h-[400px] w-full flex justify-center items-center">
                                <Image
                                src={item.src}
                                alt={item.title}
                                width={300}
                                height={200} 
                                className="rounded-lg object-cover"
                                />
                            </div>
                        </div>
                        ))}
                    </Slider>
                </div>
        </div>

    </div>
        
  )
}

export default Sofe
