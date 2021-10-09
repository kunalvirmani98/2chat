import React from "react";
import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import Avatar from "@mui/material/Avatar";
import { Box, Typography, TextField } from "@mui/material";
import { green } from "@mui/material/colors";

const color = green['A200'];

class ChatArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.myRef = React.createRef();
    }

    componentDidMount() {
        if (this.myRef && this.myRef.current) {
            const element = this.myRef.current;
            element.scroll({
                top: element.scrollHeight,
                left: 0,
                behavior: "smooth"
            })
        }
    }

    componentDidUpdate() {
        if (this.myRef && this.myRef.current) {
            const element = this.myRef.current;
            element.scroll({
                top: element.scrollHeight,
                left: 0,
                behavior: "smooth"
            })
        }
    }

    // socket.emit('message', text);
    render() {
        return (
            <Box sx={{
                height: "65vh",
                overflowY: "auto",
                margin: "1rem",
            }} ref={this.myRef}>
                {this.props.messages.map((messageObj) => {
                    return (<Box sx={{
                        display: "flex",
                        alignItems: "center",
                        position: "relative",
                        marginBottom: "1rem",
                        justifyContent: `${messageObj.sentBy === this.props.username ? "flex-start" : "flex-end"}`,
                        width: "95%",
                        padding: "0.2rem 0.5rem"
                    }}>
                        <Typography sx={{
                            color: "white",
                            backgroundColor: `${color}`,
                            borderRadius: "1rem",
                            minWidth: "10%",
                            maxWidth: "50%",
                            padding: "0.5rem",
                            display: "flex",
                            justifyContent: `${messageObj.sentBy === this.props.username ? "flex-start" : "flex-end"}`,
                        }}><strong>{messageObj.message}
                            </strong></Typography>
                    </Box>)
                })}
            </Box>
        )
    }
}

export default ChatArea;