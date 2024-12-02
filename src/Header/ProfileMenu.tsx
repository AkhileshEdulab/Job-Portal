import { Menu, rem, Avatar, Switch } from '@mantine/core';
import {IconMessageCircle,IconLogout,IconUserCircle,IconSun,IconMoon, IconFileText,
} from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileMenu =() =>{   
    const [checked, setChecked] = useState(false);
    const [opened, setOpened] = useState(false);

  return (
    <Menu opened={opened} onChange={setOpened} shadow="md" width={200}>
      <Menu.Target>
      <div className="flex items-center gap-3">
        <span className='text-bright-sun-400 font-semibold text-xl'>Akhilesh</span>
        <Avatar src="avatar.png" alt="it's me" />
        </div>
      </Menu.Target>

      <Menu.Dropdown onChange={()=>setOpened (true)}>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item leftSection={<IconUserCircle style={{ width: rem(14), height: rem(14) }} />}>
        <Link to={'/profile'}>
        Profile
        </Link>
        </Menu.Item>
        <Menu.Item leftSection={<IconMessageCircle style={{ width: rem(14), height: rem(14) }} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<IconFileText style={{ width: rem(14), height: rem(14) }} />}>
          Resume
        </Menu.Item>
        <Menu.Item 
         leftSection={<IconMoon/>}
      rightSection={
        <Switch  checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}  color="dark.4" onLabel={
        <IconSun style={{ width: rem(16), height: rem(16) }}stroke={2.5}color='red'/>} offLabel={
        <IconMoon style={{ width: rem(16), height: rem(16) }} stroke={2.5}color='yellow'/>} />}>
       Darkmode
        </Menu.Item>
        <Menu.Divider />
        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item
          color="red"
          leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />}
        >
         Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default ProfileMenu;