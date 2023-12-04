import * as React from 'react';
import Box from '@mui/material/Box';
import Style from './Style';

const Agriculture = () => {
  return (
    <div style={{textAlign:"center"}}>
    <Style/>
    <h2>Housing</h2>
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
        <a style={{textDecoration:'none'}}href='https://www.jansamarth.in/login'>{"PM SVANidhi (PM Street Vendor's AtmaNirbhar Nidhi) Scheme in Business Activity Loan"}</a>
        
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
        <a style={{textDecoration:'none'}} href='https://giawd.odisha.gov.in/'>{"Swadhar Greh Scheme, WCD Odisha Grant-in-Aid Portal, Odisha"}</a>
        
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
        <a style={{textDecoration:'none'}}href='https://nulm.gov.in/PDF/User_Manual/nulm-user-manual-new.pdf'>{"National Urban Livelihoods Mission"}</a>
        
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
        <a style={{textDecoration:'none'}}href='http://arhc.mohua.gov.in/'>{"Affordable Rental Housing Complexes (ARHCs) for Urban Migrants/ Poor"}</a>
        
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
        <a style={{textDecoration:'none'}}href='https://pmaymis.gov.in/'>{"Pradhan Mantri Gramin Awaas Yojana"}</a>
        
      </Box>
    </div>
    </div>
  )
}

export default Agriculture