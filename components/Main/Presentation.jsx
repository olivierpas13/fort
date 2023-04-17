import Image from 'next/image';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Button from '@mui/material/Button';

import { mainTheme } from 'generalStyledComponents/Pallete';

const Presentation = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Box
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center 5%'
        }}
        sx={{
          flex: 1,
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundImage: `url(${'/bg1.webp'})`,
          gap: 2,
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            color: '#ffff',
            fontWeight: 600,
            fontSize: 'sm',
            textTransform: 'uppercase',
            letterSpacing: 0.5,
          }}
        >
          Bug Tracking Software
        </Box>
        <div
          style={{
            display: 'block',
            position: 'relative',
            width: '30em',
            height: '10em',
            marginRight: '1em',
          }}
        >
          <Image
            layout="fill"
            src="/fort-logo-white.svg"
            quality={100}
            alt="Fort Logo"
          />
        </div>
        <Typography
          sx={{
            fontSize: 'lg',
            color: '#ffff',
            maxWidth: '54ch',
          }}
        >
          Don&apos;t let errors control you, control them with Fort
        </Typography>
        <Button
          style={{ marginTop: '2em', padding: '1em', fontSize: '1.2em' }}
          variant="contained"
        >
          Get Started
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default Presentation;
