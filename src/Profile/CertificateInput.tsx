
import SelectInput from './SelectInput';
import fields from '../Data/Profile';
import { Button, TextInput } from '@mantine/core';
import { useState } from 'react';
import { MonthPickerInput } from '@mantine/dates';

const CertificateInput = (props:any) => {
  const select = fields;
  const [issueDate, setIssueDate] = useState<Date | null>(new Date());
  const [certiId, setCertiId] = useState('')
  return (
    <div className="flex flex-col gap-6 mt-4">
      <div className='text-2xl font-semibold'> Certificate</div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <SelectInput {...select[0]} />
        <SelectInput {...select[1]} />
      </div>
      <SelectInput {...select[2]} />

      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput  withAsterisk  label="StartDate"  placeholder="Enter startDate"  value={issueDate}  onChange={setIssueDate}  /> <TextInput size="md" label="Certificate Id" value={certiId} onChange={(event) =>setCertiId(event.currentTarget.value)} withAsterisk placeholder="Enter Id" />

      </div>
      <div className="flex gap-4">
        <Button variant="outline" color="blue" onClick={() =>props.setEdit(false) } >
          Save
        </Button>
        <Button variant="filled" color="red.6" onClick={() => props.setEdit(false)}  > Cancel</Button>
      </div>
    </div>
  );
};
export default CertificateInput;
  

// import SelectInput from './SelectInput';
// import fields from '../Data/Profile';
// import { Button, TextInput } from '@mantine/core';
// import { useState } from 'react';
// import { MonthPickerInput } from '@mantine/dates';

// const CertificateInput = ({ setEdit }: { setEdit: (value: boolean) => void }) => {
//   const select = fields;

//   const [issueDate, setIssueDate] = useState<Date | null>(new Date());
//   const [certiId, setCertiId] = useState('');

//   return (
//     <div className="flex flex-col gap-6 mt-4">
//       <div className="text-2xl font-semibold">Certificate</div>
      
//       <div className="flex gap-10 [&>*]:w-1/2">
//         <SelectInput {...select[0]} />
//         <SelectInput {...select[1]} />
//       </div>
      
//       <SelectInput {...select[2]} />
      
//       <div className="flex gap-10 [&>*]:w-1/2">
//         <MonthPickerInput
//           withAsterisk
//           label="Issue Date"
//           placeholder="Select issue date"
//           value={issueDate}
//           onChange={setIssueDate}
//         />
//         <TextInput
//           size="md"
//           label="Certificate ID"
//           value={certiId}
//           onChange={(event) => setCertiId(event.currentTarget.value)}
//           withAsterisk
//           placeholder="Enter Certificate ID"
//         />
//       </div>
      
      
//       <div className="flex gap-4">
//         <Button
//           variant="outline"
//           color="blue"
//           onClick={() => {
//             console.log('Save clicked');
//             setEdit(false); 
//           }}
//         >
//           Save
//         </Button>
//         <Button
//           variant="filled"
//           color="red"
//           onClick={() => {
//             console.log('Cancel clicked');
//             setEdit(false); // Exit edit mode
//           }}
//         >
//           Cancel
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default CertificateInput;
