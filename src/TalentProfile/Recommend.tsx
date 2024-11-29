import {  talents } from "../Data/TalentData"
import TalentCard from "../FindTalent/TalentCard"



const Recommend = () => {
  return (
    <div >
        <div className='font-semibold text-3xl mb-5 '>Recommend Talents</div>
        <div className="flex flex-col flex-wrap gap-5 ">
        {talents.map((Talents, index) =>  index < 4 &&
          <TalentCard   key={index} {...Talents} />
        )}
      </div>
    </div>
  )
}

export default Recommend