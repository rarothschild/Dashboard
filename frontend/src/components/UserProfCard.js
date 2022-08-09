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
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import axios from './axiosConfig';

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
    
    if (props.user.length === 0) {
        return <LoginSignup />
    }
    return <UserCard />
}

function LoginSignup(props) {

    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [csrftoken, setCsrftoken] = useState([]);
    
    const setCSRF = () => {
        const { data } = axios.get('api/set-csrf/').then(res => console.log(res))
        setCsrftoken(data);
    };

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

    // Handle Login
    const handleLogin = (event) => {
        var loginPost = {
            username: document.getElementById("unameValue").value,
            password: document.getElementById("passValue").value
        }
        axios.post('api/login/',loginPost)
            .then(res => console.log(res.data))
            .catch((error) => {
            if( error.response ){
                console.log(error.response.data); // => the response payload 
            }
        });
        {setCSRF}
    };

    function LoginForm(props) {
        return (
            <div>
                <form onSubmit={handleLogin}>
                    <div>
                        <label>Username </label>
                        <input type="text" name="uname" id="unameValue" required />
                    </div>
                    <div>
                        <label>Password </label>
                        <input type="password" name="pass" id="passValue" required />
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
                </form>
            </div>
        )
    }

    function SignupForm(props) {
        return (
            <div>
                <form onSubmit={handleLogin}>
                    <div>
                        <label>Username </label>
                        <input type="text" name="uname" id="unameValue" required />
                    </div>
                    <div>
                        <label>Password </label>
                        <input type="password" name="pass" id="passValue" required />
                    </div>
                    <div>
                        <label>Re-Password </label>
                        <input type="password" name="pass" id="passValue" required />
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
                </form>
            </div>
        )
    }

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
                    {showLogin && <Grid item xs={12}><LoginForm/></Grid>}
                    {showSignup && <Grid item xs={12}><SignupForm/></Grid>}
                </Grid>
            </Paper>
        </Box>
        )
    }