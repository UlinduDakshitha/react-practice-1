 import React, { useState, useEffect } from "react";
import lankaNIC from "lanka-nic";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function NICCard() {
  const [nic, setNic] = useState("");
  const [details, setDetails] = useState({
    nic: "",
    birthday: "",
    gender: ""
  });

  const [submittedNIC, setSubmittedNIC] = useState(""); 

  const handleSubmit = () => {
    setSubmittedNIC(nic); // trigger useEffect
  };

  // Runs whenever the user submits a NIC
  useEffect(() => {
    if (!submittedNIC) return;

    try {
      const result = lankaNIC.getInfoFromNIC(submittedNIC);

      if (!result) {
        alert("Invalid NIC number");
        return;
      }

      setDetails({
        nic: submittedNIC,
        birthday: result.dateOfBirth.toISOString().split("T")[0], // YYYY-MM-DD
        gender: result.gender
      });

    } catch (error) {
      alert("Invalid NIC format");
      console.error(error);
    }
  }, [submittedNIC]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>NIC Details</h2>

      <TextField
        label="Enter NIC Number"
        value={nic}
        onChange={(e) => setNic(e.target.value)}
        sx={{ width: 300 }}
      />

      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={{ display: "block", marginTop: 2, width: 300 }}
      >
        Submit
      </Button>

      {details.nic && (
        <div style={{ marginTop: "20px" }}>
          <TextField
            label="NIC Number"
            variant="filled"
            value={details.nic}
            sx={{ width: 300 }}
          />

          <br /><br />

          <TextField
            label="Birthday"
            variant="filled"
            value={details.birthday}
            sx={{ width: 300 }}
          />

          <br /><br />

          <TextField
            label="Gender"
            variant="filled"
            value={details.gender}
            sx={{ width: 300 }}
          />
        </div>
      )}
    </div>
  );
}

export default NICCard;
