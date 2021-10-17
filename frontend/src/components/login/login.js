import React from 'react';
import colorScheme from '../../constants/constant';
import { Box, Button, Divider, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const CssLoginField = styled(TextField)({
    '& label.Mui-focused': {
        color: `${colorScheme.primary}`,
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: `${colorScheme.primary}`,
    },
    '& .MuiOutlinedInput-root': {
        width: "30ch",
        '& fieldset': {
            borderColor: `${colorScheme.primary}`,
            borderRadius: "0.2rem",
        },
        '&:hover fieldset': {
            borderColor: `${colorScheme.primary}`,
        },
        '&.Mui-focused fieldset': {
            borderColor: `${colorScheme.primary}`,
        },
    },
});

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(colorScheme.primary),
    backgroundColor: colorScheme.primary,
    '&:hover': {
        opacity: 1,
        backgroundColor: colorScheme.primary
    },
}));

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
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
                        width: "20%",
                        background: "white",
                        boxShadow: "2px 2px 5px lightgray",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "1rem",
                        minHeight: "40%"
                    }}
                    component="form"
                    noValidate
                    autoComplete="off">
                    <Typography variant="h3" gutterBottom component="div">
                        <font color={colorScheme.primary}>2</font>Chat
                    </Typography>
                    <Divider
                        variant="middle"
                        sx={{
                            width: "60%",
                            background: `${colorScheme.primary}`,
                            marginBottom: "3rem"
                        }} />
                    <CssLoginField
                        id="outlined-basic"
                        label="Username"
                        variant="outlined"
                        sx={{ marginBottom: "1rem" }}
                        onChange={(e) => this.handleChange("username", e)} />
                    <CssLoginField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        type="password"
                        sx={{ marginBottom: "2rem" }}
                        onChange={(e) => this.handleChange("password", e)} />
                    <ColorButton
                        variant="contained"
                        onClick={this.handleSubmit.bind(this)}
                        disabled={this.state.username === "" ? true : false}>
                        LOGIN
                    </ColorButton>
                </Box>
            </Box >

        )
    }
}

export default Login;