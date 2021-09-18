import React from "react";
import { Box, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { deepPurple, deepOrange, grey } from "@mui/material/colors";

class App extends React.Component {

    render() {
        return (
            <ChatPage />
        )
    }
}

const theme = createTheme({
    components: {
        // Name of the component
        MuiButton: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    fontSize: '1rem',
                },
            },
        },
    },
});

class ChatPage extends React.Component {


    render() {
        const primary = deepPurple[900];
        const secondary = deepOrange[500];
        const misc = grey[100];
        return (
            <Grid
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
                        }}
                    />
                </Grid>
                <Grid item xs={2}>
                </Grid>
            </Grid>
        )
    }
}

export default App;