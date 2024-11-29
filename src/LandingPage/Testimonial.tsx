import React from 'react';
import { testimonials } from '../Data/Data';
import { Rating } from '@mantine/core';

const Testimonial = () => {
  return (
    <div className="mt-20 mb-5 text-center">
     
      <div className="text-5xl text-mine-shaft-100">
        What <span className="text-bright-sun-400">User</span> Says about us?
      </div>

      <div className="mt-10 flex gap-4">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="flex flex-col border border-bright-sun-400 rounded-lg p-6 shadow-md hover:shadow-lg transition"
          >
           
            <div className="flex gap-2">
              <img src={`avatar.png`}alt={item.name}
                className="w-14 h-14 object-cover rounded-full"
              />
              <div className="flex-col items-center text-lg font-semibold text-mine-shaft-100">{item.name}
             <Rating value={item.rating} fractions={2} readOnly/>
             </div>
            </div>
            <div className="text-sm text-mine-shaft-300 mt-2 text-start">{item.testimonial}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
