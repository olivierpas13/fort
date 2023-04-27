import Navbar from '../components/Navbar/Navbar';
import { Box } from '@mui/material';

const Landing = ({ children }) => {
  return (
    <Box style={{ display: 'flex', flexDirection: 'column' }}>
      <Box>
        <Navbar/>
      </Box>
      <Box style={{ marginTop: '50px' }}>
        <main>
          {children}
        </main>
      </Box>
    </Box>
  );
};

export default Landing;