import React from 'react';
import colorScheme from '../../constants/constant';
import { Box, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const CssLoginField = styled(TextField)({
    '& label.Mui-focused': {
        color: `${colorScheme.primary}`,
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: `${colorScheme.primary}`,
    },
    '& .MuiOutlinedInput-root': {
        width: "25ch",
        '& fieldset': {
            borderColor: `${colorScheme.primary}`,
            borderRadius: "1rem",
            width: "100%",
        },
        '&:hover fieldset': {
            borderColor: `${colorScheme.primary}`,
        },
        '&.Mui-focused fieldset': {
            borderColor: `${colorScheme.primary}`,
        },
    },
});

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            isComplete: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleLogin(this.state.username);
        // this.setState({ username: e.target})
    }

    handleChange(tag, e) {
        if (tag === "username") {
            if (e.target.value !== "") {
                this.setState({ "username": e.target.value, isComplete: true })
            } else {
                this.setState({ "username": e.target.value, isComplete: false })
            }
        }
        else if (tag === "password") {
            this.setState({ "password": e.target.value })
        }
    }

    render() {
        const grey = colorScheme.misc;
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: `${grey}`,
                    height: "100vh",
                }}>
                <Box
                    sx={{
                        margin: "5vh 0",
                        width: "25%",
                        background: "white",
                        boxShadow: "2px 2px 5px lightgray",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0.5rem"
                    }}
                    component="form"
                    noValidate
                    autoComplete="off">
                    <Typography variant="h3" gutterBottom component="div">
                        2Chat
                    </Typography>
                    <CssLoginField id="outlined-basic" label="Username" variant="outlined" />
                    <CssLoginField id="outlined-basic" label="Password" variant="outlined" />
                </Box>
            </Box>

        )
    }
}

export default Login;