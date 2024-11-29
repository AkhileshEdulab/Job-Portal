import React from 'react'
import { talents } from '../Data/TalentData'
import TalentCard from '../FindTalent/TalentCard'

const CompanyEmployees = () => {
  return (
    <div>
        <div className='flex flex-wrap mt-10 gap-5 w-full'>
        {
            talents.map((Talent,index) => <TalentCard key={index} {...Talent}/>)
        }
      </div>
    </div>
  )
}

export default CompanyEmployees