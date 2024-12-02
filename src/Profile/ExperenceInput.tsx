
import SelectInput from './SelectInput';
import fields from '../Data/Profile';
import { Button, Checkbox, Textarea } from '@mantine/core';
import { useState } from 'react';
import { MonthPickerInput } from '@mantine/dates';

const ExperenceInput = ({ setEdit, add }: any) => {
  const select = fields;

  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [checked, setChecked] = useState(false);
  const [desc, setDesc] = useState(
    "As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process."
  );

  return (
    <div className="flex flex-col gap-6 mt-4">
      <div className='text-2xl font-semibold'>{add ?"Add Experience":"Edit Experience"}</div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <SelectInput {...select[0]} />
        <SelectInput {...select[1]} />
      </div>
      <SelectInput {...select[2]} />

      <Textarea
        size="md"
        autosize
        label="Summary"
        minRows={2}
        value={desc}
        onChange={(event) => setDesc(event.currentTarget.value)}
        withAsterisk
        placeholder="Enter Summary"
      />

      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
          withAsterisk
          maxDate={endDate || undefined}
          label="StartDate"
          placeholder="Enter startDate"
          value={startDate}
          onChange={setStartDate}
        />
        <MonthPickerInput
          withAsterisk
          minDate={startDate || undefined}
          label="EndDate"
          placeholder="Enter endDate"
          value={endDate}
          onChange={setEndDate}
        />
      </div>

      <Checkbox
        disabled={checked}
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        autoContrast
        label="Currently working here"
      />
      <div className="flex gap-4">
        <Button
          variant="outline"
          color="blue"
          onClick={() => {
            console.log('Save clicked');
            setEdit(false); 
          }}
        >
          Save
        </Button>
        <Button
          variant="filled"
          color="red.6"
          onClick={() => {
            console.log('Cancel clicked');
            setEdit(false); 
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default ExperenceInput;
