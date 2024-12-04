
import { IconAnchor, IconArrowLeft } from "@tabler/icons-react";
import SignUp from "../SignUpLogin/SignUp";
import Login from "../SignUpLogin/Login";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";

const SignUpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="min-h-[90vh] font-[Poppins] flex overflow-hidden">
      <Button size="sm" className="!absolute left-5 z-10" onClick={()=>navigate('/')} my="lg" color="bright-sun.8" leftSection={<IconArrowLeft size={20}/>}>Home</Button>
      <div className={`w-[100vw] h-[100vh] transition-all  ease-in-out duration-1000 flex [&>*]:flex-shrink-0 ${location.pathname=='/sign-up'?'-translate-x-1/2':'translate-x-0'}`}>
        <Login/>
        <div className={`w-1/2 h-full bg-mine-shaft-900 transtion-all duration-1000 ease-in-out ${location.pathname=='/sign-up'?'rounded-r-[200px]':'rounded-l-[200px]'} flex items-center justify-center flex-col gap-2`}>
          <div className="flex gap-2 items-center">
            <IconAnchor  stroke={2.5} className='text-bright-sun h-16 w-16'/>
            <div className="text-6xl text-bright-sun-300 font-bold">Job Hook</div>
        </div>
        <div className="text-2xl text-mine-shaft-200 font-semibold">Find the made for you</div>
        </div>
        <SignUp/>
      </div>
      </div>
  );
};

export default SignUpPage;




