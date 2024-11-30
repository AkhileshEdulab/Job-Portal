import { testimonials } from '../Data/Data';
import { Rating } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

const Testimonial = () => {
  return (
    <div className="mt-20 mb-10 text-center">
      {/* Title */}
      <h2 className="text-5xl font-bold text-mine-shaft-100">
        What <span className="text-bright-sun-400">Users</span> Say About Us?
      </h2>

      
      <div className="relative group mt-10 px-4 "> 
        <Carousel
          slideSize="22%"
          slideGap="lg" 
          loop
          nextControlIcon={<IconArrowRight />}
          previousControlIcon={<IconArrowLeft />}
          className="[&_button]:opacity-0 group-hover:[&_button]:opacity-100 [&_button]:transition-opacity [&_button]:bg-bright-sun-400"
        >
          {testimonials.map((item, index) => (
            <Carousel.Slide
              key={index}
              className="flex flex-col border border-bright-sun-400 rounded-lg p-6 shadow-md mx-2 hover:shadow-[0_0_5px_2px_red]" 
            >
              {/* User Info */}
              <div className="flex items-center gap-4 ">
                <img
                  src={`avatar.png`}
                  alt={item.name}
                  className="w-14 h-14 object-cover rounded-full"
                />
                <div>
                  <div className="text-lg font-semibold text-mine-shaft-100">
                    {item.name}
                  </div>
                  <Rating value={item.rating} fractions={2} readOnly />
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="mt-4 text-sm text-mine-shaft-300 text-start">
                {item.testimonial}
              </p>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
