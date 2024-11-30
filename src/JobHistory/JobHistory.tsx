import { Tabs } from '@mantine/core'
import { jobList } from '../Data/JobsData'
import Card from './Card'

const JobHistory = () => {
  return (
    <div>
         <div className='text-2xl font-semibold flex -items-center'> Software Engineer</div>
        <Tabs  variant="outline" radius="lg" defaultValue="applied">
      <Tabs.List className=" [&_button]:!text-xl [&_button]:font-semibold [&_button[data-active='true']]:text-bright-sun-400">
        <Tabs.Tab value="applied">Applied </Tabs.Tab>
        <Tabs.Tab value="saved">Saved </Tabs.Tab>
        <Tabs.Tab value="offered">Offered </Tabs.Tab>
        <Tabs.Tab value="interviewing">Interviewing </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="applied">
      <div className='flex flex-wrap mt-10 gap-5 w-full'>
        {
            jobList.map((job,index) => <Card key={index} {...job} applied/>)
        }
      </div>
      </Tabs.Panel>
      <Tabs.Panel value="saved">
      <div className='flex flex-wrap mt-10 gap-5 w-full'>
        {
            jobList.map((job,index) => <Card key={index} {...job} saved/>)
        }
      </div>
      </Tabs.Panel>
      <Tabs.Panel value="offered">
      <div className='flex flex-wrap mt-10 gap-5 w-full'>
        {
            jobList.map((job,index) => <Card key={index} {...job} offered/>)
        }
      </div>
        </Tabs.Panel>
        <Tabs.Panel value="interviewing">
        <div className='flex flex-wrap mt-10 gap-5 w-full'>
        {
            jobList.map((job,index) => <Card key={index} {...job} interviewing/>)
        }
      </div>
      </Tabs.Panel>
    </Tabs>
    </div>
   
  )
}

export default JobHistory;