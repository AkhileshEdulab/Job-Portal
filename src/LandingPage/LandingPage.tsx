

import { Avatar } from '@mantine/core';
import {  IconSearch, IconUpload } from '@tabler/icons-react';

const LandingPage = () => {
  return (
    <div className="flex justify-between items-center text-mine-shaft-100 p-5 ml-[60px]">
      <div className="flex flex-col gap-8">
        <div className="text-[60px] font-bold leading-tight">
          <div>
            Find Your <div className="text-bright-sun-400">Dream Jobs</div>
          </div>
          <span className="text-mine-shaft-200"> with Us</span>
        </div>

        <div className="text-lg text-gray-200">
          Find your dream job with us! Explore exciting opportunities,
          <p> grow your career, and achieve your professional goals today.</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="bg-mine-shaft-700 rounded-md flex-1 p-2">
            <label className="block text-white text-sm font-medium pl-2">Job Title</label>
            <input
              type="text"
              placeholder="Software Engineer"
              className="bg-mine-shaft-700 outline-none w-full pl-2 rounded-md"
            />
          </div>
          <div className="bg-mine-shaft-700 rounded-md flex-1 p-2">
            <label className="block text-white text-sm font-medium pl-2">Job Type</label>
            <input
              type="text"
              placeholder="Fulltime"
              className="bg-mine-shaft-700 outline-none w-full pl-2 rounded-md"
            />
          </div>
          <button
            className="bg-bright-sun-300 hover:bg-bright-sun-400 text-white rounded-lg px-4 py-3 flex items-center justify-center shadow-md transition-transform transform hover:scale-105"
          >
            <IconSearch size={30} stroke={3}/>
          </button>
        </div>
      </div>

      <div className="relative flex items-center h-[600px] w-[600px] mt-5">
        <div className="absolute backdrop-blur-md items-center bg-mine-shaft-950 border-2 border-bright-sun-400 rounded-lg shadow-lg p-2 w-50 mb-[200px]">
          <div className="flex items-center gap-3">
            <div className="bg-mine-shaft-500 rounded-md p-2 h-8 w-8">
              <img src="Google.png" alt="google" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Software Engineer</h3>
              <p className="text-sm ">New York</p>
            </div>
          </div>
          <div className="mt-2 text-sm  flex justify-between">
            <span>1 day ago</span> <span>120 Applications</span>
          </div>
        </div>

        
        <img src="Boy.png" alt="Illustration of a boy" className="w-full h-auto rounded-lg" />

     
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-bright-sun-400 p-4 rounded-lg border-2 flex flex-col items-center backdrop-blur-md">
          <span className="mb-2 text-sm text-white font-semibold">50+ Get Job</span>
          <Avatar.Group>
            <Avatar src="avatar.png" />
            <Avatar src="avatar1.png" />
            <Avatar src="avatar2.png" />
            <Avatar>+5</Avatar>
          </Avatar.Group>
        </div>

        <div className="absolute bottom-4 right-4 flex justify-end items-center text-sm text-white px-4 py-2 rounded-lg shadow-md cursor-pointer border-2 bg-bright-sun-400">
          <IconUpload/>
          Upload Your CV
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
