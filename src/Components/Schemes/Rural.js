import * as React from 'react';
import Box from '@mui/material/Box';
import Style from './Style';

const Agriculture = () => {
  return (
    <div style={{textAlign:'center'}}>
    <Style/>
    <h2>Rural</h2>
    <div style={{ width: '100%' }}>
      <Box
        sx={{
          display: 'inline-flex',
          m: 1,
          p: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        <a style={{textDecoration:'none'}} href='https://kalia.odisha.gov.in/index.html'>{"Information on KALIA (Krushak Assistance for Livelihood and Income Augmentation) Scheme, Odisha"}</a>
        
      </Box><br></br>
      <Box
        sx={{
          display: 'inline-flex',
          m: 1,
          p: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        <a style={{textDecoration:'none'}} href='https://nsap.nic.in/circular.do?method=aboutus'>{"Website of National Social Assistance Programme (NSAP)"}</a>
        
      </Box><br></br>
      <Box
        sx={{
          display: 'inline-flex',
          m: 1,
          p: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        <a style={{textDecoration:'none'}} href='https://grammanchitra.gov.in/'>{"Website of Spatial Planning- Gram Manchitra"}</a>
        
      </Box><br></br>
      <Box
        sx={{
          display: 'inline-flex',
          m: 1,
          p: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        <a style={{textDecoration:'none'}} href='https://panchayataward.gov.in/'>{"Website of National Panchayat Awards"}</a>
        
      </Box><br></br>
      <Box
        sx={{
          display: 'inline-flex',
          m: 1,
          p: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        <a style={{textDecoration:'none'}} href='https://rural.hp.gov.in/?q=mgnrega'>{"Schemes and Programmes by the Rural Development Department of Himachal Pradesh"}</a>
        
      </Box>
    </div>
    </div>
  )
}

export default Agriculture