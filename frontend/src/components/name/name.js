import React from "react";
import Avatar from "@mui/material/Avatar";
import logo from "../../cartoon-dev.jpg";
import { Card, CardHeader } from "@mui/material";

class Name extends React.Component {

    render() {
        return (
            <Card sx={{ maxWidth: 345, boxShadow: "none", fontSize: "1.5rem", background: "inherit" }}>
                <CardHeader
                    avatar={
                        <Avatar alt="logo" src={logo} />
                    }
                    title={this.props.username}
                />
            </Card>
        );
    }
}

export default Name;