import './App.css';
import React from 'react';
import getNewRows from './getNewRows';
import { Container } from '@mui/system';
import { TextField, Stack, Button } from '@mui/material';
import { Table, TableBody,TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Paper } from '@mui/material';

const authorsName = "Mattan"

function App() {

  const [bucketNameInput, setBucketNameInput] = React.useState("");

  const onTextFieldChange = (e) => {setBucketNameInput(e.target.value);};

  const scanButtonClick = () => {
    console.log(bucketNameInput);
    setRows(getNewRows(bucketNameInput));
  }

  const [rows, setRows] = React.useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is {authorsName}'s app!
        </p>

        <p>
          Welcome to my Bucket Scanning App!
        </p>
      </header>

      <Container>
        <Stack spacing={3} sx={{marginTop: "20%"}}>
          <TextField
             id="bucket-name" 
             label="Bucket Name" 
             variant="filled" 
             color="primary"
             value={bucketNameInput}
             onChange={onTextFieldChange}
             />
          <Button variant="contained" onClick={scanButtonClick}>SCAN NOW</Button>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                <TableCell>Bucket name</TableCell>
                <TableCell align="right">Object name</TableCell>
                <TableCell align="right">Sensitive data</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                <TableCell>{row.bucketName}</TableCell>
                <TableCell align="right">{row.fileName}</TableCell>
                <TableCell align="right">{row.sensitiveData}</TableCell>
              </TableRow>
              ))}
              </TableBody>
            </Table>
          </TableContainer>


        </Stack>
      </Container>

    </div>
  );
}

export default App;
