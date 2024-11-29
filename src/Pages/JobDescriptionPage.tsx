import { Button, } from "@mantine/core";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import JobDesc from "../JobDescription/JobDesc";
import RecommendedJob from "../JobDescription/RecommendedJob";


const JobDescriptionPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
    
       <Link to="/find-job" className="my-5 inline-block">
       <Button variant="light" color="bright-sun.4">
         <IconArrowNarrowLeft />
        back
       </Button>
       </Link>
       <div className="flex gap-10 justify-around">
         <JobDesc/>
         <RecommendedJob/>
       </div>
    </div>
  )
}

export default JobDescriptionPage;