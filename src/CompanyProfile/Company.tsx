import { Avatar,  Divider, Tabs } from "@mantine/core"
import {IconMapPin } from "@tabler/icons-react"
import { useState } from "react";
import AboutComp from "./AboutComp";
import CompanyJobs from "./CompanyJobs";
import CompanyEmployees from "./CompanyEmployees";

const Company = () => {
    const [activeTab, setActiveTab] = useState<string | null>('about');

  return (
    <div className="w-3/4 mt-4">
         <div className='relative'>
            <img src="/Profile/banner.jpg" alt="banner" className='rounded-t-xl'/>
            <img src="/Google.png" alt="" className='rounded-2xl bg-mine-shaft-950 h-32 w-32 absolute p-2 -bottom-1/4 left-5 mx-4 border-[6px] border-mine-shaft-900'/>
        </div>
        <div className='mt-16 px-8'>
            <div className='font-semibold text-2xl'>Google</div>
           
            <div className='flex gap-2 mt-2'>
                <IconMapPin/>
              New York, United State
            </div>
            <div className='mt-4 '>
            <Avatar.Group>
      <Avatar src="avatar.png" />
      <Avatar src="avatar1.png" />
      <Avatar src="avatar2.png" />
      <Avatar>+10k</Avatar>
    </Avatar.Group>
    </div>
        </div>
        <Divider  size="xs" /> 
        <div className="mt-8">
        <Tabs value={activeTab} onChange={setActiveTab} variant="outline" radius="lg" defaultValue="gallery">
      <Tabs.List className=" [&_button]:!text-xl [&_button]:font-semibold [&_button[data-active='true']]:text-bright-sun-400">
        <Tabs.Tab value="about">About </Tabs.Tab>
        <Tabs.Tab value="jobs">Jobs </Tabs.Tab>
        <Tabs.Tab value="employees">Employees </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="about"><AboutComp/></Tabs.Panel>
      <Tabs.Panel value="jobs"><CompanyJobs/></Tabs.Panel>
      <Tabs.Panel value="employees"><CompanyEmployees/></Tabs.Panel>
    </Tabs>
        </div>
    </div>
  )
}

export default Company