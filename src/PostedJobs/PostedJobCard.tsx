import React from 'react'
import { activeJobs } from '../Data/PostedJob'

const PostedJobCard = (props:any) => {
  return (
    
        <div className='bg-mine-shaft-800 rounded-lg p-2 border-l-2 border-bright-sun-400'>
           
            <div className='text-sm font-semibold'>{props.jobTitle}</div>
            <div className='text-sm text-mine-shaft-300 font-medium' >{props.location}</div>
            <div className='text-sm text-mine-shaft-300'>{props.posted}</div>
            
        </div>
   
  )
}

export default PostedJobCard