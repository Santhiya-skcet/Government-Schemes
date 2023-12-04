import * as React from 'react';
import Box from '@mui/material/Box';
import Style from './Style';

const Agriculture = () => {
  return (

    <div  style={{textAlign:"center"}}>
    <Style/>
    <h2>Commerce</h2>
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
        <a style={{textDecoration:'none'}}href='http://jkindustriescommerce.nic.in/Orders%202021/127%20IND%20OF%202021.pdf'>{"Information on Turnover incentive Scheme 2021,Jammu and Kashmir"}</a>
        
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
        <a style={{textDecoration:'none'}} href='https://dgt.gov.in/Left_Wing_Extremism'>{"Skill Development in 47 District Affected By Left Wing Extremism Program"}</a>
        
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
        <a style={{textDecoration:'none'}}href='https://www.niti.gov.in/women-entrepreneurship-platform-wep'>{"The Women Entrepreneurship Platform (WEP) Program"}</a>
        
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
        <a style={{textDecoration:'none'}}href='https://www.fisme.org.in/export_schemes/DOCS/B-4/SPICES.pdf'>{"Export Development & Promotion of Spices Scheme"}</a>
        
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
        <a style={{textDecoration:'none'}}href='https://dpiit.gov.in/programmes-and-schemes/himalayan-north-eastern/transport-subsidy-scheme'>{"Transport Subsidy Scheme"}</a>
        
      </Box>
    </div>
    </div>
  )
}

export default Agriculture