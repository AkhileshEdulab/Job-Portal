
import { Button, } from "@mantine/core";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import {  useNavigate } from "react-router-dom";
import Company from "../CompanyProfile/Company";
import SimilarCompanies from "../CompanyProfile/SimilarCompanies";
const CompanyPage = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
    
       <Button variant="light" color="bright-sun.4" onClick={()=>navigate(-1)}><IconArrowNarrowLeft />Back</Button>
     
       <div className="flex gap-10 justify-between">
         <Company/>
         <SimilarCompanies/>
       </div>
    </div>
  )
}

export default CompanyPage;
