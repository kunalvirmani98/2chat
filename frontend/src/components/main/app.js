import React from "react";
import { Box, Divider, Grid } from "@mui/material";
import Name from "../name/name";
import ChatArea from "../chat/chatArea";
import InputMessage from "../chat/inputMessage";
import FriendList from "../chat/friendList";
import io from "socket.io-client";
import colorScheme from "../../constants/constant";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            activeSocket: null,
            messages: [{ sentBy: "kunal", message: "Hey" },
            { sentBy: "kanav", message: "Hi" },
            { sentBy: "kunal", message: "Hey there how are you i am fine thankyou Hey there how are you i am fine thankyou" },
            { sentBy: "kanav", message: "Hi" },
            { sentBy: "kunal", message: "Hey" },
            { sentBy: "kanav", message: "Hi" },
            { sentBy: "kunal", message: "Hi" },
            { sentBy: "kanav", message: "Hey" },
            { sentBy: "kanav", message: "Hi" },
            { sentBy: "kunal", message: "Hey there how are you i am fine thankyou Hey there how are you i am fine thankyou" },
            { sentBy: "kanav", message: "Hi" },
            { sentBy: "kanav", message: "Hi" },
            { sentBy: "kunal", message: "Hey there how are you i am fine thankyou Hey there how are you i am fine thankyou" },
            { sentBy: "kanav", message: "Hi" },
            { sentBy: "kunal", message: "Hey" }]
        }
    }

    componentDidMount() {
        const socket = io('ws://localhost:8080');
        if (socket !== null) {
            console.log("Socket connection established");
            this.setState({ activeSocket: socket });
        }
    }

    componentDidUpdate() {
        let activeSocket = this.state.activeSocket;
        let messages = this.state.messages;
        if (activeSocket != null) {
            activeSocket.on('message', (messageObj) => {
                this.setState({ messages: [...messages, messageObj] })
            })
        }
    }

    handleIncomingMessages = (e, incomingMessage) => {
        let messages = this.state.messages;
        this.setState({ messages: [...messages, incomingMessage] })
    }

    render() {
        return (
            <Grid
                container
                spacing={1}
                sx={{
                    background: `${colorScheme.lightGrey}`
                }}>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={8}>
                    <Box
                        sx={{
                            margin: "5vh 0",
                            width: "100%",
                            height: "90vh",
                            background: "white",
                            boxShadow: "2px 2px 5px lightgray"
                        }}>
                        <Grid
                            container
                            spacing={0}>
                            <Grid
                                item xs={3}
                                sx={{ background: `${colorScheme.grey}`, borderRight: "1px solid lightgrey" }}
                            >
                                <Name username={`${this.props.senderName}`} />
                            </Grid>
                            <Grid
                                item xs={9}
                                sx={{
                                    background: `${colorScheme.grey}`
                                }}><Name username={this.props.senderName === "kunal" ? "kanav" : "kunal"} /></Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={0}>
                            <Grid item xs={3}>
                                <FriendList />
                            </Grid>
                            <Grid item xs={9}>
                                <ChatArea username={this.props.senderName} activeSocket={this.state.activeSocket} messages={this.state.messages} handleIncomingMessages={this.handleIncomingMessages} />
                                <InputMessage username={this.props.senderName} activeSocket={this.state.activeSocket} handleIncomingMessages={this.handleIncomingMessages} />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={2}>
                </Grid>
            </Grid>

        )
    }
}

export default App;