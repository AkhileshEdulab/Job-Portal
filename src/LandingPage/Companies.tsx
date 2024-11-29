import Marquee from 'react-fast-marquee';
import { companies } from '../Data/Data';


const Companies = () => {
  return (
    <div className="flex flex-col text-center mt-20">
    <div className="text-5xl font-semibold text-mine-shaft-100 mb-12">
      Trusted By <span className='text-bright-sun-400'>1000+</span> Companies
    </div>
    <Marquee pauseOnHover={true} speed={50}>
      {companies.map((company, index) => (
        <div key={index} className="px-2 mx-4 py-0.5 hover:bg-mine-shaft-600 rounded-lg">
          <img
            src={`/Companies/${company}.png`} 
            alt={company}
            className="h-12 w-auto object-contain" 
          />
        </div>
      ))}
    </Marquee>
    </div>
  );
};

export default Companies;
