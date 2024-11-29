import { jobList } from '../Data/JobsData'
import Card from '../FindJobs/Card'

const CompanyJobs = () => {
  return (
    <div>
        <div className='flex flex-wrap mt-10 gap-5 w-full'>
        {
            jobList.map((job,index) => <Card key={index} {...job}/>)
        }
      </div>
    </div>
  )
}

export default CompanyJobs