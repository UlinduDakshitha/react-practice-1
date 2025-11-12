 import React from 'react'
 import './card.css'
 import Avatar from '@mui/material/Avatar';
 
 function Card() {
   return (
      <div className="id-card">
      
      <div className="id-card-header top-dark"></div><br/>

      <div className="id-card-header top-light"></div>

     <Avatar src="/broken-image.jpg"  sx={{marginLeft:"20px",marginTop:"20px",borderRadius:"100px",width:"90px",height:"90px"}}/>
    </div>
   )
 }

 export default Card