import React, { useEffect } from 'react';
import Img1 from '../assets/1.jpg';
import Img2 from '../assets/2.jpg';
import Img3 from '../assets/3.jpg'; 
import Img4 from '../assets/img3.jpeg';
import Img5 from '../assets/johnsutchteam.png';
import Img6 from '../assets/about.jpeg'
import ExploreService from './exploreService';
import Img7 from '../assets/guy.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // Animate only once
    });
  }, []);

  return (
    <div className="relative px-4 py-12 overflow-x-hidden bg-blue-800 md:px-0">

    <div className="relative z-10 flex justify-center mb-20" data-aos="fade-up">
        <img 
          src={Img6} 
          alt="Cranes Service" 
          className="object-cover h-[400px] md:h-[600px] transition-transform duration-300 rounded-lg w-full max-w-[1300px]" 
        />
        <div className="absolute bg-black rounded-lg opacity-50 w-full max-w-[1300px] h-full"></div>

        {/* About Label */}
        <div className="absolute left-0 z-20 pl-2 text-xl font-bold text-white bottom-4 md:text-7xl md:pl-80">
          Strong Foundations<br/>
          Filling Skylines
        </div>
      </div>

      {/* First Section - Content on Left, Image on Right */}
      <div className="relative z-10 flex flex-col-reverse max-w-6xl gap-10 mx-auto md:flex-row md:justify-between" data-aos="fade-right">
        <div className="flex flex-col w-full md:w-1/2">
          <p className="mb-6 text-lg text-white">
          Welcome to our services, where strength and reliability meet excellence in every lift. Since our beginnings in 1990, we've grown from a small, family-run operation into a leading force in the crane industry. Our commitment to quality and safety drives us to provide top-tier equipment and services for projects of all sizes, ensuring that every job is completed with precision and care. With decades of experience under our belt, we’re proud to continue offering dependable crane solutions that keep our clients’ projects on track.
          </p>
          <p className="mb-6 text-lg text-white">
          we go beyond providing machinery hire—we are a vital partner in the construction and engineering industries. Built on a foundation of trust, reliability, and exceptional service, we have grown from modest beginnings into one of the leading crane hire companies in the UK. Our reputation for delivering the highest standards of service and equipment has made us a trusted choice for projects of all sizes.          </p>
        </div>
        <div className="flex flex-col w-full md:w-1/2" data-aos="fade-left">
           <img src={Img1} alt="Cranes Service" className="object-cover w-full mb-6 transition-transform duration-300 rounded-lg h-96 hover:scale-110 md:mb-0" />
         </div>
      </div>

      {/* Second Section - Image on Left, Content on Right */}
      <div className="relative z-10 flex flex-col max-w-6xl gap-10 mx-auto mt-14 md:flex-row md:justify-between" data-aos="fade-left">
        <div className="flex flex-col w-full md:w-1/2">
          <img src={Img2} alt="Cranes Service" className="object-cover w-full transition-transform duration-300 rounded-lg h-96 hover:scale-110" />
        </div>
        <div className="flex flex-col w-full md:w-1/2" data-aos="fade-right">
          <p className="mb-6 text-lg text-white">
          A key to our success lies in the emphasis we place on loyalty and trust—values that resonate deeply within our company. Many of our team members have been with us from the very beginning, with several in our operations team having dedicated over a decade of service. This longevity fosters a wealth of experience and a personal commitment to every project and client, setting us apart in the crane hire industry.          </p>
          <p className="mb-6 text-lg text-white">
          Our dedicated team, alongside the family leadership, ensures that every project is executed with exceptional care and a strong commitment to our clients’ success. This blend of professional expertise and personal dedication defines every service we offer, making sure we provide not just a job, but a partnership built on trust and quality.          </p>
        </div>
      </div>

      {/* Third Section */}
      <div className="relative z-10 flex flex-col max-w-6xl gap-10 mx-auto mt-14 md:flex-row md:justify-between" data-aos="fade-up">
        <div className="flex flex-col w-full md:w-1/2">
          <p className="mb-6 text-lg text-white">
          Our foundation is as strong as the cranes that shape our skylines. Established in 1990, our company began as a small, family-run venture with a passion for heavy machinery. What started with a single crane operation has grown into a trusted industry leader, driven by our ongoing commitment to excellence, innovation, and customer satisfaction. Our family-driven business continues to thrive, with decades of expertise fueling our success in the crane hire sector.
          </p>
          <p className="mb-6 text-lg text-white">
          we are not just a JCB hire company—we are a cornerstone of the construction and engineering sectors. Rooted in values of trust, reliability, and unmatched service, we've grown from humble beginnings to a respected leader in the UK's crane hire industry. Our dedication to excellence has earned us a reputation for being one of the top companies in the field, trusted by clients across various industries.
          </p>
        </div>
        {/* Third Section - Image on Left, Content on Right */}
        <div className="flex flex-col w-full md:w-1/2" data-aos="fade-left">
          <img src={Img3} alt="Towing Service" className="object-cover w-full mb-6 transition-transform duration-300 rounded-lg h-96 hover:scale-110 md:mb-0" />
        </div>
      </div>

      {/* Values Section */}
      <div className="mx-auto mt-32 max-w-7xl">
      <h1 className="mb-12 text-4xl font-bold text-left text-white pl-28 sm:text-5xl" data-aos="fade-down">Our Values</h1>
        <div className="grid grid-cols-1 gap-8 px-4 mt-10 md:grid-cols-2 place-items-center">
          <div className="w-full max-w-sm mt-6 rounded-lg md:w-[500px]" data-aos="zoom-in">
            <span className="flex items-center justify-center w-10 h-10 mb-4 text-2xl text-white bg-yellow-500 rounded-full faq-question-icon">?</span>
            <h3 className="mb-2 text-xl font-bold text-white md:text-3xl faq-question-title">Safety First</h3>
            <p className="text-sm text-white md:text-base faq-question-answer">
              At Apex, we offer comprehensive car towing and recovery services across the UK. Our services include roadside assistance, vehicle recovery, accident recovery, and transportation of vehicles to designated locations.
            </p>
          </div>

          <div className="w-full max-w-sm mt-6 rounded-lg md:w-[500px]" data-aos="zoom-in">
            <span className="flex items-center justify-center w-10 h-10 mb-4 text-2xl text-white bg-yellow-500 rounded-full faq-question-icon">?</span>
            <h3 className="mb-2 text-xl font-bold text-white md:text-3xl faq-question-title">Excellence In Service</h3>
            <p className="text-sm text-white md:text-base faq-question-answer">
              We specialize in towing a wide range of vehicles, including cars, vans, motorcycles, and light commercial vehicles. Our team has the expertise and equipment to handle the job efficiently and safely.
            </p>
          </div>

          <div className="w-full max-w-sm mt-6 rounded-lg md:w-[500px]" data-aos="zoom-in">
            <span className="flex items-center justify-center w-10 h-10 mb-4 text-2xl text-white bg-yellow-500 rounded-full faq-question-icon">?</span>
            <h3 className="mb-2 text-xl font-bold text-white md:text-3xl faq-question-title">Integrity</h3>
            <p className="text-sm text-white md:text-base faq-question-answer">
              We pride ourselves on our rapid response times. Our team at Apex is available 24/7, ensuring that we can reach you swiftly whenever you need us. Typically, we aim to reach your location within 20 minutes of receiving your call.
            </p>
          </div>

          <div className="w-full max-w-sm mt-6 rounded-lg md:w-[500px]" data-aos="zoom-in">
            <span className="flex items-center justify-center w-10 h-10 mb-4 text-2xl text-white bg-yellow-500 rounded-full faq-question-icon">?</span>
            <h3 className="mb-2 text-xl font-bold text-white md:text-3xl faq-question-title">Reliability</h3>
            <p className="text-sm text-white md:text-base faq-question-answer">
              Requesting our services is easy. Simply give Apex a call, message us on Whatsapp or fill out our online contact form on our website. Provide us with your location and details of your situation, and we'll dispatch a team to assist you promptly.
            </p>
          </div>
        </div>
      </div>

      {/* Explore Services Section */}
      <div className="w-full py-12 mx-0 mt-20 mb-20 bg-white" data-aos="fade-up">
        <div className="container max-w-6xl px-4 mx-auto md:px-8 lg:px-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-8">
              <p className="text-lg font-semibold text-black">Explore Our Services</p>

              {/* Link to News */}
              <a href="/news" className="block p-4 transition-transform transform link-arrow bg-gray-50 hover:scale-105" data-aos="fade-up">
                <h2 className="text-4xl font-bold text-black">Our News</h2>
                <p className="text-black">
                  Find out what we're up to with news and updates from our team. 
                </p>
              </a>

              {/* Link to Team */}
              <a href="/news" className="block p-4 transition-transform transform link-arrow bg-gray-50 hover:scale-105" data-aos="fade-up">
                <h2 className="text-4xl font-bold text-black">Our Team</h2>
                <p className="text-black">
                  The skills of the team are what make us great. Meet key personnel from our business.
                </p>
              </a>

              {/* Link to Fleet */}
              <a href="/news" className="block p-4 transition-transform transform link-arrow bg-gray-50 hover:scale-105" data-aos="fade-up">
                <h2 className="text-4xl font-bold text-black">Our Fleet</h2>
                <p className="text-black">
                  Whether you want CPA Hire or CPA Contract, we can help.
                </p>
              </a>
            </div>

            {/* Image */}
            <img src={Img4} alt="Building site helmet" className="object-cover w-full h-full" data-aos="fade-left"/>
          </div>
        </div>
      </div>      

    
      <img 
  src={Img7} 
  alt="Crane Image" 
  className="h-[500px] rounded-md w-full max-w-[1135px] mx-auto sm:w-full object-cover" 
  data-aos="zoom-in" 
/>

      <div className="flex flex-col items-center justify-center px-4 py-5 mx-4 mt-5 text-black transition-all duration-300 bg-white rounded-md sm:mx-4 sm:px-4 sm:flex-col sm:justify-center sm:items-center md:flex-row md:justify-between md:mx-96" data-aos="flip-up">
        <span className="text-2xl font-bold text-center sm:text-center md:text-left">Crane Calculator</span>
        <span className="px-4 text-xl text-center sm:text-center md:text-left">Find the right crane for your job in no time!</span>
        <button className="px-3 py-3 font-semibold text-white transition-all duration-300 bg-blue-500 rounded-md hover:bg-yellow-500 sm:mx-auto md:ml-80">Go To Calculator</button>
      </div>

    </div>
  );
};

export default About;