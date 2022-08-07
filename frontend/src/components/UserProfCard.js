import * as React from 'react';
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

function UserProfCard(props) {
    console.log(props)
    // Handle Login
    const handleLogin = (event) => {
        event.preventDefault();
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

    const LoginForm = (
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
    );

    return(
        <Box sx={{height: '100px', width: '250px', margin: '10px'}}>
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
export default UserProfCard