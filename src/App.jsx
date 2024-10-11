import Box from '@mui/material/Box';
import {Footer} from "./Components/Footer/Footer";
import './App.css';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Header from './Components/Header/Header';
export const App = () => {
  return (
    <Box sx={{width: '100%'}}>
      <Box sx={{width: '100%', backgroundColor: 'black', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',fontSize: {xs: '10px',sm: '12px',md: '13px',lg: '13px',xl: '13px'}}}>
        <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center',width: '85%',padding: '0.1em'}}>
          <Stack direction={{xs: 'column',sm:'row',md: 'row'}} spacing={1.5}>
            <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            <Link style={{color: 'white'}}>ShopNow</Link>
          </Stack>
          <Stack direction='row' spacing={1} sx={{padding: '1em',float: 'right',right: '2px',cursor: 'pointer'}}>
            <p>English</p>
            <div>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </Stack>
        </Box>
      </Box>
      <Header />
      afdsaf
      <Footer />
    </Box>
  );
}

