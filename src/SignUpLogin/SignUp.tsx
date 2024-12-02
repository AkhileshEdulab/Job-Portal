import {  Anchor, Button, Checkbox,Group,PasswordInput, Radio, rem, TextInput } from '@mantine/core';
import {  IconAt, IconLock,  } from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const forms = {
  name:'',
  email:'',
  password:'',
  confirmPassword:'',
  accountType:'',
}
const SignUp = () => {
  const [value, setValue] = useState('');
  const [data,setData]= useState(forms);
  
  return (
  <div className='w-1/2 px-20  flex flex-col justify-center gap-3'>
    <div className='text-2xl font-semibold'>Create Account</div>
      <TextInput value={data.name} withAsterisk label="Your name" placeholder="Enter Your name" />
      <TextInput value={data.email} withAsterisk label="Your email" placeholder="Your email" leftSection={<IconAt size={16} />} />
      <PasswordInput value={data.password} withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />} label="Password" placeholder="Enter Password" />
      <PasswordInput value={data.confirmPassword} withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />} label="ConformPassword" placeholder="Enter Conform Password" />
      <Radio.Group  value={data.accountType} onChange={setValue} label='Who are You ?' withAsterisk>
      <Group mt="xs">
      <Radio className='p-4 hover:border-2 hover:border-bright-sun-400 rounded-lg' autoContrast value="APPLICANT" label="Applicant" />
     
      <Radio className='p-4 hover:border-2 hover:border-bright-sun-400 rounded-lg' autoContrast value="EMPLOYER" label="Employer" />
      </Group>
    </Radio.Group>
      <Checkbox  autoContrast label={<>I accept {''} <Anchor>term's & condition</Anchor></>}/>
      <Button autoContrast variant="Filled">Sign-up</Button>
      <div className='mx-auto'>Have an account? <Link to={'/login'} className='text-bright-sun-400 hover:underline'>Login</Link></div>
  </div>
  )
}

export default SignUp;


