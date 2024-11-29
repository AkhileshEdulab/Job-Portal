import { ActionIcon, Button, Divider } from '@mantine/core'
import { IconBookmark, } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import { card, desc, skills } from '../Data/JobDescData'

import DOMPurify from 'dompurify'
const JobDesc = (props:any) => {
    const data =DOMPurify.sanitize(desc);
  return (
    <div className='w-2/3'>
         <div className="flex justify-between">
        <div className="flex gap-2 items-center"> 
            <div className='p-3 bg-mine-shaft-800 rounded-md'>
            <img src={`/Icons/Google.png`} alt="apple" className="w-8 h-8"/>
            </div>
            <div className='flex flex-col gap-1'>
        <div className="font-semibold text-mine-shaft-100 text-2xl">Google</div>
        <div className="text-mine-shaft-300">Goodle &#9679; Applicants</div>
        </div>
             </div>
             {/* <div className='flex flex-col items-center'>
                <Link to={'/apply-job'}>
                <Button variant="light" color="bright-sun.5">{props.edit?'Edit':'Apply'}</Button>
                </Link>
             {props.edit?<Button variant="light" color="bright-sun.4">{props.edit?'Edit':'Apply'}Delete</Button>:<IconBookmark/>}

             </div> */}
             
             <div className="flex flex-col items-center">
  <Link to="/apply-job">
    <Button variant="light" color="bright-sun.5">
      {props.edit ? 'Edit' : 'Apply'}
    </Button>
  </Link>
  
  {props.edit ? (
    <Button variant="light" color="bright-sun.4">Delete</Button>
  ) : (
    <IconBookmark />
  )}
</div>


        </div>
        <Divider size="xs" />
        <div className='flex mt-4 justify-between mb-8'>
            {
                card.map((item:any,index:number)=><div key={index} className='flex flex-col items-center gap-1'>
                <ActionIcon variant="filled" color="bright-sun.5" aria-label="Settings" radius={'xl'}>
          <item.icon style={{ width: '70%', height: '70%' }} stroke={2} />
        </ActionIcon>
        <div className='text-sm'>{item.name}</div>
          <div className="font-semibold">{item.value}</div>
                </div>
                )
            }
            
        </div>
        <Divider size="xs" />
        <div className='mt-8'>
            <div className='text-sl font-semibold mb-5'>Require Skills</div>
            <div className='flex flex-wrap gap-2 mb-8'>
            {
            skills.map((item,index)=> <ActionIcon key={index} variant="filled" color="bright-sun.5" aria-label="Settings" radius={'xl'} p='sm'className='!h-fit font-medium !w-fit'>
          {item}
            </ActionIcon>)
          }
           
            </div>
        </div>
        <Divider size="xs" />
        <div className='[&_h4]:text-xl [&_*]:text-mine-shaft-300 [&_li]:marker:text-bright-sun-400 [&_li]:mb-1 [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]:text-justify' dangerouslySetInnerHTML={{__html:data}}>

        </div>
        <Divider size="xs" />
        <div>
            <div className='text-xl font-semibold mb-5 mt-4'>About Company</div>
            <div className="flex justify-between">
        <div className="flex gap-2 items-center"> 
            <div className='p-3 bg-mine-shaft-800 rounded-md'>
            <img src={`/Icons/Google.png`} alt="apple" className="w-8 h-8"/>
            </div>
            <div className='flex flex-col '>
        <div className="font-medium text-mine-shaft-100 text-xl">props.jobTitle</div>
        <div className="text-mine-shaft-300">10k+employs</div>
        </div>
             </div>
             <div className='flex flex-col items-center'>
                <Link to='/company'>
                <Button variant="light" color="bright-sun.4">Company Page</Button>
                </Link>
             </div>
            
        </div>
        <div className='text-mine-shaft-300 mb-3 text-justify mt-4'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad placeat ut enim animi aliquam natus unde, tenetur suscipit, ipsam corrupti asperiores deserunt expedita optio voluptatibus autem esse libero, atque ipsum!
            </div>
        </div>
    </div>
  )
}

export default JobDesc;