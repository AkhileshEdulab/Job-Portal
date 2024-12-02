import {  Indicator } from '@mantine/core';
import { IconAnchor, IconBell, IconSettings, } from '@tabler/icons-react';
import NavLinks from './NavLinks';
import { useLocation } from 'react-router-dom';
import ProfileMenu from './ProfileMenu';

const Header = () => {
  
 const location=useLocation();
  return location.pathname!=="/sign-up"&& location.pathname!=="/login"?<div className="w-full h-20 flex items-center justify-between p-5 bg-mine-shaft-950 text-white font-[Poppins]">
      <div className="flex gap-2 items-center">
        <IconAnchor size={24} stroke={2.5} className='text-bright-sun'/>
        <span className="text-xl sm:text-2xl text-bright-sun-300 font-bold">Job Hook</span>
      </div>
      {NavLinks()}
      <div className="flex items-center gap-3">
      <ProfileMenu/>
        <div className='rounded-full p-1.5 bg-mine-shaft-800 text-mine-shaft-300 hover:text-mine-shaft-100'>
        <IconSettings size={25} className="cursor-pointer" />
        </div>
        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-mine-shaft-800 text-mine-shaft-300 hover:text-mine-shaft-100">
  <Indicator inline size={10} offset={6} color="bright-sun.5" withBorder>
    <IconBell size={20} className="cursor-pointer" />
  </Indicator>
</div>
      </div>
    </div> :<></>
    
}

export default Header;
