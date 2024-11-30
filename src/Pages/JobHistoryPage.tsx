import { Divider } from '@mantine/core'
import JobHistory from '../JobHistory/JobHistory'

const JobHistoryPage = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] flex px-4">
            <Divider size={'xs'}/>
        <div className=' gap-5 mt-5'>
        <JobHistory/>
        </div>
        </div>
      )
}

export default JobHistoryPage