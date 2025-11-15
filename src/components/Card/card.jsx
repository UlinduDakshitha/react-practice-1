 import React, { useState } from "react";
import "./card.css";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { getInfoFromNIC } from "lanka-nic";

function Card() {
  const [showDetails, setShowDetails] = useState(false);
  const [nic, setNic] = useState("");
  const [nicResult, setNicResult] = useState(null);
 
  const handleClick = () => {
    setShowDetails(true);
  };

  const handleSubmit = () => {
    try {
      const result = getInfoFromNIC(nic);
      if (!result) {
        alert("Invalid NIC number");
        return;
      }
      setNicResult({
        nic: nic,
        birthday: result.dateOfBirth ? new Date(result.dateOfBirth).toISOString().split("V")[0] : "",
        gender: result.gender || ""
      });
    } catch (error) {
      alert("Invalid NIC format");
      console.error(error);
    }
  };

  return (
    <div>
      {!showDetails && (
        <div className="id-card" onClick={handleClick}>
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
              height: "90px", }}
          />
          <div className="barcode"></div>

          <h2 className="header2">ID CARD</h2>
          <p className="p1">ID: 123456789123456789</p> 
          
          <p className="p2">Name: <br /> NAME SURNAME</p> <br /> 
          <p className="p3">Address: <br /> 123 ANYWHERE STREET, CITY</p><br />
          <p className="p4">Phone:<br />  +5581487898</p>
          <p className="p5">Expedition Date: 00/00/00</p>
          <div className="footer"></div>
          <div className="hover-layer">
            <p className="hover-text">Click me</p>
          </div>
        </div>
      )}

      {showDetails && (
        <div className="Second">
          <h2 className="header3">NIC DETAILS</h2>

          <TextField
            label="Enter NIC No"
            value={nic}
            onChange={(e) => setNic(e.target.value)}
            sx={{ width: 280, marginLeft: "10px" }}
          />

          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              marginLeft: "10px",
              marginTop: 2,
              backgroundColor: "#087d6fff",
              width: 280,
            }}
          >
            Submit
          </Button>

          {nicResult && (
            <div style={{ marginTop: "20px" }}>
              <TextField
                label="NIC No"
                variant="filled"
                value={nicResult.nic}
                sx={{ width: 280, marginLeft: "10px" }}
              />
              <br />
              <br />
              <TextField
                label="Birthday"
                variant="filled"
                value={nicResult.birthday}
                sx={{ width: 280, marginLeft: "10px" }}
              />
              <br />
              <br />
              <TextField
                label="Gender"
                variant="filled"
                value={nicResult.gender}
                sx={{ width: 280, marginLeft: "10px" }}
              />
            </div>
          )}
        </div>
      )}
        
    </div>
  );
}
export default Card;
