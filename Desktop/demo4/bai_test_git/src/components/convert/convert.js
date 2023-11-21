import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function Convert() {
    const [from, setFrom] = useState("Kilometer");
    const [to, setTo] = useState("Millimeter");
    const [amount, setAmount] = useState(1);
    const [result, setResult] = useState(0);

    const handleFromChange = (event) => {
        setFrom(event.target.value);
    };

    const handleToChange = (event) => {
        setTo(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleConvertClick = () => {
        let result;
        if (from === "Kilometer") {
            if (to === "Millimeter") {
                result = amount * 1000000;
            } else if (to === "Meter") {
                result = amount * 1000;
            } else {
                result = amount;
            }
        } else if (from === "Meter") {
            if (to === "Millimeter") {
                result = amount * 1000;
            } else if (to === "Kilometer") {
                result = amount / 1000;
            } else {
                result = amount;
            }
        } else { // from Millimeter
            if (to === "Meter") {
                result = amount / 1000;
            } else if (to === "Kilometer") {
                result = amount / 1000000;
            } else {
                result = amount;
            }
        }
        setResult(result.toFixed(2));
    }

    return (
        <div className="length-converter" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

           <TextField id="outlined-basic" label="Amount" value={amount} onChange={handleAmountChange} style={{marginRight: '10px'}}/>

           <Select
           labelId="demo-simple-select-label"
           id="demo-simple-select"
           value={from}
           label="From"
           onChange={handleFromChange}
           style={{marginRight: '10px'}}
           >
                <MenuItem value={"Kilometer"}>Kilometer</MenuItem>
                <MenuItem value={"Meter"}>Meter</MenuItem>
                <MenuItem value={"Millimeter"}>Millimeter</MenuItem>
           </Select>

           <Select
           labelId="demo-simple-select-label"
           id="demo-simple-select"
           value={to}
           label="To"
           onChange={handleToChange}
           style={{marginRight: '10px'}}
           >
                <MenuItem value={"Kilometer"}>Kilometer</MenuItem>
                <MenuItem value={"Meter"}>Meter</MenuItem>
                <MenuItem value={"Millimeter"}>Millimeter</MenuItem>
           </Select>

           <div className="convert-button">
               <Button variant="contained" onClick={handleConvertClick}>Convert</Button>
           </div>

           <TextField id="outlined-basic" label="Result" value={result} InputProps={{readOnly: true}} style={{marginLeft: '10px'}}/>

        </div>
    );
}

export default Convert; 