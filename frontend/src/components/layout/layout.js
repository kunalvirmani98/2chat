import React, { Children } from "react";
import { Box, Grid } from "@mui/material";
import colorScheme from "../../constants/constant";
import Login from "../login/login";
import App from "../main/app";

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
                <App senderName={this.state.username} />}
        </>
        );
    }
}

export default Layout;