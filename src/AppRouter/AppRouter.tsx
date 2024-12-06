import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Header from "../Header/Header"
import { Divider } from "@mantine/core"
import JobHistoryPage from "../Pages/JobHistoryPage"
import CompanyPage from "../Pages/CompanyPage"
import TalentProfile from "../Pages/TalentProfile"
import ApplyJobPages from "../Pages/ApplyJobPages"
import FindJobs from "../Pages/FindJobs"
import JobDescriptionPage from "../Pages/JobDescriptionPage"
import FindTalent from "../Pages/FindTalent"
import SignUpPage from "../Pages/SignUpPage"
import ProfilePage from "../Pages/ProfilePage"
import Home from "../Pages/Home"
import Footer from "../Footer/Footer"
import PostedJobPage from "../Pages/PostedJobPage"
import PostJobPage from "../Pages/PostJobPage"
import { useSelector } from "react-redux"

const AppRouter = () => {
  const user = useSelector ((state:any) =>state.user)
  return (
    <BrowserRouter>
    <div className='relative'>
    <Header/>
    <Divider size="xs" />
    <Routes>
    <Route path='/posted-job' element={<PostedJobPage/>}/>
    <Route path='/job-history' element={<JobHistoryPage/>}/>
    <Route path='/company' element={<CompanyPage/>}/>
    <Route path='/talent-profile' element={<TalentProfile/>}/>
    <Route path='/apply-job' element={<ApplyJobPages/>}/>
    <Route path='/find-job' element={<FindJobs/>}/>
    <Route path='/jobs' element={<JobDescriptionPage/>}/>
    <Route path='/post-job' element={<PostJobPage/>}/>
    <Route path='/find-talent' element={<FindTalent/>}/>
    <Route path='/sign-up' element={user ? <Navigate to={'/'}/>: <SignUpPage/>}/>
    <Route path='/login' element={user ? <Navigate to={'/'}/>: <SignUpPage/>}/>
    <Route path='/profile' element={<ProfilePage/>}/>

    <Route path='*' element={<Home/>}/>
    </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default AppRouter