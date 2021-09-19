import React from "react";
import { Box, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { deepPurple, deepOrange, grey } from "@mui/material/colors";
import Name from "../name/name";
import Layout from "../layout/layout";

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

/*<Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
    spacing={1}
    sx={{
        background: `${misc}`
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
            }}>*/


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
                        <Box sx={{
                            height: "70vh"
                        }}>
                            <Box></Box>
                        </Box>
                    </Grid>
                </Grid>

            </Layout >
        )
    }
}

export default App;