import { talents } from "../Data/TalentData";
import Short from "../FindJobs/Short";
import TalentCard from "./TalentCard";

const Talent = () => {
  return (
    <div className='mt-5 px-5 py-6'>
      <div className='flex justify-between items-center'>
      <div className='flex text-2xl font-bold'>Talents</div>
      <Short/>
      </div>
      <div className='flex flex-wrap mt-10 gap-5 w-full'>
        {
            talents.map((Talent,index) => <TalentCard key={index} {...Talent}/>)
        }
      </div>
    </div>
  )
}

export default Talent;

