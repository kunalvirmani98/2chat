import React from "react";
import { Box, Grid } from "@mui/material";
import { deepPurple, deepOrange, grey } from "@mui/material/colors";
import Name from "../name/name";
import Layout from "../layout/layout";
import ChatArea from "../chat/chatArea";
import InputMessage from "../chat/inputMessage";
import FriendList from "../chat/friendList";
import io from "socket.io-client";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            activeSocket: null,
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
            { sentBy: "Kunal", message: "Hey" }]
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
        const misc2 = grey[50];
        return (
            < Layout >
                <Grid
                    container
                    spacing={0}>
                    <Grid item xs={3}><Name username="Kunal Virmani" /></Grid>
                    <Grid
                        item xs={9}
                        sx={{
                            background: `${misc2}`
                        }}><Name username="Kanav Vashisht" /></Grid>
                </Grid>
                <Grid
                    container
                    spacing={0}>
                    <Grid item xs={3}>
                        <FriendList />
                    </Grid>
                    <Grid item xs={9}>
                        <ChatArea activeSocket={this.state.activeSocket} messages={this.state.messages} handleIncomingMessages={this.handleIncomingMessages} />
                        <InputMessage activeSocket={this.state.activeSocket} handleIncomingMessages={this.handleIncomingMessages} />
                    </Grid>
                </Grid>
            </Layout >
        )
    }
}

export default App;