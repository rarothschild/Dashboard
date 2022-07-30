import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from "@material-ui/core/Grid";
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function HouseFinance(props) {
    const [user,setUser] = useState(props.user)
    const [homes,setHomes] = useState([])
    
    useEffect(() => {
           fetch()
      }, []);

    return(
        <Container>
            <Grid container>
                test1
            </Grid>
        </Container>
    )
}