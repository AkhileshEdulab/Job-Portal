import { Divider } from '@mantine/core';
import SearchBar from '../FindTalent/SearchBar';
import Talent from '../FindTalent/Talents';


const FindTalent = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
       <Divider  size="xs" mx='md' />
       <SearchBar/>
       <Divider  size="xs" mx='md' />
       <Talent/>
    </div>
  )
}

export default FindTalent;