import React from 'react'

const Footer = () => {
  return (
    <div className='text-center sm:flex items-center justify-between border-t border-[#393E46] mx-[10%] mt-12 py-6'>
      <p>© 2025 Marielle C. Paitan. All rights reserved.</p>
      <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
        <li><a target='_blank' href="https://www.linkedin.com/in/pmariellexiv">LinkedIn</a></li>
        <li><a target='_blank' href="https://github.com/DevYelli">GitHub</a></li>
        <li><a target='_blank' href="https://www.facebook.com/marielle.paitan">Facebook</a></li>
      </ul>
    </div>
  )
}

export default Footer
