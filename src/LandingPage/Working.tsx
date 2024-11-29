import React from 'react';
import { work } from '../Data/Data';

const Working = () => {
  return (
    <div className="flex flex-col items-center mt-8 gap-12 px-4">
   
      <div className="text-center">
        <h2 className="text-4xl lg:text-6xl text-mine-shaft-100 font-semibold">
          How It <span className="text-bright-sun-400">Works</span>
        </h2>
        <p className="text-mine-shaft-100 mt-2 text-lg lg:text-2xl">
          Effortlessly navigate through the process and land your dream job.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-12 w-full">
     
        <div className="flex-shrink-0 relative">
          <img
            src="/Working/Girl.png"
            alt="girl"
            className="lg:w-[500px] lg:h-[500px] md:w-[400px] md:h-[400px] object-contain"
          />

          <div className="absolute top-20 right-0 border-2 border-bright-sun-400 flex flex-col items-center w-[145px] rounded-md p-2  backdrop-blur-md shadow-lg">
          
            <div className="relative w-12 h-12">
              <img
                src="avatar1.png"
                alt="it's me"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div className="text-center mt-4">
              <div className="text-mine-shaft-100 font-semibold">Complete your profile</div>
              <div className="text-mine-shaft-300 text-sm">90% completed</div>
            </div>
          </div>
        </div>

       
        <div className="flex flex-col gap-6 md:w-1/2 text-xl">
          {work.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-5 p-4 border border-bright-sun-200 rounded-lg hover:shadow-lg transition-transform hover:scale-105"
            >
              <img
                src={`/Working/${item.name}.png`}
                alt={item.name}
                className="h-12 w-12 object-contain bg-bright-sun-400 rounded-full p-1"
              />
              <div className="flex flex-col">
                <div className="font-semibold text-2xl text-mine-shaft-100">{item.name}</div>
                <div className="text-mine-shaft-300">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Working;
