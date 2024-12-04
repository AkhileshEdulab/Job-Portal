import { Divider, MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import FindJobs from './Pages/FindJobs';
import About from './Pages/PostedJobPage';
import UploadJobs from './Pages/PostJobPage';
import FindTalent from './Pages/FindTalent';
import TalentProfile from './Pages/TalentProfile';
import JobDescriptionPage from './Pages/JobDescriptionPage';
import ApplyJobPages from './Pages/ApplyJobPages';
import CompanyPage from './Pages/CompanyPage';
import JobHistoryPage from './Pages/JobHistoryPage';
import SignUpPage from './Pages/SignUpPage';
import ProfilePage from './Pages/ProfilePage';
import { Notifications} from '@mantine/notifications';

const theme = createTheme({
  focusRing:"never",
  primaryColor:"bright-sun",
  primaryShade:4,
 colors:{
  'mine-shaft': ['#f6f6f6', '#e7e7e7','#d1d1d1','#b0b0b0','#888888','#6d6d6d','#5d5d5d','#4f4f4f','#454545','#3d3d3d','#2d2d2d',
 ],
    'bright-sun': [' #e9ffe6','#cffdca','#a3fb9b','#69f660','#3deb34','#17d111','#0ca709','#0c7f0d','#106411','#125514','#042f07',
],
 },
 fontFamily:'poppins,sans-sarif',
    
});

function App() {
  return (
    <MantineProvider defaultColorScheme='dark'  theme={theme}>
     <Notifications position="top-center" zIndex={1000}/>
      <BrowserRouter>
      <div className='relative'>
      <Header/>
      <Divider size="xs" />
      <Routes>
      <Route path='/posted-job' element={<About/>}/>
      <Route path='/job-history' element={<JobHistoryPage/>}/>
      <Route path='/company' element={<CompanyPage/>}/>
      <Route path='/talent-profile' element={<TalentProfile/>}/>
      <Route path='/apply-job' element={<ApplyJobPages/>}/>
      <Route path='/find-job' element={<FindJobs/>}/>
      <Route path='/jobs' element={<JobDescriptionPage/>}/>
      <Route path='/post-job' element={<UploadJobs/>}/>
      <Route path='/find-talent' element={<FindTalent/>}/>
      <Route path='/sign-up' element={<SignUpPage/>}/>
      <Route path='/login' element={<SignUpPage/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>

      <Route path='*' element={<Home/>}/>
      </Routes>
      <Footer/>
      </div>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
