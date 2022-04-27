import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, Grid, TextField, Typography } from "@mui/material";

export default function PrimeNumberCreate() {
  const handleSubmit = (event) => {
    event.preventDefault();
    var data = {
      start: start,
      end: end,
    };
    fetch("http://localhost:4000/create", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result["msg"] === "Calculate success") {
          window.location.href = "/";
        }
      });
  };

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom component="div">
          Calculate Prime Number
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="start"
                label="Start"
                variant="outlined"
                fullWidth
                required
                onChange={(e) => setStart(e.target.value)}
              />
            </Grid>{" "}
            <Grid item xs={12} sm={6}>
              <TextField
                id="end"
                label="End"
                variant="outlined"
                fullWidth
                required
                onChange={(e) => setEnd(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Calculate
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
}
