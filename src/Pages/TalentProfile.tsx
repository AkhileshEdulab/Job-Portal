import { Button, } from "@mantine/core";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Profile from "../TalentProfile/Profile";
import { profile, } from "../Data/TalentData";
import Recommend from "../TalentProfile/Recommend";
const TalentProfile = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
    
       <Link to="/find-talent" className="my-5 inline-block">
       <Button variant="light" color="bright-sun.4">
         <IconArrowNarrowLeft />
        back
       </Button>
       </Link>
       <div className="flex gap-10">
          <Profile {...profile}/>
          <Recommend/>
       </div>
    </div>
  )
}

export default TalentProfile;