
import React, { useEffect } from 'react';
import Img1 from '../assets/1st.jpg';
import Img2 from '../assets/2nd.jpg';
import Img3 from '../assets/3rd.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CaseStudies = () => {
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
        <h1 className="mb-12 text-4xl font-bold text-left text-white sm:text-5xl">Case Studies</h1>

        {/* Case Study Items */}
        {[
          {
            img: Img1,
            alt: "Img1",
            client: "Isle of Man Government",
            title: "Isle of Man Ferry Terminal Development",
            description: "Playing a crucial role in a major infrastructure project that enhances connectivity between Liverpool and the Isle of Man.",
            aosEffect: "zoom-out-right",
          },
          {
            img: Img2,
            alt: "Img2",
            client: "BAM",
            title: "Co-op Live Arena Construction",
            description: "Working with BAM to bring Manchester's largest entertainment arena to life.",
            aosEffect: "zoom-out-left",
          },
          {
            img: Img3,
            alt: "Img3",
            client: "Liverpool City Council",
            title: "Sea Odyssey: Giant Spectacular",
            description: "Helping boost the Liverpool economy with an unforgettable city centre event.",
            aosEffect: "zoom-out-right",
          }
        ].map((caseStudy, index) => (
          <div 
            className="grid grid-cols-1 gap-8 mt-20 lg:grid-cols-2" 
            key={index} 
            data-aos={caseStudy.aosEffect} 
            data-aos-delay={index * 500}
          >
            {/* Left Section - Image */}
            <div className="flex justify-center lg:justify-start">
              <img
                src={caseStudy.img} 
                alt={caseStudy.alt}
                className="w-full h-[500px] rounded-lg shadow-lg"
              />
            </div>

            {/* Right Section - Content */}
            <div className="flex flex-col justify-center text-white">
              <p className="mb-2 text-base text-white uppercase">{caseStudy.client}</p>
              <h2 className="mb-4 text-3xl font-bold text-yellow-300 sm:text-4xl">{caseStudy.title}</h2>
              <p className="mb-4 text-base sm:text-lg">{caseStudy.description}</p>
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

export default CaseStudies;
