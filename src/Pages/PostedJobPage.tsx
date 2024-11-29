import React from 'react'
import PoJobs from '../PostedJobs/PoJobs';
import PostedJobDesc from '../PostedJobs/PostedJobDesc';

const PostedJobPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] flex px-4">
    <div className='flex gap-5'>
    <PoJobs/>
    <PostedJobDesc/>
    </div>
    </div>
  )
}

export default PostedJobPage;