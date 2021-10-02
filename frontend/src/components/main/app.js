import React from "react";
import { Box, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { deepPurple, deepOrange, grey } from "@mui/material/colors";
import Name from "../name/name";
import Layout from "../layout/layout";
import ChatArea from "../chat/chatArea";
import InputMessage from "../chat/inputMessage";
import FriendList from "../chat/friendList";
import io from "socket.io-client";

class App extends React.Component {

    render() {
        return (
            <ChatPage />
        )
    }
}

class ChatPage extends React.Component {

    constructor() {
        super();
        this.state = {
            activeSocket: null
        }
    }
    componentDidMount() {
        const socket = io('ws://localhost:8080');
        if (socket !== null) {
            console.log("Socket connection established");
            this.setState({ activeSocket: socket });
        }
    }

    render() {
        const primary = deepPurple[900];
        const secondary = deepOrange[500];
        const misc = grey[100];
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
                        <ChatArea activeSocket={this.state.activeSocket} />
                        <InputMessage activeSocket={this.state.activeSocket} />
                    </Grid>
                </Grid>
            </Layout >
        )
    }
}

export default App;