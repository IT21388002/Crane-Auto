

import React from 'react';
import Logo from '../assets/CraneLogo.png'

const Footer = () => {
  return (
    <footer className='overflow-x-hidden text-white bg-gray-900 '>
      {/* Top Section: Logo and Subscribe */}
      <div className='flex flex-col items-center justify-between px-4 bg-gray-900 py-7 md:flex-row md:mx-72 sm:px-12'>
        {/* Logo Image */}
        <div className="flex justify-center mt-20 mb-6 md:mb-0 sm:mt-10">
          <img 
            src={Logo} 
            alt="John Sutch Cranes Logo" 
            className="w-40 max-w-xs md:w-2/3"
          />
        </div>

        {/* Subscribe Section */}
        <div className="flex items-center w-full max-w-lg mt-20 sm:mt-10">
          <input 
            type="text" 
            placeholder="Your Email"
            className="w-full px-2 py-3 text-gray-800 border border-yellow-400 focus:outline-none rounded-l-md"
          />
          <button 
            className="px-4 py-3 font-serif text-black duration-300 bg-yellow-400 hover:bg-yellow-500 rounded-r-md "
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Address and Links Section */}
<div className="grid grid-cols-2 gap-10 px-4 py-8 text-lg md:grid-cols-5 md:px-0 md:mx-72 sm:grid-cols-1 sm:gap-6 sm:py-4 sm:px-8">
  {/* Locations */}
  <div className='sm:pl-20'>
    <h6 className='pb-10 font-bold text-yellow-400 sm:pb-5'>Liverpool</h6>
    <p>Bridle Park,<br/>Bridle Road,<br/>Bootle, Merseyside,<br/>L30 4UG</p>
    <p>Call</p>
    <p>Email</p>
  </div>
  <div className='sm:pl-20'>
    <h6 className='pb-10 font-bold text-yellow-400 sm:pb-5'>Manchester</h6>
    <p>Rothesay Garage,<br/>Globe Lane Industrial Estate,<br/>Broadway, Dukinfield,<br/>SK16 4UU</p>
    <p>Call</p>
    <p>Email</p>
  </div>

  {/* Quick Links */}
  <div className='sm:pl-20'>
    <h6 className='pb-10 font-bold text-yellow-400 sm:pb-5'>Quick Links</h6>
    <a href='#' className='block hover:text-blue-400'>Our Fleet</a>
    <a href='#' className='block hover:text-blue-400'>About</a>
    <a href='#' className='block hover:text-blue-400'>Our Team</a>
    <a href='#' className='block hover:text-blue-400'>Jobs</a>
    <a href='#' className='block hover:text-blue-400'>Contact</a>
  </div>

  {/* In Depth */}
  <div className='sm:pl-20'>
    <h6 className='pb-10 font-bold text-yellow-400 sm:pb-5'>In Depth</h6>
    <a href='#' className='block hover:text-blue-400'>News</a>
    <a href='#' className='block hover:text-blue-400'>Case Studies</a>
    <a href='#' className='block hover:text-blue-400'>Social Value</a>
    <a href='#' className='block hover:text-blue-400'>History</a>
    <a href='#' className='block hover:text-blue-400'>Accreditations</a>
  </div>

  {/* Social Media */}
  <div className='sm:pl-20'>
    <h6 className='pb-10 font-bold text-yellow-400 sm:pb-5'>Social Media</h6>
    <a href='#' className='block hover:text-blue-400'>LinkedIn</a>
    <a href='#' className='block hover:text-blue-400'>Facebook</a>
    <a href='#' className='block hover:text-blue-400'>Instagram</a>
    <a href='#' className='block hover:text-blue-400'>Twitter/X</a>
  </div>
</div>



      {/* Bottom Section: Copyright and Links */}
      <div className='flex flex-col items-center justify-center gap-4 pt-8 pb-20 text-xs text-center text-gray-400 md:flex-row md:space-x-20 sm:pb-10'>
        <span className='block text-center'>
          © 2024 Web Minds. All Rights Reserved. Site designed by 
          <span className='text-yellow-400'> Web Minds</span>
        </span>
        <div className="flex flex-wrap justify-center space-x-4">
          <a href="#" className="hover:text-blue-400">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400">CPA Hire</a>
          <a href="#" className="hover:text-blue-400">CPA Contract</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

