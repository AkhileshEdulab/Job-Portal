import { Avatar, Button, Divider, Text } from "@mantine/core";
import {  IconCalendarMonth, IconHeart, IconMapPin } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const TalentCard = (props: any) => {
  return (
    <div className="bg-mine-shaft-900 w-[350px] p-6 rounded-lg flex flex-col gap-4 shadow-lg shadow-bright-sun-400 hover:scale-105 transition-transform duration-300">
      <div className="flex justify-between items-center">
        <Avatar
          src={`/${props.image}.png`}
          alt={props.name}
          className="rounded-full bg-mine-shaft-700 p-2"
        />
        <div className="flex flex-col ml-4">
          <div className="font-semibold text-mine-shaft-100">{props.name}</div>
          <div className="text-mine-shaft-300 text-sm">
            {props.role} &bull; {props.company}
          </div>
        </div>
        <IconHeart className="text-mine-shaft-300" />
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {props.topSkills.map((skill: string, index: number) => (
          <div
            key={index}
            className="bg-mine-shaft-700 rounded-md px-3 py-1 text-bright-sun-400 text-xs"
          >
            {skill}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Text size="sm" lineClamp={3} className="text-justify text-mine-shaft-200">
          {props.about}
        </Text>
        <Divider size="xs" color="mine-shaft.6" className="mt-4" />
      </div>
      <div className="flex justify-between items-center">
        <div className="font-semibold text-bright-sun-400 text-xs">
           {props.expectedCtc}
        </div>
        <div className="flex items-center gap-2 text-mine-shaft-300">
          <IconMapPin size={16} />
          <span className="text-xs">{props.location}</span>
        </div>
      </div>

      <Divider size="xs" color="mine-shaft.6" />

      <div className="flex gap-2 w-full justify-between">
  <Link to="/talent-profile">
  <Button
  variant="outline"
  color="bright-sun.4"
  className="shadow-l shadow-bright-sun-400 hover:scale-110 transition-transform duration-300"
>
  Profile
</Button>
  </Link>
  <div>
    {props.posted?<Button rightSection={<IconCalendarMonth className="w-5 h-5"/>} variant="outline" color="bright-sun.4" className="shadow-l shadow-bright-sun-400 hover:scale-110 transition-transform duration-300">Schedule</Button>
    : <Button variant="outline" color="bright-sun.4" className="shadow-l shadow-bright-sun-400 hover:scale-110 transition-transform duration-300">Message</Button>

    }
  </div>
</div>
    </div>
  );
};

export default TalentCard;
