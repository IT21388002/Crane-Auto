// ExploreService.jsx
import React from 'react';
import Img4 from '../assets/johnsutchshot1080.png'; // Update this path as necessary

const ExploreService = () => {
  return (
    <div className="w-full py-12 mt-20 bg-white"> {/* Full-width background */}
      <div className="max-w-6xl px-4 mx-auto md:px-8 lg:px-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-8">
            <p className="text-lg font-semibold text-blue-500">Explore Our Services</p>

            {/* Link to News */}
            <a href="/news" className="block p-4 transition-transform transform bg-gray-50 hover:scale-105">
              <h2 className="text-2xl font-bold text-blue-900">Our News</h2>
              <p className="text-blue-800">
                Find out what we're up to with news and updates from our team. 
              </p>
            </a>

            {/* Link to Team */}
            <a href="/team" className="block p-4 transition-transform transform bg-gray-50 hover:scale-105">
              <h2 className="text-2xl font-bold text-blue-900">Our Team</h2>
              <p className="text-gray-800">
                The skills of the team are what make us great. Meet key personnel from our business.
              </p>
            </a>

            {/* Link to Fleet */}
            <a href="/fleet" className="block p-4 transition-transform transform bg-gray-50 hover:scale-105">
              <h2 className="text-2xl font-bold text-blue-900">Our Fleet</h2>
              <p className="text-gray-800">
                Whether you want CPA Hire or CPA Contract, we can help.
              </p>
            </a>
          </div>

          {/* Image */}
          <img
            src={Img4}
            alt="Building site helmet"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreService;
