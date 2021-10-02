import React from "react";
import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import Avatar from "@mui/material/Avatar";
import { Box, Typography, TextField } from "@mui/material";
import { green } from "@mui/material/colors";

const color = green['A200'];

class ChatArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [{ sentBy: "Kunal", message: "Hey" },
            { sentBy: "Kanav", message: "Hi" },
            { sentBy: "Kunal", message: "Hey there how are you i am fine thankyou Hey there how are you i am fine thankyou" },
            { sentBy: "Kanav", message: "Hi" },
            { sentBy: "Kunal", message: "Hey" },
            { sentBy: "Kanav", message: "Hi" },
            { sentBy: "Kunal", message: "Hi" },
            { sentBy: "Kanav", message: "Hey" },
            { sentBy: "Kanav", message: "Hi" },
            { sentBy: "Kunal", message: "Hey there how are you i am fine thankyou Hey there how are you i am fine thankyou" },
            { sentBy: "Kanav", message: "Hi" },
            { sentBy: "Kanav", message: "Hi" },
            { sentBy: "Kunal", message: "Hey there how are you i am fine thankyou Hey there how are you i am fine thankyou" },
            { sentBy: "Kanav", message: "Hi" },
            { sentBy: "Kunal", message: "Hey" }],
            activeSocket: null,
        };
    }

    componentDidMount() {
    }

    componentDidUpdate() {
        console.log("Component did update chatarea");
        let activeSocket = this.props.activeSocket;
        let messages = this.state.messages;
        if (activeSocket != null) {
            activeSocket.on('message', text => {
                this.setState({ messages: [...messages, text] })
            })
        }
    }

    // socket.emit('message', text);
    render() {
        return (
            <Box sx={{
                height: "65vh",
                overflowY: "auto",
                margin: "1rem",
            }}>
                {this.state.messages.map((messageObj) => {
                    return (<Box sx={{
                        display: "flex",
                        alignItems: "center",
                        position: "relative",
                        marginBottom: "1rem",
                        justifyContent: `${messageObj.sentBy === "Kunal" ? "flex-start" : "flex-end"}`,
                        width: "95%",
                        padding: "0.2rem 0.5rem"
                    }}>
                        <Typography sx={{
                            color: "white",
                            backgroundColor: `${color}`,
                            borderRadius: "1rem",
                            minWidth: "10%",
                            maxWidth: "50%",
                            padding: "0.5rem",
                            display: "flex",
                            justifyContent: `${messageObj.sentBy === "Kunal" ? "flex-start" : "flex-end"}`,
                        }}><strong>{messageObj.message}
                            </strong></Typography>
                    </Box>)
                })}
            </Box>
        )
    }
}

export default ChatArea;