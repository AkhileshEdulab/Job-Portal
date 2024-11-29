import { Carousel } from '@mantine/carousel';
import { jobCategory } from '../Data/Data';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

const JobCategory = () => {
  return (
    <div className="flex flex-col items-center mt-20 gap-6 px-4">
 
      <div className="flex justify-center items-center text-5xl gap-2 font-semibold text-center text-gray-100">
        Browse <span className="text-bright-sun-400">JOB</span> Category
      </div>

      <div className="text-center text-gray-100 max-w-2xl">
        Explore diverse job opportunities tailored to your skills. Start your career journey today!
      </div>

      <div className="w-full m-4">
      <Carousel
           slideSize="22%"
           slideGap="md"
           loop
           className="[&_button]:opacity-0 hover:[&_button]:opacity-75 focus:[&_button]:bg-bright-sun-400"
          
            nextControlIcon={<IconArrowRight />}
           previousControlIcon={<IconArrowLeft />}>
          {jobCategory.map((category, index) => (
            <Carousel.Slide key={index} >
              <div className="flex flex-col items-center w-64 gap-2 p-5 border border-bright-sun-400 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 !shadow-bright-sun-300 transition">
                {/* Image */}
                <div className=" bg-bright-sun-300 rounded-full overflow-hidden">
                  <img
                    src={`/Category/${category.name}.png`}
                    alt={category.name}
                    className="h-8 w-8 object-cover"
                  />
                </div>
                
                <div className="text-bright-sun-300 font-semibold text-xl">{category.name}</div>
                
                <div className="text-mine-shaft-300 text-sm text-center">{category.desc}</div>
               
                <div className="text-mine-shaft-400 text-sm">{category.jobs}+ new jobs</div>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default JobCategory;
