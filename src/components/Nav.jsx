
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Logo from '../assets/CraneLogo.png'

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false); // Function to close the menu

  return (
    <nav className="relative">
      <div className="flex justify-between items-center bg-blue-800 h-10vh lg:py-5 px-20 py-4 z-50 text-[#f8e700]">
      <div className="flex items-center flex-1">
        {/* Image instead of SVG logo */}
        <img src={Logo} alt="Description of new image" className="w-40 h-auto" />
      </div>


        {/* Toggle button */}
        <div className="lg:hidden" onClick={handleClick}>
          {click ? <FaTimes size={30} /> : <CiMenuFries size={30} />}
        </div>

        {/* Links for larger screens */}
        <div className='items-center justify-end flex-1 hidden font-normal lg:flex md:flex lg:'>
            <div className='flex-10'>
                <ul className='flex gap-8 mr-16 text-[18px]'>
                    <li className='hover:text-[#5eccc5] transition  border-[#1542a0] hover:border-[#5eccc5] cursor-pointer pt-2'><Link spy={true} smooth={true} to="/">Fleet</Link></li>
                    <li className='hover:text-[#5eccc5] transition  border-[#1542a0] hover:border-[#5eccc5] cursor-pointer pt-2'><Link spy={true} smooth={true} to="/About">About</Link></li>
                    <li className='hover:text-[#5eccc5] transition  border-[#1542a0] hover:border-[#5eccc5] cursor-pointer pt-2'><Link spy={true} smooth={true} to="/News">News</Link></li> 
                    <li className='hover:text-[#5eccc5] transition  border-[#1542a0] hover:border-[#5eccc5] cursor-pointer pt-2'><Link spy={true} smooth={true} to="/CaseStudies">Case Studies</Link></li>
                    <li className='hover:text-blue-500 transition border-2 px-2 py-2 bg-white text-blue-500 font-semibold items-center hover:bg-[#f8e700] cursor-pointer'><Link spy={true} smooth={true} to="/Contact">Contact Us</Link></li>
                </ul>
            </div>
        </div>
      </div>

      {/* Mobile menu */}
      {click && (
        <div className="absolute left-0 right-0 z-40 w-full transition bg-blue-500 lg:hidden top-30">
          <ul className="p-6 text-xl text-center ">
            <li className="my-2 py-3 text-[#ffffff]  font-semibold hover:bg-slate-800 hover:rounded">
              <Link to="/" onClick={closeMenu}>Fleet</Link>
            </li>
            <li className="my-2 py-3 text-[#ffffff]  font-semibold hover:bg-slate-800 hover:rounded">
              <Link to="/About" onClick={closeMenu}>About</Link>
            </li>
            <li className="my-2 py-3 text-[#ffffff]  font-semibold hover:bg-slate-800 hover:rounded">
              <Link to="/News" onClick={closeMenu}>News</Link>
            </li>
            <li className="my-2 py-3 text-[#ffffff] font-semibold hover:bg-slate-800 hover:rounded">
              <Link to="/CaseStudies" onClick={closeMenu}>Case Studies</Link>
            </li>
            <li className="my-2 py-3 text-[#ffffff] font-semibold hover:bg-slate-800 hover:rounded">
              <Link to="/Contact" onClick={closeMenu}>Contact Us</Link>
            </li>
          </ul>

          <div className="text-sm text-center text-black">Manchester</div>
          <div className="pb-3 text-lg font-semibold text-center text-[#ffffff">0161 877 8004</div>
          
          <div className="text-sm text-center text-black">Liverpool</div>
          <div className="pb-8 text-lg font-semibold text-center text-[#ffffff">0151 541 0999</div>

          {/* Social media icons */}
          <div className="flex justify-center mt-4 mb-8 space-x-4">
            <a href="https://facebook.com" className="text-[#ffffff hover:text-blue-900">
              <FaFacebookF size={24} />
            </a>
            <a href="https://instagram.com" className="text-[#ffffff hover:text-blue-900">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" className="text-[#ffffff hover:text-blue-900">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;



