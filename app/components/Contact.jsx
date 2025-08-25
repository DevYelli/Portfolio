"use client";
import React, { useState } from "react";

    const Contact = () => {
        const [result, setResult] = useState("");
        const [showPopup, setShowPopup] = useState(false);

        const onSubmit = async (event) => {
            event.preventDefault();
            setResult("Sending....");
            const formData = new FormData(event.target);

            formData.append("access_key", "7d568701-ab06-4e28-a648-e81f39ad507a");

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
                });

            const data = await response.json();

                if (data.success) {
                setResult("✅ Form Submitted Successfully");
                setShowPopup(true);
                event.target.reset();

                // auto-hide popup after 3s
                setTimeout(() => setShowPopup(false), 3000);
            } else {
                console.log("Error", data);
                setResult(data.message);
                setShowPopup(true);
                setTimeout(() => setShowPopup(false), 3000);
            }
    };

  return (
    <div id='contact' className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className='text-center mb-2 text-lg'>Connect with me</h4>
        <h2 className='text-center text-5xl'>Get in touch</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>
            I’d love to connect! I’m currently seeking new opportunities and would be happy to 
            discuss potential collaborations, projects, or just to say hello.
        </p>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                <input type='text' placeholder='Please enter your name.' required
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name="name"></input>
                <input type='email' placeholder='Please enter your email.' required 
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name="email"></input>
            </div>
            <textarea rows='6' placeholder='Please enter your message'required 
            className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' name="message"></textarea>

            <button type='submit' className='py-3 px-20 w-max flex items-center justify-between gap-2 
            bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer'>Send</button>
        </form>
        {/* Popup Message */}
        {showPopup && (
            <div className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg">
            {result}
            </div>
        )}
    </div>
  )
}

export default Contact
