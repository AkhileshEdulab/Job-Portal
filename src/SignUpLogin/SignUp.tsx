import {  Anchor, Button, Checkbox,PasswordInput, rem, TextInput } from '@mantine/core';
import {  IconAt, IconLock,  } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
  <div className='w-1/2 px-20  flex flex-col justify-center gap-3'>
    <div className='text-2xl font-semibold'>Create Account</div>
      <TextInput withAsterisk label="Your name" placeholder="Enter Your name" />
      <TextInput  withAsterisk label="Your email" placeholder="Your email" leftSection={<IconAt size={16} />} />
      <PasswordInput  withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />} label="Password" placeholder="Enter Password" />
      <PasswordInput  withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />} label="ConformPassword" placeholder="Enter Conform Password" />
      <Checkbox  autoContrast label={<>I accept {''} <Anchor>term's & condition</Anchor></>}/>
      <Button autoContrast variant="Filled">Sign-up</Button>
      <div className='mx-auto'>Have an account? <Link to={'/login'} className='text-bright-sun-400 hover:underline'>Login</Link></div>
  </div>
  )
}

export default SignUp;



