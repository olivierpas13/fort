import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { GiHamburgerMenu } from 'react-icons/gi';

import { mainTheme } from 'generalStyledComponents/Pallete';
import { BasicButton } from 'generalStyledComponents/Button';
import getInitials from 'utils/getInitials';

const pages = ['Docs', 'Features', 'Sandbox'];
const settings = ['Dashboard', 'Logout'];

const NavBar = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [initials, setInitials] = useState('');

  useEffect(() => {
    if (session?.user) {
      setInitials(getInitials(session?.user?.name));
    }

  }, [session?.user]);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (setting) => {
    console.log(setting);
    if(setting === 'logout'){
      signOut();
      setAnchorElUser(null);
    }
    if(setting === 'dashboard'){
      router.push(`/organizations/${session.user.organization}/dashboard`);
      setAnchorElUser(null);
    }

    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <AppBar position="absolute" color="white">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{ display: { xs: 'none', md: 'flex', marginRight: '2em' } }}
            >
              <Link href="/" passHref>
                <a
                  style={{
                    display: 'block',
                    position: 'relative',
                    width: '200px',
                    height: '60px',
                    marginRight: '1em',
                  }}
                >
                  <Image
                    layout="fill"
                    src="/fort-logo.svg"
                    quality={100}
                    alt="Fort Logo"
                  />
                </a>
              </Link>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="primary"
              >
                <GiHamburgerMenu />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <Link href="/" passHref>
                <a
                  style={{
                    display: 'block',
                    position: 'relative',
                    width: '200px',
                    height: '60px',
                    marginRight: '1em',
                  }}
                >
                  <Image
                    layout="fill"
                    src="/fort-logo.svg"
                    quality={100}
                    alt="Fort Logo"
                  />
                </a>
              </Link>
            </Box>
            <Box
              sx={{ display: { xs: 'none', md: 'flex', marginRight: '2em' } }}
            >
              <Typography
                sx={{
                  mr: 4,
                  color: '#003459',
                  display: 'block',
                  '& a': {
                    padding: '0.7em',
                    borderRadius: '0.7em',
                    textDecoration: 'none',
                    '&:hover': {
                      backgroundColor: '#eee',
                      transition: 'background-color 0.3s',
                    },
                  },
                }}
              >
                <Link href={'/about-us'}>
                  <a>ABOUT US</a>
                </Link>
              </Typography>
              {pages.map((page) => (
                <Typography
                  key={page}
                  sx={{
                    mr: 4,
                    color: '#003459',
                    display: 'block',
                    '& a': {
                      padding: '0.7em',
                      borderRadius: '0.7em',
                      textDecoration: 'none',
                      '&:hover': {
                        backgroundColor: '#eee',
                        transition: 'background-color 0.3s',
                      },
                    },
                  }}
                >
                  <Link href={`/${page.toLowerCase()}`}>
                    <a>{page.toUpperCase()}</a>
                  </Link>
                </Typography>
              ))}
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ flexGrow: 0 }}>
              {session?.user ? (
                <Box style={{ display: 'flex' }} >
                  <Typography sx={{ fontSize: 17, padding: '1em' }} color="secondary" >
                    Logged in
                  </Typography>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar sx={{ bgcolor: 'primary.main' }} variant="rounded">
                        {initials}
                      </Avatar>
                    </IconButton>
                  </Tooltip>
                </Box>
              ) : (
                <Stack
                  direction="row"
                  spacing={1}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '3em',
                  }}
                >
                  <Button color="primary" variant="outlined">
                    Login
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => {
                      router.push('/registration');
                    }}
                  >
                    Create an account
                  </Button>
                </Stack>
              )}
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <Link href={`/organizations/${session?.user?.organization}/dashboard`}>
                  <MenuItem>
                    <a>
                      <Typography sx={{ fontSize: 14 }} color={'primary'}y>

                  DASHBOARD
                      </Typography>
                    </a>
                  </MenuItem>
                </Link>
                <MenuItem>
                  <Button onClick={() => {signOut();}}>
                Logout
                  </Button>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default NavBar;
