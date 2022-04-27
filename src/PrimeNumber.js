import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Link from "@mui/material/Link";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

export default function PrimeNumber() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000")
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  }, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p: 2 }}>
        <Paper sx={{ p: 2 }}>
          <Box display="flex">
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Prime Number
              </Typography>
            </Box>
            <Box>
              <Link href="create">
                <Button variant="contained">Add</Button>{" "}
              </Link>
            </Box>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">Start</TableCell>
                  <TableCell align="right">End</TableCell>
                  <TableCell align="right">Prime Number</TableCell>
                  <TableCell align="right">Count</TableCell>
                  <TableCell align="right">Timestamp</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">{row.data.start}</TableCell>
                    <TableCell align="right">{row.data.end}</TableCell>
                    <TableCell align="right">{row.data.prime_number}</TableCell>
                    <TableCell align="right">
                      {row.data.count_prime_number}
                    </TableCell>
                    <TableCell align="right">{row.data.timestamp}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
