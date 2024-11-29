
import { jobList } from '../Data/JobsData';
import Card from './Card';
import Short from './Short';

const Job = () => {
  return (
    <div className='mt-5 px-5 py-6'>
      <div className='flex justify-between items-center'>
      <div className='flex text-2xl font-bold'>Recommanded Jobs</div>
      <Short/>
      </div>
      <div className='flex flex-wrap mt-10 gap-5 w-full'>
        {
            jobList.map((job,index) => <Card key={index} {...job}/>)
        }
      </div>
    </div>
  )
}

export default Job;

