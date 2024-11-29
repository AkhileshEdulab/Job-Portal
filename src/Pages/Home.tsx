
import Companies from "../LandingPage/Companies"
import JobCatagory from "../LandingPage/JobCatagory"
import LandingPage from "../LandingPage/LandingPage"
import Subscribe from "../LandingPage/Subscribe";
import Testimonial from "../LandingPage/Testimonial";
import Working from "../LandingPage/Working"



const Home = () => {
  return (
   <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
    
    <LandingPage/>
    <Companies/>
    <JobCatagory/>
    <Working/>
    <Testimonial/>
    <Subscribe/>
   
   </div>
  )
}

export default Home
