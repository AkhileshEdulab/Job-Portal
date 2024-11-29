import { Button,  Divider, FileInput, LoadingOverlay, Notification, NumberInput, rem, Textarea, TextInput } from '@mantine/core'
import { IconCheck, IconPaperclip } from '@tabler/icons-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const ApplyJobCard = () => {
    const [preview,setPreview] = useState(false);
    const [submit,setSubmit] = useState(false);
    const [sec,setSec] = useState(5);
    const Navigate = useNavigate();
    const handlePreview = ()=>{
        setPreview(!preview);
        window.scrollTo({top:0,behavior:'smooth'})
    }
    const handleSubmit = ()=>{
        setSubmit(!submit);
        let x=5;
        setInterval(()=>{
            x--;
            setSec(x);
            if(x==0)Navigate('/find-job')
        },1000)
    }
  return (<>
    <div className='w-2/3 mx-auto'>
    <LoadingOverlay className='!fixed'
          visible={submit}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'bright-sun.4', type: 'bars' }}
        />
         <div className="flex justify-between">
        <div className="flex gap-2 items-center"> 
            <div className='p-3 bg-mine-shaft-800 rounded-md'>
            <img src={`/Icons/Google.png`} alt="apple" className="w-8 h-8"/>
            </div>
            <div className='flex flex-col gap-1'>
        <div className="font-semibold text-mine-shaft-100 text-2xl">Software Engineer III</div>
        <div className="text-mine-shaft-300">Google &#9679; applicants Applicants</div>
        </div>
             </div>
        </div>
        <Divider my='xl'/>
        <div className='text-xl font-semibold '>Submit Your Application</div>
        <div className='flex flex-col gap-6 mt-4'>
            <div className='flex gap-10 [&>*]:w-1/2'>
                <TextInput readOnly={preview} variant={preview?'unstyled':'default'} className={`${preview? "text-mine-shaft-300 font-semibold":""}`} label="Full Name"withAsterisk placeholder='Enter name'/>
                <TextInput readOnly={preview} variant={preview?'unstyled':'default'} className={`${preview? "text-mine-shaft-300 font-semibold":""}`} label="Email I'D"withAsterisk placeholder='Enter Email'/>
             </div>

             <div className='flex gap-10 [&>*]:w-1/2'>
             <NumberInput readOnly={preview} variant={preview?'unstyled':'default'} className={`${preview? "text-mine-shaft-300 font-semibold":""}`} label="Phone Number" hideControls min={0} max={9999999999} clampBehavior="strict" withAsterisk placeholder="Enter your 10-digit phone number"/>
                <TextInput readOnly={preview} variant={preview?'unstyled':'default'} className={`${preview? "text-mine-shaft-300 font-semibold":""}`} label="Personal Website"withAsterisk placeholder='Enter Url'/>
             </div>
             <FileInput readOnly={preview} variant={preview?'unstyled':'default'} className={`${preview? "text-mine-shaft-300 font-semibold":""}`} leftSection={<IconPaperclip/>} label="Attach your CV"withAsterisk placeholder='Your CV'/>
             <Textarea readOnly={preview} variant={preview?'unstyled':'default'} className={`${preview? "text-mine-shaft-300 font-semibold":""}`} withAsterisk label="Cover Letter" placeholder="Enter Your Opinions" autosize minRows={2} maxRows={4}/>
             { 
          !preview && (<Button   onClick={handlePreview}   variant="outline"   color="bright-sun.4"   className="text-center">  Preview</Button>)
            }
{
  preview && (<div className="flex gap-10 [&>*]:w-1/2">  <Button     fullWidth     onClick={handlePreview}     variant="outline"     color="bright-sun.4"     className="text-center"  >    Edit  </Button>
      <Button fullWidth onClick={handleSubmit} variant="outline" color="bright-sun.4" className="text-center">  Submit</Button>
    </div>
  )
}

<Notification  className={`!border-bright-sun-400 z-[1001] !fixed top-0 left-[35%] transition duration-300 ease-in-out ${submit?"translate-y-0":'-translate-y-20'}`} icon={ <IconCheck style={{ width: rem(20), height: rem(20) }} />} color="bright-sun.4" title="Application Submitted!" mt="md"withCloseButton={false}>
        Redirecting to find jobs in {sec} seconds
      </Notification>
        </div>
    </div>
    </>
  )
}

export default ApplyJobCard

