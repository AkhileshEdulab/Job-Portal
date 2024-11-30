import { Divider } from "@mantine/core"
import SearchBar from "../FindJobs/SearchBar"
import Job from "../FindJobs/Job"


const FindJobs = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] ">
      <Divider  size="xs" mx='md' />
      <SearchBar />
      <Divider  size="xs" mx='md' />
      <Job/>
    </div>
  )
}

export default FindJobs