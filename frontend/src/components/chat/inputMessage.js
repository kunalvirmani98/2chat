import React from "react";
import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import Avatar from "@mui/material/Avatar";
import { Box, Typography, TextField } from "@mui/material";
import { green } from "@mui/material/colors";

const color = green['A200'];

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: `${color}`,
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: `${color}`,
    },
    '& .MuiOutlinedInput-root': {
        width: "70ch",
        '& fieldset': {
            borderColor: `${color}`,
            borderRadius: "1rem",
            width: "100%",
        },
        '&:hover fieldset': {
            borderColor: `${green['A200']}`,
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
});

class InputMessage extends React.Component {
    render() {
        return (
            <Box sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
            }}>
                <CssTextField
                    id="outlined-multiline-flexible"
                    label="Message"
                    multiline
                    maxRows={3}
                />
                <Button
                    sx={{
                        backgroundColor: `${green['A200']}`
                    }}
                    variant="contained"
                    endIcon={<SendIcon />}>
                    Send
                </Button>
            </Box>
        );
    }
}

export default InputMessage;