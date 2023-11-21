import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import styled from 'styled-components';

const WrapperBMI = styled('div')`
    margin-top: 70px;
`

const Weight = styled('div')`
    margin-top: 50px;
    text-align: left;
`

const Height = styled('div')`
    margin-top: 30px;
    text-align: left;
`

const Result = styled('div')`
    margin-top: 30px;
    text-align: left;
`
const Notification = styled('div')`
    margin-top: 30px;
    text-align: left;
`
function BMI() {
    const [weight, setWeight] = useState(50);
    const [height, setHeight] = useState(160);

    const calculateBMI = () => {
        let heightInMeters = height / 100;
        return (weight / (heightInMeters * heightInMeters)).toFixed(2);
    }

    const getBMIClassification = () => {
        let bmi = calculateBMI();
        if (bmi < 18.5) {
            return "You are underweight.";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            return "You are having a fit body.";
        } else {
            return "You are overweight.";
        }
    }

    return (
        <WrapperBMI>
            <h1> BMI Calculator </h1>
            <Weight>
                <p>Please input your weight: {weight} kg</p>
                <Slider
                    value={weight}
                    onChange={(event, newValue) => setWeight(newValue)}
                    min={30}
                    max={200}
                />
            </Weight>
            <Height>
                <p>Please input your height: {height} cm</p>
                <Slider
                    value={height}
                    onChange={(event, newValue) => setHeight(newValue)}
                    min={100}
                    max={300}
                />
            </Height>
            <Result>
                <p>Your BMI result is {calculateBMI()}</p>
            </Result>
            <Notification>
                <p>{getBMIClassification()}</p>
            </Notification>
        </WrapperBMI>
    )
}

export default BMI;