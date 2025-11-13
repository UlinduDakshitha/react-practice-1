  import React from 'react'
 import './card.css'
 import Avatar from '@mui/material/Avatar';
 
 
 
 
 function Card() {
   return (
    
      
      <div className="id-card">
     
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
    </div>
  );
 }

 export default Card

