import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from "@material-ui/core/Grid";
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import SettingsIcon from '@mui/icons-material/Settings';
import { styled } from '@mui/material/styles';

import Login from './Login';
import Register from './Register';

const ProfPic = styled('div')({
    backgroundColor: 'aliceblue',
});

export default function UserProfCard(props) {
    console.log(props.user)
    
    function UserCard(props) {
        return(
            <Box sx={{height: '100px', width: '250px'}}>
                <Paper>
                    <Grid container>
                        <Grid item xs={4}>
                            <ProfPic>
                                <Avatar>
                                    <QuestionMarkIcon />
                                </Avatar>
                            </ProfPic>
                            <div>
                                <IconButton variant="contained"><SettingsIcon/></IconButton>
                            </div>
                        </Grid>
                        <Grid item xs={8}>
                            {props.user.first_name}
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
            )
        }
    
    if (props.user === 0) {
        return <LoginSignup />
    }
    return <UserCard />
}

function LoginSignup(props) {

    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    // Button Callbacks
    const handleLoginClick = event => {
        if (showSignup) {
            setShowSignup(false)
        }
        setShowLogin(current => !current);
    };

    const handleSignupClick = event => {
        if (showLogin) {
            setShowLogin(false)
        }
        setShowSignup(current => !current);
    };

    return(
        <Box sx={{height: '100px', width: '250px', margin: '10px'}}>
            <Paper>
                <Grid container>
                    <Grid item xs={6}>
                        <Button onClick={handleLoginClick}>Login</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={handleSignupClick}>Signup</Button>
                    </Grid>
                    {showLogin && <Grid item xs={12}><Login /></Grid>}
                    {showSignup && <Grid item xs={12}><Register /></Grid>}
                </Grid>
            </Paper>
        </Box>
        )
    }