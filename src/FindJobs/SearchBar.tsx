
import { Divider, RangeSlider } from '@mantine/core';
import { dropdownData } from '../Data/JobsData'
import MultiInput from './MultiInput'
import { useState } from 'react';

const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([1, 100]);
   
    return <div className="flex px-5 py-8">
  {
  dropdownData.map((item, index) =><>  <div key={index} className="flex items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
     <MultiInput {...item} />
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
  

