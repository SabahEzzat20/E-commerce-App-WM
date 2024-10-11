import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faShoppingCart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <Stack direction='row' justifyContent='space-between' alignItems='center'  sx={{width: '85%'}}>
                <h1>Exclusive</h1>
                <Stack direction='row' spacing={4} className='navLinks'>
                    <Link>Home</Link>
                    <Link>Contact</Link>
                    <Link>About</Link>
                    <Link>Sign Up</Link>
                </Stack>
                <Stack direction='row' spacing={3} justifyContent='center' alignItems='center'>
                    <Stack direction='row' className='search-input'>
                        <input type="text" placeholder='What are you looking for?'/>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Stack>
                    <Stack direction='row' spacing={3} >
                        <Badge badgeContent={4} color="primary" sx={{
                            '& .MuiBadge-badge': {
                                fontSize: '0.7rem',
                                height: '15px',
                                minWidth: '15px',
                                padding: '4px',
                                margin: '-2px'
                            },
                        }}  >
                            <FontAwesomeIcon icon={faHeart} />
                        </Badge>
                        <Badge badgeContent={4} color="primary" sx={{
                            '& .MuiBadge-badge': {
                                fontSize: '0.7rem',
                                height: '15px',
                                minWidth: '15px',
                                padding: '4px',
                                margin: '-2px'
                            },
                        }}  >
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </Badge>
                        <FontAwesomeIcon icon={faUser} />
                    </Stack>
                </Stack>
            </Stack>
        </header>
    );
};

export default Header;