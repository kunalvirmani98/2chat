import React from "react";
import Avatar from "@mui/material/Avatar";
import logo from "../../cartoon-dev.jpg";
import { Card, CardHeader, Typography, CardContent } from "@mui/material";

class Name extends React.Component {

    render() {
        return (
            <Card sx={{ maxWidth: 345, boxShadow: "none", background: "inherit", display: "flex", alignItems: "center" }}>
                <CardHeader
                    sx={{ paddingRight: "0" }}
                    avatar={
                        <Avatar alt="logo" src={logo} />
                    }
                />
                <CardContent sx={{ paddingLeft: "0" }}>
                    <Typography component="div" variant="h6">
                        {this.props.username}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default Name;