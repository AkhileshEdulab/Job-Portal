
const Certificate = (props:any) => {
  return (
    <div className="flex justify-between mt-6">
        <div className='flex gap-2 items-center'>
        <div className=" p-2 bg-mine-shaft-700 rounded-md"> 
        <img src={`/Icons/${props.issuer}.png`} alt="apple" className="w-8 h-8"/>
    </div>
    <div>
    <div className="font-semibold text-mine-shaft-100">{props.name}</div>
    <div className="text-mine-shaft-300">{props.issuer} &#9679; props.applicants Applicants</div>
    </div>
        </div>
        <div className='flex flex-col items-end'>
        <div className="text-mine-shaft-300">{props.issueDate}</div>
        <div className='mb-6'>{props.certificateId}</div>
        </div>
   </div>
    
  )
}

export default Certificate