
import React, { useEffect } from 'react';
import Img1 from '../assets/1.jpg';
import Img2 from '../assets/2.jpg';
import Img3 from '../assets/3.jpg';
import Img4 from '../assets/4.jpeg';
import Img5 from '../assets/5.jpg';
import Img6 from '../assets/Final.jpg';
import Img7 from '../assets/landing.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const News = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 5,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="px-4 py-16 bg-blue-800 sm:px-8 md:px-12 lg:px-16 overflow-x-hidden max-w-[100vw]">
      <div className="mx-auto max-w-7xl">
        {/* Main Topic Heading */}
        <h1 className="mb-12 text-4xl font-bold text-left text-white sm:text-5xl">News & Updates</h1>

        {/* News Items */}
        {[
          {
            img: Img7,
            alt: "Img1",
            date: "October 16, 2024",
            title: 'Record-Breaking UK Order',
            description: "Recently, JCB celebrated securing its largest-ever UK order, with the British government placing a significant purchase for fleet upgrades. This deal highlights JCB continuing relevance in the UK heavy machinery market, even amidst industry-wide economic challenges.",
            aosEffect: "zoom-out-right",
          },
          {
            img: Img5,
            alt: "Img2",
            date: "October 7, 2024",
            title: "Profit Growth Amid Challenges",
            description: "JCB saw a 44% rise in pre-tax profits last year but anticipates tougher conditions ahead due to reduced UK housebuilding and economic slowdowns in Europe. Nonetheless, JCB’s international growth remains strong, especially in North America and India.",
            aosEffect: "zoom-out-left",
          },
          {
            img: Img3,
            alt: "Img3",
            date: "October 3, 2024",
            title: "Hydrogen Innovation",
            description: "JCB recently unveiled a hydrogen-powered generator, advancing its commitment to zero-carbon technologies. This innovation underscores JCB's efforts toward environmentally sustainable solutions for the future of construction and heavy machinery.",
            aosEffect: "zoom-out-right",
          },
        ].map((newsItem, index) => (
          <div 
            className="grid grid-cols-1 gap-8 mt-20 lg:grid-cols-2" 
            key={index} 
            data-aos={newsItem.aosEffect} 
            data-aos-delay={index * 500}
          >
            {/* Left Section - Image */}
            <div className="flex justify-center lg:justify-start">
              <img
                src={newsItem.img} 
                alt={newsItem.alt}
                className="w-full rounded-lg shadow-lg h-[500px]"
              />
            </div>

            {/* Right Section - Content */}
            <div className="flex flex-col justify-center text-white">
              <p className="mb-2 text-base text-white uppercase">{newsItem.date}</p>
              <h2 className="mb-4 text-3xl font-bold text-yellow-300 sm:text-4xl">{newsItem.title}</h2>
              <p className="mb-4 text-base sm:text-lg">{newsItem.description}</p>
              <button className="w-[150px] py-2 mt-4 font-semibold text-center text-blue-800 bg-white rounded hover:bg-yellow-400">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default News;
