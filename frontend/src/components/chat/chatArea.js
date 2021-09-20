import React from "react";
import { Card, CardHeader, Avatar, Box, Paper, Typography } from "@mui/material";
import logo from "../../cartoon-dev.jpg";
import colorScheme from "../../constants/constant";

class ChatArea extends React.Component {
    constructor() {
        super();
        this.state = {
            sender: "",
            receiver: "",
            messageList: [{ sentBy: "Kanav", message: "Hey" },
            { sentBy: "Kunal", message: "Hi" },
            { sentBy: "Kanav", message: "How you doin" }]
        }
    }
    render() {
        return (
            <>
                {this.state.messageList.map((messageObj, i) => {
                    return (
                        <div key={`message-${i}`} style={{ position: "relative", left: `${messageObj.sentBy === "Kanav" ? "45%" : "0"}`, width: '50%' }}>
                            <Box sx={{
                                display: 'flex', p: 1,
                                bgcolor: 'background.paper',
                                justifyContent: `${messageObj.sentBy === "Kanav" ? "flex-end" : "flex-start"}`
                            }}>
                                {messageObj.sentBy !== "Kanav" ? <Avatar alt="logo" src={logo} /> : <></>}
                                <Box sx={{
                                    display: 'flex',
                                    p: 1,
                                    bgcolor: `${colorScheme.primary}`,
                                    color: 'white',
                                    borderRadius: "0.5rem",
                                    margin: `${messageObj.sentBy === "Kanav" ? "0px 1rem 0px" : "0px 0px 0px 1rem"}`
                                }}>
                                    {messageObj.message}
                                </Box>
                                {messageObj.sentBy === "Kanav" ? <Avatar alt="logo" src={logo} /> : <></>}
                            </Box>
                        </div>
                    )
                }
                )
                }
            </>
        );
    }
}

export default ChatArea;