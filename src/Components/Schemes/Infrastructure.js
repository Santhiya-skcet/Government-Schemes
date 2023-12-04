import * as React from 'react';
import Box from '@mui/material/Box';
import Style from './Style';

const Agriculture = () => {
  return (
    <div style={{textAlign:'center'}}>
    <Style/>
    <h2>Infrastructure</h2>
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
        <a style={{textDecoration:'none'}} href='https://www.niti.gov.in/speeding-gati-shakti'>{"PM Gati Shakti"}</a>
        
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
        <a style={{textDecoration:'none'}} href='http://smartcities.gov.in/'>{"Smart Cities Mission Portal by Ministry of Urban Development"}</a>
        
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
        <a style={{textDecoration:'none'}} href='https://mohua.gov.in/upload/uploadfiles/files/AMRUT-Operational-Guidelines.pdf'>{"Atal Mission for Rejuvenation and Urban Transformation (AMRUT)"}</a>
        
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
        <a style={{textDecoration:'none'}} href='http://mohua.gov.in/cms/lumpsum-provision-scheme-for-the-benefit-of-ner-including-sikkim.php'>{"Lumpsum Provision for the Benefit of North Eastern Region including Sikkim"}</a>
        
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
        <a style={{textDecoration:'none'}} href='http://mohua.gov.in/cms/local-self-goverments.php'>{"National Urban Information System Scheme"}</a>
        
      </Box>
    </div>
    </div>
  )
}

export default Agriculture