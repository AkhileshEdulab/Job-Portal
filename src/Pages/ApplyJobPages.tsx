import { Button } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import ApplyJobCard from "../ApplyJob/ApplyJobCard"


const ApplyJobPages = () => {
  return (
   <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4 ">
    <Link to='/jobs'className="my-5 inline-block ">
    <Button color="bright-sun.4" leftSection={<IconArrowLeft size={20}/>} variant="light">Back</Button>
    </Link>
    <ApplyJobCard/>
   </div>
  )
}

export default ApplyJobPages