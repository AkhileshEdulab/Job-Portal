import { Button, Divider } from '@mantine/core'
import { IconBriefcase, IconMapPin } from '@tabler/icons-react'
import Experience from './Experence'
import Certificate from './Certificate'


const Profile = (props:any) => {
  return (
   
     <div className=' '>
        <div className='relative'>
            <img src="/Profile/banner.jpg" alt="banner" className='rounded-t-xl'/>
            <img src="/avatar.png" alt="" className='rounded-full h-32 w-32 absolute -bottom-8 mx-4 border-[6px] border-mine-shaft-900'/>
        </div>
        <div className='mt-12'>
            <div className='font-semibold text-2xl'>{props.name}</div>
            <div className='flex gap-2 mt-2'>
                <IconBriefcase />
                {props.role} &bull; {props.company}
            </div>
            <div className='flex gap-2 mt-2'>
                <IconMapPin/>
               {props.location}
            </div>
            <div className='mt-4'>
        <Button variant="outline" color="bright-sun.4" className="shadow-l shadow-bright-sun-400 hover:scale-110 transition-transform duration-300 mb-4">Message</Button>
        </div>
        </div>
        <Divider  size="xs" /> 
        <div className='mb-4'>
            <div className='text-mine-shaft-100 mt-4 font-semibold text-2xl'>About</div>
            <div className='text-mine-shaft-400'>{props.about}</div>
        </div>
        <Divider  size="xs" /> 
        <div className='mt-4 flex flex-col gap-4 mb-8 '>
            <div className='font-semibold text-2xl'>Skills</div>
            <div className='flex gap-4 flex-wrap'>
                {
                    props.skills.map((skill:any,index:any) =><div key={index} className='bg-mine-shaft-800 rounded-xl px-2 text-bright-sun-400'>{skill}</div>
                )
                }
           </div>
        </div>
        <Divider  size="xs" /> 
        <div className=' mt-4'>
        <div className='text-3xl font-semibold'>Experience</div>
               <div className='flex flex-col gap-8'>
               {
                    props.experience.map((exp:any,index:any) =>  <Experience key={index} {...exp}/>)
                }
               </div>
        </div> 
        <Divider  size="xs" /> 
        <div className=' mt-4'>
        <div className='text-3xl font-semibold'>Certification</div>
               <div className='flex flex-col gap-8'>
               {
                    props.certifications.map((exp:any,index:any) =>  <Certificate key={index} {...exp}/>)
                }
               </div>
        </div>
        </div>
   
  )
}

export default Profile