import { jobList } from "../Data/JobsData";
import Card from "../FindJobs/Card";

const RecommendedJob = () => {
    return (
        <div >
            <div className='font-semibold text-3xl mb-5 '>Recommend Jobs</div>
            <div className="flex flex-col flex-wrap gap-5 justify-between">
            {jobList.map((job, index) => index < 4 &&<Card key={index} {...job} />
            )}
          </div>
        </div>
      )
  
}

export default RecommendedJob;