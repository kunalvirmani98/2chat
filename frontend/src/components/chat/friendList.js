import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import colorScheme from '../../constants/constant';

export default class FriendList extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: [{ name: "Ansh Gujral", message: "You up for tennis tomorrow?" },
            { name: "Kanav Vashisht", message: "What's the plan for this weekend?" },
            { name: "Kunal Vaish", message: "Have you checked out the new spiderman trailer?" }]
        };
    }
    render() {
        return (
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', overflowY: "auto" }}>
                {
                    this.state.friends.map((friend) => {
                        return (
                            <>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt={`${friend.name}`} sx={{ bgcolor: `${colorScheme.primary}` }} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={friend.name}
                                        secondary={
                                            <React.Fragment>
                                                {`${friend.message}...`}
                                            </React.Fragment>} />
                                </ListItem>

                                <Divider variant="inset" component="li" />
                            </>)
                    })
                }
            </List >
        );
    }
}