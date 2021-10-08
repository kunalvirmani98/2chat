import React, { Children } from "react";
import { Box, Grid } from "@mui/material";
import colorScheme from "../../constants/constant";
import Login from "../login/login";

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userLoggedIn: false,
            username: ""
        }
    }
    handleLogin = (username) => {
        this.setState({ userLoggedIn: true, username })
    }

    render() {
        const grey = colorScheme.misc;
        const userLoggedIn = this.state.userLoggedIn;
        return (<>
            {!userLoggedIn ? <Login handleLogin={this.handleLogin} /> :
                <Grid
                    container
                    //direction="row"
                    //justifyContent="center"
                    //alignItems="center"
                    spacing={1}
                    sx={{
                        background: `${grey}`
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
                            }}>{this.props.children}</Box>
                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                </Grid>
            }</>
        );
    }
}

export default Layout;