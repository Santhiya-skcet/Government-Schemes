import * as React from 'react';
import Box from '@mui/material/Box';
import Style from './Style';

const Agriculture = () => {
  return (
    <div style={{textAlign:"center"}}>
    <Style/>
    <h2>Foreign Affairs</h2>
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
        <a style={{textDecoration:'none'}}href='https://www.mea.gov.in/legal-and-financial-assistance.htm'>{"Information on Scheme for Legal/Financial Assistance to Indian Women Deserted / Divorced By Their NRI Husbands"}</a>
        
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
        <a style={{textDecoration:'none'}} href='https://www.kip.gov.in/'>{"Information on Know India Programme for Young Overseas Indians"}</a>
        
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
        <a style={{textDecoration:'none'}}href='https://www.mea.gov.in/overseas-citizenship-of-india-scheme.htm'>{"Information on Overseas Citizen of India (OCI) Card Scheme"}</a>
        
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
        <a style={{textDecoration:'none'}}href='https://www.mea.gov.in/pbby.htm'>{"Information on Pravasi Bhartiya Bima Yojana (PBBY)"}</a>
        
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
        <a style={{textDecoration:'none'}}href='https://www.mea.gov.in/mgpsy.htm'>{"Information on Mahatma Gandhi Pravasi Suraksha Yojana (MGPSY)"}</a>
        
      </Box>
    </div>
    </div>
  )
}

export default Agriculture