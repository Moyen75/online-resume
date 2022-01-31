import { Box } from '@mui/system';
import React from 'react';
import { HashLink } from 'react-router-hash-link'
import Hamburger from '../Hamburger/Hamburger';


const Home = () => {

    return (
        <Box className='sector'>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                    <HashLink to='/home#experience'></HashLink>
                </Box>
                <Hamburger />
            </Box>
        </Box>
    );
};

export default Home;