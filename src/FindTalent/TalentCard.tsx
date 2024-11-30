import { Avatar, Button, Divider, Modal, Text } from "@mantine/core";
import { DateInput, TimeInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import {  IconCalendarMonth, IconHeart, IconHeartFilled, IconMapPin } from "@tabler/icons-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const TalentCard = (props: any) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<Date | null>(null);
  const ref = useRef<HTMLInputElement>(null);
  const [isLike, setIsLike]= useState (false)

  const handelLike =()=>{
    setIsLike(!isLike)
  }
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
        <button onClick={handelLike}>
          {isLike ? (
            <IconHeartFilled className="text-red-500" size={20} />
          ) : (
            <IconHeart className="text-mine-shaft-300" size={20} />
          )}
        </button>
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
      {props.invited?<div className="flex gap-1 text-sm items-center">
        <IconCalendarMonth stroke={1.5}/> Inteview : Agust 27,2024 10:00 Am
      </div>:<div className="flex justify-between items-center">
        <div className="font-semibold text-bright-sun-400 text-xs">
           {props.expectedCtc}
        </div>
        <div className="flex items-center gap-2 text-mine-shaft-300">
          <IconMapPin size={16} />
          <span className="text-xs">{props.location}</span>
        </div>
      </div>
      
      }
      
      <Divider size="xs" color="mine-shaft.6" />

<div className="flex gap-2 w-full justify-between">
  {!props.invited && (
    <>
      <Link to="/talent-profile">
        <Button
          variant="outline"
          color="bright-sun.4"
          className="shadow-l shadow-bright-sun-400 hover:scale-110 transition-transform duration-300"
        >
          Profile
        </Button>
      </Link>
      
      <div className="flex justify-between">
        {props.posted ? (
          <Button
            onClick={open}
            rightSection={<IconCalendarMonth className="w-5 h-5" />}
            variant="outline"
            color="bright-sun.4"
            className="shadow-l shadow-bright-sun-400 hover:scale-110 transition-transform duration-300"
          >
            Schedule
          </Button>
        ) : (
          <Button
            variant="outline"
            color="bright-sun.4"
            className="shadow-l shadow-bright-sun-400 hover:scale-110 transition-transform duration-300"
          >
            Message
          </Button>
        )}
      </div>
    </>
  )}

  {props.invited && (
    <div className="flex gap-32">
      <Button
        variant="outline"
        color="bright-sun.4"
        className="shadow-l shadow-bright-sun-400 hover:scale-110 transition-transform duration-300"
      >
        Accept
      </Button>
      <Button
        variant="outline"
        color="bright-sun.4"
        className="shadow-l shadow-bright-sun-400 hover:scale-110 transition-transform duration-300"
      >
        Reject
      </Button>
    </div>
  )}
</div>




<Modal opened={opened} onClose={close} title="Schedule Interview" centered>
        <div>
        <DateInput
      value={value}
      onChange={setValue}
      label="Date "
      minDate={new Date()}
      placeholder="Enter Date"
    />
       <div className="flex flex-col gap-6">
       <TimeInput label="Time" ref={ref} onClick={()=> ref.current?.showPicker()}placeholder="Enter Time" />
        <Button variant="outline" color="bright-sun.4" className="shadow-sm shadow-bright-sun-400 ">Shedule</Button>

       </div>
        </div>
      </Modal>

    </div>
  );
};

export default TalentCard;
