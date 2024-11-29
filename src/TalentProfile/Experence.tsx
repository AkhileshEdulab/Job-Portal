
const Experience = (props:any) => {
  return (
   <div className='flex flex-col gap-6 mt-4'>
      <div className="flex gap-6">
        <div className="flex p-2 bg-mine-shaft-700 rounded-md"> 
            <img src={`/Icons/${props.company}.png`} alt="apple" className="w-8 h-8"/>
        </div>
        <div>
        <div className="font-semibold text-mine-shaft-100">{props.title}</div>
        <div className="text-mine-shaft-300">{props.company} &#9679; {props.location}</div>
        </div>
        <div className="text-mine-shaft-300 ml-52">{props.startDate}-{props.endDate}</div>
        </div>
        <div className='mb-6'>
            {props.description}
             </div>
   </div>
  );
};


export default Experience;
