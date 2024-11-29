
import { Divider, Input, RangeSlider } from '@mantine/core';
import { useState } from 'react';
import MultiInput from '../FindJobs/MultiInput';
import { searchFields } from '../Data/TalentData';
import { IconUserCircle } from '@tabler/icons-react';

const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([1, 100]);
   
    return <div className="flex px-5 py-8 items-center">
        
            <div className='flex items-center gap-4 '>
                <IconUserCircle className='text-bright-sun-400 bg-mine-shaft-800 h-10 w-10 p-1 rounded-full'/> 
                <Input placeholder="Talent Name" variant='unstyled' className='outline-none'/>
               
                </div>

  {
  searchFields.map((item, index) =><>  <div key={index} className="flex items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
     <MultiInput title={item.title} icon={item.icon} options={item.options}/>
    </div>
    <Divider ml="xs" size="xs" orientation="vertical" />
    </>)}
     <div className='w-1/5 [&_.mantine-Silider-label]:!translate-y-10'>
    <div className='flex text-sm justify-between'> 
      <div>Sallary</div>
    <div>&#8377;{value[0]} LPA -&#8377;{value[1]} LPA</div>
    </div>
     <RangeSlider size={'xs'} color='bright-sun.4' value={value} onChange={setValue}
     labelTransitionProps={{
      transition: 'skew-down',
      duration: 150,
      timingFunction: 'linear',
    }}
     />
     </div>
</div>
    
  };
export default SearchBar;
  



