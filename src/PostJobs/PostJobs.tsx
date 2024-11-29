
import SelectInput from './SelectInput'
import { fields } from '../Data/PostJob'
import { Button, TagsInput } from '@mantine/core';
import TextEditor from './TextEditor';
import { IconArrowNarrowLeft } from '@tabler/icons-react';

const PostJobs = () => {
    const select = fields;
  return (
    <div className='w-4/5 mx-auto'>
     <div className="p-8 font-semibold text-3xl">PostJobs

        <div className='flex gap-10 [&>*]:w-1/2'>
            <SelectInput {...select [0]}/>
            <SelectInput {...select [1]}/>
        </div>
        <div className='flex gap-10 [&>*]:w-1/2'>
            <SelectInput {...select [2]}/>
            <SelectInput {...select [3]}/>
        </div>
        <div className='flex gap-10 [&>*]:w-1/2'>
            <SelectInput {...select [4]}/>
            <SelectInput {...select [5]}/>
        </div>
        <TagsInput withAsterisk
        label=" Skills"
        placeholder="Enter Skills, then blur the field"
        data={['React', 'Angular', 'Svelte']}
        acceptValueOnBlur={false}
        splitChars={[',', ' ', '|']}
        mt="md"
      />
      <div className= "[&_button[data-active='true']]:!text-bright-sun-400 [&_button[data-active='true']]:!bg-bright-sun-400/20">
      <div className='text-sm font-medium mb-4 '>Job Description</div>
      <div className='text-sm font-medium'><TextEditor/></div>
    </div>
    <div className='flex gap-4 mt-4'>
    <Button variant="light" color="bright-sun.4"> 
       Publish Job
       </Button>
       <Button variant="outline" color="bright-sun.4">
        Save as Draft
       </Button>
    </div>
    </div>
    </div>
  )
}

export default PostJobs