import React from "react";
import { Box, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { deepPurple, deepOrange, grey } from "@mui/material/colors";
import Name from "../name/name";
import Layout from "../layout/layout";
import ChatArea from "../chat/chatArea";
import InputMessage from "../chat/inputMessage";

class App extends React.Component {

    render() {
        return (
            <ChatPage />
        )
    }
}

/*
    Name of sender + detail
    Name of recipient + messages sent
    Name of all recipiends
    Message input
    Sender logout
*/

class ChatPage extends React.Component {

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
                        <Name username="Ansh Gujral" />
                        <Name username="Rahul Syal" />
                    </Grid>
                    <Grid item xs={9}>
                        <ChatArea />
                        <InputMessage />
                    </Grid>
                </Grid>

            </Layout >
        )
    }
}

export default App;