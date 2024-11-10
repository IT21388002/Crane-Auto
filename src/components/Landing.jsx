import React, { useEffect } from 'react';
import Video from '../assets/jcb.mp4'; // Ensure to import your video file
import Nav from './Nav'; 
import Img4 from '../assets/landing.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img1 from '../assets/1CXt-Backhoe-Loader.avif';
import img2 from '../assets/3CX-Backhoe-Loader.jpg';
import img3 from '../assets/4CX-14-Super-Backhoe-Loader.webp';
import img4 from '../assets/30Plus.webp';
import img5 from '../assets/JCB-NXT-150-Excavator.jpg';
import img6 from '../assets/JCB-225LC.webp';
import img7 from '../assets/jcb-nxt-225lc-m-excavator.webp';
import img8 from '../assets/C_MINI_90Z-2_002-min.jpg';

import Final from '../assets/Final.jpg';

const Landing = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // Animate only once
    });
  }, []);

  const newsItems = [
    {
      date: 'October 16, 2024',
      title: 'Record-Breaking UK Order',
      description:
        'Recently, JCB celebrated securing its largest-ever UK order, with the British government placing a significant purchase for fleet upgrades. This deal highlights JCB continuing relevance in the UK heavy machinery market, even amidst industry-wide economic challenges.',
    },
    {
      date: 'October 7, 2024',
      title: 'Profit Growth Amid Challenges',
      description:
        'JCB saw a 44% rise in pre-tax profits last year but anticipates tougher conditions ahead due to reduced UK housebuilding and economic slowdowns in Europe. Nonetheless, JCB’s international growth remains strong, especially in North America and India.',
    }
  ];


  return (
    <div className="flex flex-col min-h-screen">
      {/* Background Video */}
      <div className="relative flex-grow">
        <video
          className="absolute inset-0 object-cover w-full h-full"
          src={Video}
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-[80vh] px-4 md:px-20">
          <div className="max-w-4xl text-center md:text-left">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl" data-aos="fade-up">
            Powering Progress, <br /> One Lift at a Time
            </h1>
            <p className="mb-6 text-lg text-gray-300 md:text-2xl" data-aos="fade-up">
              An experienced specialist JCB and operator supplier serving the UK construction industry for over 35 years
            </p>
            <div className="flex flex-col justify-center gap-4 md:flex-row md:justify-start">
              <button className="px-6 py-3 font-semibold text-blue-500 transition-all duration-300 bg-white rounded-md hover:bg-yellow-500" data-aos="fade-right">
                Our Fleet
              </button>
              <button className="px-6 py-3 font-semibold text-white transition-all duration-300 bg-transparent border border-white rounded-md hover:text-yellow-300 hover:border-yellow-300" data-aos="fade-left">
                Get A Quote
              </button>
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-5 mt-12 text-black transition-all duration-300 bg-white rounded-md md:flex-row md:justify-between" data-aos="fade-up">
              <span className='text-2xl font-bold md:text-left'>JCB Calculator</span>
              <span className='px-4 text-xl text-center md:text-left'>Find the right JCB for your job in no time!</span>
              <button className="px-3 py-3 font-semibold text-white transition-all duration-300 bg-blue-500 rounded-md hover:bg-yellow-500 md:ml-auto">Go To Calculator</button>
            </div>
          </div>
        </div>
      </div>

      {/* Explore Services Section */}
      <div className="w-full py-12 mx-0 mb-10 bg-white" data-aos="fade-up">
        <div className="container max-w-6xl px-4 mx-auto md:px-8 lg:px-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-8">
              <p className="text-lg font-semibold text-black">Explore Our Services</p>
              <a href="/news" className="block p-4 transition-transform transform link-arrow bg-gray-50 hover:scale-105" data-aos="fade-right">
                <h2 className="text-4xl font-bold text-black">Our News</h2>
                <p className="text-black">Find out what we're up to with news and updates from our team.</p>
              </a>
              <a href="/team" className="block p-4 transition-transform transform link-arrow bg-gray-50 hover:scale-105" data-aos="fade-right" data-aos-delay="100">
                <h2 className="text-4xl font-bold text-black">Our Team</h2>
                <p className="text-black">The skills of the team are what make us great. Meet key personnel from our business.</p>
              </a>
              <a href="/fleet" className="block p-4 transition-transform transform link-arrow bg-gray-50 hover:scale-105" data-aos="fade-right" data-aos-delay="200">
                <h2 className="text-4xl font-bold text-black">Our Fleet</h2>
                <p className="text-black">Whether you want CPA Hire or CPA Contract, we can help.</p>
              </a>
            </div>
            <img
              src={Img4}
              alt="Building site helmet"
              className="object-cover w-full h-[500px]"
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>   

      {/* Trusted By Section */}
      <div className="relative py-16 bg-blue-800" data-aos="fade-up">
        <div className="relative flex flex-col justify-between max-w-6xl px-4 mx-auto md:flex-row">
          <div className="flex-1 mb-6 md:mb-0">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Trusted By The <br /> Biggest & The Best
            </h2>
            <p className="mb-6 text-lg text-white">
            Lift your projects to new heights with us. Our cutting-edge mobile cranes and expert team <br />bring the strength and precision you need to get the job done right.            </p>
            <p className="mb-8 text-lg text-white">
              We pride ourselves on our commitment to safety, efficiency, and excellence in every lift. With<br /> our state-of-the-art equipment and experienced team, we deliver superior results on time and<br /> within budget. We get the job done.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center flex-none h-full gap-4 mt-16">
            <button className="w-full px-6 py-3 text-lg font-semibold text-blue-800 bg-white border border-transparent rounded-md hover:bg-blue-500 hover:text-white">
              Hire Us
            </button>
            <button className="w-full px-6 py-3 text-lg font-semibold text-white border border-white rounded-md hover:bg-white hover:text-blue-800">
              Contracts
            </button>
          </div>
        </div>
      </div>



    {/* Cranes Gallery Section */}
<div className="py-16 bg-blue-800">
  {/* Container for the grid */}
  <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-4">
    
    {/* Crane Items with AOS Animations */}
    {[
      { img: img1, name: "1CXT Backhoe Loader" },
      { img: img2, name: "3CX Backhoe Loader" },
      { img: img3, name: "4CX 14 Backhoe Loader" },
      { img: img4, name: "30-Plus Backhoe Loader" },
      { img: img5, name: "JCB NXT 150 Excavator" },
      { img: img6, name: "JCB 25LC Excavator" },
      { img: img7, name: "NX 225LC Excavator" },
      { img: img8, name: "C MINI 90Z-2" }
    ].map((crane, index) => (
      <a 
        href={`#section${index + 1}`} 
        className="relative h-64 overflow-hidden lg:h-80 group" 
        key={index} 
        data-aos="fade-up" 
        data-aos-delay={index * 100} // Staggered delay for each item
      >
        <img
          src={crane.img}
          alt={crane.name}
          className="object-cover w-full h-full transition duration-300 ease-in-out transform group-hover:brightness-75"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-lg font-bold text-white transition duration-300 ease-in-out bg-blue-900 bg-opacity-50 group-hover:bg-opacity-70">
          {crane.name}
        </div>
      </a>
    ))}
  </div>
</div>


      {/* Latest News & Updates Section */}
      <div className="px-4 py-12 bg-blue-800 md:px-0">
        <h2 className="mb-12 text-3xl font-bold text-center text-white">Latest News & Updates</h2>
        <div className="max-w-3xl mx-auto">
          {newsItems.map((item, index) => (
            <div key={index} className="pb-4 mb-16 border-b border-gray-700" data-aos="fade-up" data-aos-delay={index * 100}>
              <p className="text-lg text-gray-300">{item.date}</p>
              <h3 className="text-4xl font-semibold text-yellow-300">{item.title}</h3>
              <p className="mt-4 text-gray-200">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative z-10 flex justify-center bg-blue-800">
  <img 
    src={Final} 
    alt="Cranes Service" 
    className="object-cover h-[350px] sm:h-[400px] transition-transform duration-300 rounded-lg w-full max-w-[1000px]" 
    data-aos="zoom-in"
  />
  <div className="absolute bg-black rounded-lg opacity-50 w-full max-w-[1000px] h-full"></div>
  <div className="absolute inset-0 z-20 flex flex-col justify-between w-full max-w-[1000px] h-full px-4 md:px-20">
    <div className="flex flex-col items-center justify-center mx-4 mt-10 md:ml-96" data-aos="fade-up">
      <div className="max-w-lg text-center">
        <h2 className="mb-10 text-2xl font-bold text-left text-yellow-400 md:text-3xl">
          Ready to elevate your construction project?
        </h2>
        <p className="text-base font-bold text-left text-white md:text-lg">
          Contact us today for expert consultation and lifting solutions tailored to your needs.
        </p>
      </div>
    </div>
    <div className="flex items-center justify-center mb-4">
      <button className="px-6 py-3 font-semibold text-blue-800 transition-all bg-white rounded-md md:ml-14 hover:bg-yellow-500" data-aos="fade-up">
        Contact Us
      </button>
    </div>
  </div>
</div>


      <div className="h-32 bg-blue-800"></div>
    </div>
  );
};

export default Landing;