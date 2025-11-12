 import React from 'react'
 import './card.css'
 
 function Card() {
   return (
      <div className="id-card">
      {/* Header */}
      <div className="id-card-header top-dark"></div><br />

      <div className="id-card-header top-light"></div>

      {/* Content */}
      <div className="id-card-content">
        {/* Profile image */}
        <div className="profile-pic">👤</div>

        {/* Details */}
        <div className="details">
          <h2 className="title">ID CARD</h2>

          <p><strong>ID:</strong> 12345678912345678</p>
          <p><strong>Name:</strong> NAME SURNAME</p>
          <p>
            <strong>Address:</strong><br />
            123 ANYWHERE STREET<br />
            CITY, 12345-875.
          </p>
          <p><strong>Phone:</strong> +5581487898</p>

          {/* Footer */}
          <div className="footer">
            <div className="barcode"></div>
            <div className="exp-date">
              <strong>Expedition Date:</strong><br />
              00/00/00
            </div>
          </div>
        </div>
      </div>
    </div>
   )
 }

 export default Card