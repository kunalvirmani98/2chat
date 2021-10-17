import React from "react";
import chatBg from "../../chat-bg-2.jpg";
import { Box, Typography, TextField } from "@mui/material";
import colorScheme from "../../constants/constant";


const color = colorScheme.primary;

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
                height: "70vh",
                overflowY: "auto",
                padding: "1rem",
                backgroundImage: `url(${chatBg})`,
                backgroundRepeat: "round space",
                marginBottom: "1rem"
            }} ref={this.myRef}>
                {this.props.messages.map((messageObj) => {
                    return (<Box sx={{
                        display: "flex",
                        alignItems: "center",
                        position: "relative",
                        marginBottom: "1rem",
                        justifyContent: `${messageObj.sentBy === this.props.username ? "flex-start" : "flex-end"}`,
                        width: "100%",
                        //padding: "0.2rem 0.5rem"
                    }}>
                        <Typography sx={{
                            backgroundColor: `${messageObj.sentBy === this.props.username ? colorScheme.secondary : "white"}`,
                            borderRadius: "1rem",
                            minWidth: "10%",
                            maxWidth: "50%",
                            padding: "0.5rem",
                            display: "flex",
                            justifyContent: `${messageObj.sentBy === this.props.username ? "flex-start" : "flex-end"}`,
                        }}>{messageObj.message}
                        </Typography>
                    </Box>)
                })}
            </Box>
        )
    }
}

export default ChatArea;