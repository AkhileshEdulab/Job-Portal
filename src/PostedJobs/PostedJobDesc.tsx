import { Badge, Tabs } from '@mantine/core'
import JobDesc from '../JobDescription/JobDesc'
import { talents } from '../Data/TalentData'
import TalentCard from '../FindTalent/TalentCard'

const PostedJobDesc = () => {
  return (
    <div className='mt-5 w-3/4 px-5'>
        <div className='text-2xl font-semibold flex -items-center'> Software Engineer<Badge
      size="sm"
      ml='sm'
      variant="gradient"
      color='bright-sun.4'
      gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
    >
       Badge
    </Badge></div>
    <div className='font-medium text-mine-shaft-300 mb-5 '>New York, United States</div>
    <Tabs  variant="outline" radius="lg" defaultValue="gallery">
      <Tabs.List className=" [&_button]:!text-xl [&_button]:font-semibold [&_button[data-active='true']]:text-bright-sun-400">
        <Tabs.Tab value="overview">Overview </Tabs.Tab>
        <Tabs.Tab value="application">Application </Tabs.Tab>
        <Tabs.Tab value="invited">Invited </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="overview" className='[&>div]:w-full'>
    <JobDesc />
      </Tabs.Panel>
      <Tabs.Panel value="application">
        <div className='flex mt-10 flex-wrap gap-10'>
            {
                talents.map((talent,index)=> index<6 && <TalentCard key={index} {...talent}/>)
            }
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="invited">
        f
      </Tabs.Panel>
    </Tabs>
    </div>
  )
}

export default PostedJobDesc