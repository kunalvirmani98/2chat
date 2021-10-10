import React from "react";
import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import Avatar from "@mui/material/Avatar";
import { Box, Typography, TextField } from "@mui/material";
import colorScheme from "../../constants/constant";

const color = colorScheme.primary;

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: `${color}`,
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: `${color}`,
    },
    '& .MuiOutlinedInput-root': {
        width: "70ch",
        '& fieldset': {
            borderColor: `${color}`,
            borderRadius: "1rem",
            width: "100%",
        },
        '&:hover fieldset': {
            borderColor: `${color}`,
        },
        '&.Mui-focused fieldset': {
            borderColor: `${color}`,
        },
    },
});

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(colorScheme.primary),
    backgroundColor: colorScheme.primary,
    color: "white",
    '&:hover': {
        backgroundColor: colorScheme.primary
    },
}));

class InputMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputMessage: null,
        }
    }

    socket = this.props.activeSocket;

    handleInputMessage = (e) => {
        this.setState({ inputMessage: e.target.value });
        console.log(e.target);
    }

    sendMessage = (e) => {
        console.log("Sending message ...");
        let activeSocket = this.props.activeSocket;
        let messageObj = {
            sentBy: this.props.username,
            message: this.state.inputMessage
        }
        //this.props.handleIncomingMessages(e, messageObj);
        activeSocket.emit('message', messageObj);
    }

    render() {
        return (
            <Box sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
            }}>
                <CssTextField
                    id="outlined-multiline-flexible"
                    label="Message"
                    multiline
                    maxRows={3}
                    onChange={this.handleInputMessage}
                    value={this.state.inputMessage}
                />
                <ColorButton
                    variant="contained"
                    onClick={this.sendMessage}
                    endIcon={<SendIcon />}>
                    Send
                </ColorButton>
            </Box>
        );
    }
}

export default InputMessage;