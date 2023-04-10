import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import { FiMenu } from 'react-icons/fi';
import Avatar from '@mui/material/Avatar';

import getInitials from 'utils/getInitials';
import { mainColor } from 'generalStyledComponents/Pallete';

const DrawerSidebar = ({ setIsSidebarVisible }) => {
  const router = useRouter();
  const { data: session } = useSession();

  if(session){
    const { user } = session;
    const baseUrl = `/organizations/${user.organization}`;

    const handleOptionClick = (route) => {
      router.replace(`${baseUrl}/${route}`);
    };

    const userName= getInitials(user?.name);

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
                <Avatar
                  sx={{ bgcolor: mainColor }}
                  variant="rounded"
                >
                  {userName}
                </Avatar>
              </ListItemIcon>
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