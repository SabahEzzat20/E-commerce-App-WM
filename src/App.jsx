import Box from '@mui/material/Box';
import {Footer} from "./Components/Footer/Footer";
import './App.css';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
export const App = () => {
  return (
    <Box sx={{width: '100%'}}>
      <Box sx={{width: '100%', backgroundColor: 'black', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',position: 'relative',width: '85%',padding: '0.7em'}}>
          <Stack direction='row' spacing={1.5}>
            <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            <Link style={{color: 'white'}}>ShopNow</Link>
          </Stack>
          <Stack direction='row' spacing={1} sx={{padding: '1em',position: 'absolute',right: '2px'}}>
            <p>English</p>
            <div>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </Stack>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

