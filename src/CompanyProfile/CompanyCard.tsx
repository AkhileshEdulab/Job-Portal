import { ActionIcon } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";

const CompanyCard = (props: any) => {
  return (
    <div className="bg-mine-shaft-900 rounded-lg p-2 flex justify-between items-center w-full h-full">
     
      <div className="flex items-center gap-4 w-full">
        <img
          src={`/Icons/${props.name}.png`}
          alt={`${props.name} logo`}
          className="h-12 w-12 object-contain bg-mine-shaft-800 rounded-lg p-2"
        />
        <div className="flex flex-col justify-center flex-grow">
          <div className="font-semibold text-mine-shaft-100 text-lg truncate">{props.name}</div>
          <div className="text-mine-shaft-300 text-sm">{props.employees} employees</div>
        </div>
      </div>
      <ActionIcon color="bright-sun.4" variant="subtle" size="lg">
        <IconExternalLink />
      </ActionIcon>
    </div>
  );
};

export default CompanyCard;
