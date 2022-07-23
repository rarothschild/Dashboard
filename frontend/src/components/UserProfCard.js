import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from "@material-ui/core/Grid";
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

function UserProfCard() {
    return(
        <Box sx={{height: '100px', width: '300px', border: '1px'}}>
            <div>
                <div>
                    <Avatar>
                        <QuestionMarkIcon />
                    </Avatar>
                </div>
                <div>
                    <IconButton variant="contained"><SettingsIcon/></IconButton>
                </div>
            </div>
        </Box>
    )
}
export default UserProfCard