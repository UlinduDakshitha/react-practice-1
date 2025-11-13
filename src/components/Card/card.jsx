  import React from 'react'
import './card.css'
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Card() {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails( true);
  };

   

  return (
    <div>
      {!showDetails && (<div className="id-card" onClick={handleClick} >
        <div className="overlay"></div>
        <div className="id-card-header top-dark"></div>
        <br />
        <div className="id-card-header top-light"></div>

        <Avatar
          src="/broken-image.jpg"
          sx={{
            marginLeft: "20px",
            marginTop: "20px",
            borderRadius: "100px",
            width: "90px",
            height: "90px",
          }}
        />
        <div className="barcode"></div>

        <h2 className="header2">ID CARD</h2>
        <p className="p1">ID: 123456789123456789</p>
        <br />
        <p className="p2">
          Name: <br /> NAME SURNAME
        </p>
        <br />
        <p className="p3">
          Address: <br /> 123 ANYWERE STREET <br /> CITY,12345-875.
        </p>
        <br />
        <p className="p4">
          Phone: <br /> +5581487898
        </p>
        <p className="p5">
          Expedition Date: <br /> 00/00/00
        </p>
        <div className="footer"></div>
        <div className="hover-layer">
          <p className="hover-text">click me </p>
        </div>
      </div> )}

      {showDetails && 
       (
        <div className="Second">
          <h2 className="header3">NIC DETAILS</h2>
          <TextField
            id="demo-helper-text-misaligned"
            label="Enter Nic no"
            sx={{ width: 280, marginLeft: "10px", borderBlockColor: "green" }}
          />
          <Button
            variant="contained"
            sx={{
              marginLeft: "10px",
              marginTop: 2,
              backgroundColor: "#087d6fff",
              width: 280,
            }}
          >
            Submit
          </Button>
          <br />
          <br />
          <TextField
            id="filled-basic"
            label="Nic no"
            variant="filled"
            sx={{ width: 280, marginLeft: "10px" }}
          />
          <br />
          <br />
          <TextField
            id="filled-basic"
            label="Birthday"
            variant="filled"
            sx={{ width: 280, marginLeft: "10px" }}
          />
          <br />
          <br />
          <TextField
            id="filled-basic"
            label="Gender"
            variant="filled"
            sx={{ width: 280, marginLeft: "10px" }}
          />
        </div>
      )}
    </div>
  );
}

export default Card;


