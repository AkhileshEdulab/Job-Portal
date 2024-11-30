import { Tabs } from "@mantine/core"
import { activeJobs, drafts } from "../Data/PostedJob"
import PostedJobCard from "./PostedJobCard"
import { IconBriefcase } from "@tabler/icons-react"
const PoDraft = () => {
  return (
    <div className="mt-5 w-1/6 ">
        <div className="font-semibold text-3xl mb-14 underline flex gap-6 items-center">Jobs <IconBriefcase  className="bg-mine-shaft-800 p-3 h-12 w-12 rounded-full text-bright-sun-400"/></div>
        <Tabs variant="pills" autoContrast radius="lg" defaultValue="active" >
      <Tabs.List className=" [&_button[aria-selected='false']]:bg-mine-shaft-900">
        <Tabs.Tab value="active" defaultValue={'active'}>Active [4] </Tabs.Tab>
        <Tabs.Tab value="Draft">Draft [1]</Tabs.Tab>
        
      </Tabs.List>
      <Tabs.Panel value="active">
        <div className="flex flex-col gap-5 mt-5 ">
            {
                activeJobs.map((item,index)=>index < 12 && <PostedJobCard key={index} {...item}/>)
            }
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="Draft">
      <div className="flex flex-col gap-5 mt-5">
            {
                drafts.map((item,index)=>index < 12 && <PostedJobCard key={index} {...item}/>)
            }
        </div>
      </Tabs.Panel>
    </Tabs>
    </div>
   
  )
}

export default PoDraft

