import { Divider } from "@mantine/core"
import Profiles from "../Profile/Profiles"
import { profile } from "../Data/TalentData"

const ProfilePage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
      <Divider mx={'md'} mb={'xl'}/>
      <Profiles {...profile}/>
      
     </div>
  )
}

export default ProfilePage