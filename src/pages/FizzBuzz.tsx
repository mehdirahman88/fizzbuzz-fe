import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import {Container, Stack, Typography} from "@mui/material";
import * as helper from "./FizzBuzzHelper"

export interface FizzBuzzProps {
    initialCounter: number;
}

function FizzBuzz(props: FizzBuzzProps) {
    const [counter, setCounter] = useState(props.initialCounter);
    const [fizzBuzzValue, setFizzBuzzValue] = useState("");

    const updateFizzBuzz = (counter: number) => {
        helper.getCounterValue(counter).then(value => setFizzBuzzValue(value));
    }

    useEffect(() => {
        updateFizzBuzz(counter);
    },[]);

    const updateStates = async (newCounter: number) => {
        updateFizzBuzz(newCounter);
        setCounter(newCounter);
    }

    return (
        <Container>
            <Stack spacing={2} sx={{height: "100vh"}} justifyContent={"center"} alignItems={"center"}>
                <Typography>Your count</Typography>
                <Typography>{counter}</Typography>
                <Button variant="contained" onClick={async () => await updateStates(counter + 1)}>Click Me</Button>
                <Typography fontSize={40}>{fizzBuzzValue}</Typography>
            </Stack>
        </Container>
    );
}

export default FizzBuzz;
