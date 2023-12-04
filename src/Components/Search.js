import React, { useState } from 'react';
import { Button } from '@mui/material';

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        style={{textAlign:'center',marginLeft:'680px',paddingTop:'10px',paddingBottom:'10px'}}
      />
      <Button variant="contained" color="success" type="submit">Search</Button>
    </form>
  );
}
