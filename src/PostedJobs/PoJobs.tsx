import { Tabs } from "@mantine/core"
import { activeJobs } from "../Data/PostedJob"
import PostedJobCard from "./PostedJobCard"
const PoDraft = () => {
  return (
    <div className="mt-5 w-1/6">
        <div className="font-semibold text-2xl ">Jobs</div>
        <Tabs variant="pills" autoContrast radius="lg" defaultValue="ACTIVE" >
      <Tabs.List className=" [&_button[aria-selected='false']]:bg-mine-shaft-900">
        <Tabs.Tab value="Active">Active [4] </Tabs.Tab>
        <Tabs.Tab value="Draft">Draft [1]</Tabs.Tab>
        
      </Tabs.List>
      <Tabs.Panel value="Active">
        <div className="flex flex-col gap-5 mt-5">
            {
                activeJobs.map((item,index)=><PostedJobCard key={index} {...item}/>)
            }
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="Draft">s</Tabs.Panel>
    </Tabs>
    </div>
   
  )
}

export default PoDraft