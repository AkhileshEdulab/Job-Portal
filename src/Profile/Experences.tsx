
import { Button } from '@mantine/core';
import { useState } from 'react';
import ExperenceInput from './ExperenceInput';

const Experiences = (props: any) => {
  const [edit, setEdit] = useState(false);

  return (
    <div>
      {!edit ? (
        <div className="flex flex-col gap-6 mt-4">
          <div className="flex gap-6">
            <div className="flex p-2 bg-mine-shaft-700 rounded-md">
              <img
                src={`/Icons/${props.company}.png`}
                onError={(e) => (e.currentTarget.src = '/Icons/default.png')}
                alt={props.company}
                className="w-8 h-8"
              />
            </div>
            <div>
              <div className="font-semibold text-mine-shaft-100">{props.title}</div>
              <div className="text-mine-shaft-300">
                {props.company} &#9679; {props.location}
              </div>
            </div>
            <div className="text-mine-shaft-300 ml-auto">
              {props.startDate} - {props.endDate}
            </div>
          </div>
          <div className="mb-6">{props.description}</div>
          {props.edit && (
            <div className="flex gap-6">
              <Button
                variant="outline"
                color="blue"
                onClick={() => setEdit(true)}
              >
                Edit
              </Button>
              <Button
                variant="filled"
                color="red.6"
                onClick={() => console.log('Delete clicked')}
              >
                Delete
              </Button>
            </div>
          )}
        </div>
      ) : (
        <ExperenceInput setEdit={setEdit} />
      )}
    </div>
  );
};

export default Experiences;
