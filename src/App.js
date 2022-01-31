import logo from './logo.svg';
import './App.css';
import { Box, Container, Grid, Typography } from '@mui/material';
import img from '../src/images/my.jpg'
import '../src/Style/Style.css'
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Container>
            <img src={img} style={{ width: '100%', height: 'auto' }} alt="my-img" />
            {/* my details */}
            <Box className='sector'>
              <Typography variant='h4' className='head'>
                Muhammad Moyenul Islam
              </Typography>
              <Box sx={{ display: 'flex' }} className='text'>
                <span style={{ fontSize: '20px' }}><i class="fas fa-laptop-code"></i></span>
                <Typography variant='h5'>
                  Full stack Web Developer
                </Typography>
              </Box>
              <Box sx={{ display: 'flex' }} className='text'>
                <span style={{ fontSize: '20px' }}><i class="fas fa-home"></i></span>
                <Typography variant='h5'>
                  Raiganj,Sirajganj,Bangladesh
                </Typography>
              </Box>
              <Box sx={{ display: 'flex' }} className='text'>
                <span style={{ fontSize: '20px' }}><i class="fas fa-envelope"></i></span>
                <Typography variant='h5'>
                  moyenislam75@gmail.com
                </Typography>
              </Box>
            </Box>
            {/* my skills */}
            <Box className='sector'>
              <h1 className='head underline'>
                <i class="fas fa-suitcase"></i>  Skills
              </h1>
              <Box sx={{ marginTop: '10px' }}>
                <Skills />
              </Box>
            </Box>
            {/* languages */}
            <Box className='sector'>
              <h1 className='head underline'>
                <i class="fas fa-language"></i>  Languages
              </h1>
              <Box sx={{ display: 'flex' }}>
                <Typography variant='h6' className='language'>
                  Bengali
                </Typography>
                <Typography variant='h6' className='language-type'>
                  -Native
                </Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Typography variant='h6' className='language'>
                  Arabic
                </Typography>
                <Typography variant='h6' className='language-type'>
                  -Familiar
                </Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Typography variant='h6' className='language'>
                  English
                </Typography>
                <Typography variant='h6' className='language-type'>
                  -Familiar
                </Typography>
              </Box>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
