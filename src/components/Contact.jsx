import React, { useEffect } from 'react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/craneAddress.png';
import img3 from '../assets/2.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/second.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 5,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center min-h-[75vh] p-4 bg-blue-800">
      <div className="container mx-auto text-3xl font-bold">
        <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-8">
          <img
            src={img1}
            alt="Image 1"
            className="object-cover h-[700px] w-[800px] col-span-1 md:col-span-4 md:row-span-2"
            data-aos="zoom-in"
          />
          <img
            src={img2}
            alt="Image 2"
            className="object-cover h-full col-span-1 md:col-span-2"
            data-aos="zoom-in"
            data-aos-delay="100"
          />
          <img
            src={img3}
            alt="Image 3"
            className="object-cover h-full col-span-1 md:col-span-2"
            data-aos="zoom-in"
            data-aos-delay="200"
          />
          <img
            src={img4}
            alt="Image 4"
            className="object-cover h-full col-span-1 md:col-span-2"
            data-aos="zoom-in"
            data-aos-delay="300"
          />
          <img
            src={img5}
            alt="Image 5"
            className="object-cover h-full col-span-1 md:col-span-2"
            data-aos="zoom-in"
            data-aos-delay="400"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full lg:w-[1400px] p-10 text-white bg-blue-950 rounded-md shadow-md mt-10 mb-10">
        <h2
          className="mb-4 text-xl font-semibold lg:pr-40 lg:text-2xl lg:mb-0"
          data-aos="fade-up"
        >
          For all enquiries,<br /> please get in touch, we would love to help
        </h2>
        <form className="w-full space-y-4">
          <div>
            <input
              type="text"
              className="w-full px-3 py-2 text-yellow-300 bg-blue-800 border border-yellow-500 rounded-md"
              placeholder="Full Name"
              data-aos="fade-up"
            />
          </div>
          <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
            <div className="w-full lg:w-1/2" data-aos="fade-up">
              <input
                type="email"
                className="w-full px-3 py-2 text-yellow-300 bg-blue-800 border border-yellow-500 rounded-md"
                placeholder="Email Address"
              />
            </div>
            <div className="w-full lg:w-1/2" data-aos="fade-up">
              <input
                type="tel"
                className="w-full px-3 py-2 text-yellow-300 bg-blue-800 border border-yellow-500 rounded-md"
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div data-aos="fade-up">
            <input
              type="text"
              className="w-full px-3 py-2 text-yellow-300 bg-blue-800 border border-yellow-500 rounded-md"
              placeholder="Location"
            />
          </div>
          <div data-aos="fade-up">
            <textarea
              className="w-full px-3 py-2 text-yellow-300 bg-blue-800 border border-yellow-500 rounded-md"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 font-bold text-blue-800 bg-white rounded-md hover:bg-yellow-400"
            data-aos="fade-up"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
