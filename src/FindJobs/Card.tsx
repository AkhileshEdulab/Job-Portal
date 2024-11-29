import { Divider, Text } from "@mantine/core";
import { IconBookmark, IconClock } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Card = (props:any) => {
  return (
    <Link to={'/jobs'} className="bg-mine-shaft-900 w-[350px] p-4 py-5 rounded-lg flex-col gap-3 shadow-lg shadow-bright-sun-400 hover:scale-105 transition-transform duration-300">
        <div className="flex justify-between">
        <div className="flex p-2 bg-mine-shaft-700 rounded-md"> 
            <img src={`/Icons/${props.company}.png`} alt="apple" className="w-8 h-8"/>
        </div>
        <div>
        <div className="font-semibold text-mine-shaft-100">{props.jobTitle}</div>
        <div className="text-mine-shaft-300">{props.company} &#9679; {props.applicants} Applicants</div>
        </div>
        <div className="text-mine-shaft-300"><IconBookmark/></div>
        </div>
        <div className="flex justify-between mt-4 [&>div]:py-1  [&>div]:px-2  [&>div]:text-bright-sun-400">
            <div className="bg-mine-shaft-700 rounded-md">{props.experience}</div>
            <div className="bg-mine-shaft-700 rounded-md">{props.jobType}</div>
            <div className="bg-mine-shaft-700 rounded-md">{props.location}</div>
        </div>
        <div className="pt-4 !text-xs text-justify">
        <Text lineClamp={3} >{props.description}    </Text>
      <Divider  size="xs" color="bright-sun.4" className="mt-2" />
            </div>
            <div className="flex justify-between mt-3">
                <div className="font-semibold">&#8377;{props.package}</div>
                <div className="flex gap-2 items-center text-mine-shaft-300">
                    <IconClock/>
                    12 days ago
                </div>
            </div>
    </Link>
  )
}

export default Card;


