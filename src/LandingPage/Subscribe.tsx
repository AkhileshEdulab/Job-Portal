import { Input } from '@mantine/core';
import { IconMail } from '@tabler/icons-react';
import React from 'react';

const Subscribe = () => {
  return (
    <div className="flex flex-col md:flex-row mt-20 items-center bg-mine-shaft-800 mx-5 md:mx-20 py-6 rounded-xl justify-between gap-4 px-6">
      {/* Heading Section */}
      <div className="text-mine-shaft-100 text-5xl font-semibold text-center md:text-left">
        Never Want to Miss Any <span className="text-bright-sun-400">New Job</span>
      </div>

      {/* Input Section */}
      <div className="flex items-center gap-4 w-full md:w-auto">
        <Input
          
          placeholder="Your email"
          size="md"
        />
        <IconMail size={20} />
        <button
          type="button"
          className="bg-bright-sun-400 text-white py-2 px-6 rounded-lg font-semibold hover:bg-bright-sun-500 transition"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
