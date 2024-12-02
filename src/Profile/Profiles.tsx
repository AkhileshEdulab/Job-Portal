import { ActionIcon, Button, Divider, TagsInput, Textarea,  } from '@mantine/core';
import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil } from '@tabler/icons-react';
import Experences from './Experences';
import Certificates from './Certificates';
import { useState } from 'react';
import SelectInput from './SelectInput';
import fields from '../Data/Profile';

const Profiles = (props:any) => {
  const select = fields;
  const [about, setAbout] = useState("As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively.",);
  const [edit, setEdit]=useState([false,false,false,false,false]);
  const [skills, setSkills] = useState(['React', 'Spring Boot', 'Java', 'Python', 'Node.js', 'MongoDB', 'Express', 'Django', 'PostgreSQL']);

  const handelEdit =(index:any)=>{
    const newEdit=[...edit];
    newEdit[index] =!newEdit[index]
    setEdit(newEdit)

  }
  return (
    <div className="w-4/5 mx-auto ">
      <div className="relative ">
        <img src="/Profile/banner.jpg" alt="banner" className="rounded-t-xl" />
        <img
          src="/avatar.png"
          alt=""
          className="rounded-full h-32 w-32 absolute -bottom-8 mx-4 border-[6px] border-mine-shaft-900"
        />
      </div>
      <div className="mt-12 flex flex-col gap-4">
        <div className="font-semibold text-2xl flex justify-between ">{props.name}
        <ActionIcon variant="light" onClick={()=>handelEdit(0)}>
          {edit[0]?<IconDeviceFloppy size={30} stroke={1.5} className='text-bright-sun-400'/> :<IconPencil size={30} stroke={1.5} className='text-bright-sun-400'/>
        }
        </ActionIcon>
        </div>
        {edit[0]?<> <div className='flex gap-10 [&>*]:w-1/2'>
            <SelectInput {...select [0]}/>
            <SelectInput {...select [1]}/>
        </div>
            <SelectInput {...select [2]}/>  </>: <> <div className="flex gap-2 mt-2">
           
            <IconBriefcase />
            {props.role} &bull; {props.company}
          </div>
          <div className="flex gap-2 mt-2 mb-4">
            <IconMapPin />
            {props.location}
          </div>  </>}
         
      </div>
      <Divider size="xs" />
      
      <div className="mb-4">
  <div className="text-mine-shaft-100 mt-4 font-semibold text-2xl flex justify-between">About
      <ActionIcon variant="light" onClick={() => handelEdit(1)}>
        {edit[1] ? <IconDeviceFloppy size={30} stroke={1.5} className="text-bright-sun-400" />: <IconPencil size={30} stroke={1.5} className="text-bright-sun-400" />}
      </ActionIcon>
  </div>

  {edit[1] ? <Textarea autosize placeholder='Enter about yourself...'maxRows={4} value={about} onChange={(event) => setAbout(event.currentTarget.value)} />: <>
    <div className="flex justify-between mine-shaft-400">
      {props.about}
    </div>
    </>}
</div>

      <Divider size="xs" />

      <div className="mt-4 flex flex-col gap-4 mb-8 ">
        <div className="font-semibold text-2xl flex justify-between">Skills
        <ActionIcon variant="light" onClick={()=>handelEdit(2)}>
          {edit[2]?<IconDeviceFloppy size={30} stroke={1.5} className='text-bright-sun-400'/> :<IconPencil size={30} stroke={1.5} className='text-bright-sun-400'/>
        }
        </ActionIcon>
        </div>
        {
          edit[2]?<> <TagsInput splitChars={[',', ' ', '|']}  value={skills} onChange={setSkills}  placeholder="Enter skills" /></>:<>
          <div className="flex gap-4 flex-wrap">
          {
            props.skills.map((item: any, index: any) => 
            <div key={index} className="bg-mine-shaft-800 rounded-xl px-2 text-bright-sun-400">
                {item}
              </div>
            )
          }
        </div>
        </>
        }
      </div>

      
      <Divider size="xs" />
      <div className=" mt-4">
        <div className="text-3xl font-semibold flex justify-between">Experience<ActionIcon variant="light" onClick={()=>handelEdit(3)}>
          {edit[3]?<IconDeviceFloppy size={30} stroke={1.5} className='text-bright-sun-400'/> :<IconPencil size={30} stroke={1.5} className='text-bright-sun-400'/>
        }
        </ActionIcon>
        </div>
        <div className="flex flex-col gap-8">
              {
              props.experience.map((exp: any, index: any) => <Experences key={index} {...exp} edit={edit[3]}/>)
             }        
        </div>
      </div>
      <Divider size="xs" />
      <div className=" mt-4">
        <div className="text-3xl font-semibold flex justify-between">Certification
        <ActionIcon variant="light" onClick={()=>handelEdit(4)}>
          {edit[4]?<IconDeviceFloppy size={30} stroke={1.5} className='text-bright-sun-400'/> :<IconPencil size={30} stroke={1.5} className='text-bright-sun-400'/>
        }
        </ActionIcon>
        </div>
        <div className="flex flex-col gap-8">
          {props.certifications && props.certifications.length > 0 ? (
            props.certifications.map((exp: any, index: any) => (
              <Certificates key={index} {...exp} />
            ))
          ) : (
            <div className="text-gray-500">No certifications available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profiles;
