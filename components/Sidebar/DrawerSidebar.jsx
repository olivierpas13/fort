import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import { FiMenu } from 'react-icons/fi';

import { mainColor } from '../../generalStyledComponents/Pallete';


const ProfilePictureWithLetters = dynamic(
  () => import('react-lettered-avatar'),
  { ssr: false }
);

const DrawerSidebar = ({ setIsSidebarVisible }) => {
  const router = useRouter();
  const { data: session } = useSession();

  if(session){
    const { user } = session;
    const baseUrl = `/organizations/${user.organization}`;



    const handleOptionClick = (route) => {
      router.replace(`${baseUrl}/${route}`);
    };

    return (
      <Box
        role="presentation"
        onClick={() => {setIsSidebarVisible(false);}}
        onKeyDown={() => {setIsSidebarVisible(false);}}
      >
        <List>
          <ListItem  disablePadding>
            <ListItemButton onClick={() => {handleOptionClick('dashboard');}} >
              <ListItemIcon>
                <ProfilePictureWithLetters
                  name={user.name}
                  backgroundColor = {mainColor}
                  size={40}
                  radius={5}
                />              </ListItemIcon>
              <ListItemText style={{ display: 'flex', flexDirection: 'column' }} >
                <p>{user.organization}</p>
                <p>{user.name}</p>
              </ListItemText>
              <ListItemText>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton onClick={() => {handleOptionClick('dashboard');}} >
              <ListItemIcon>
                <FiMenu />
              </ListItemIcon>
              <ListItemText>
              Dashboard
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem  disablePadding>
            <ListItemButton onClick={() => {handleOptionClick('projects');}} >
              <ListItemIcon>
                <FiMenu />
              </ListItemIcon>
              <ListItemText>
              Projects
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem  disablePadding>
            <ListItemButton onClick={() => {handleOptionClick('issues');}} >
              <ListItemIcon>
                <FiMenu />
              </ListItemIcon>
              <ListItemText>
              Issues
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem  disablePadding>
            <ListItemButton onClick={() => {handleOptionClick('roles');}} >
              <ListItemIcon>
                <FiMenu />
              </ListItemIcon>
              <ListItemText>
              Roles
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    );
  }
};

export default DrawerSidebar;;