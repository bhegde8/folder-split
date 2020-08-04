// React
import React, { ReactElement } from 'react';

// Material UI
import { Checkbox, Collapse, List, ListItem, ListItemIcon, ListItemText,
         ListItemSecondaryAction, ListSubheader } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FileIcon from '@material-ui/icons/InsertDriveFileOutlined';
import FolderIcon from '@material-ui/icons/Folder';


type Props = {
    readonly driveLabel: string;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        list: {
            backgroundColor: theme.palette.background.default,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
    }),
);

export default (props: Props): ReactElement => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Keep on {props.driveLabel} [0 GB]
                </ListSubheader>
            }
            className={classes.list}
        >
            <ListItem button>
                <ListItemIcon>
                    <FileIcon />
                </ListItemIcon>
                <ListItemText primary="mcclauncher.exe" />
                <ListItemSecondaryAction>
                    <Checkbox
                        color="primary"
                        edge="end"
                    />
                </ListItemSecondaryAction>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <FileIcon />
                </ListItemIcon>
                <ListItemText primary="halonetworklayer_ship.dll" />
                <ListItemSecondaryAction>
                    <Checkbox
                        color="primary"
                        edge="end"
                    />
                </ListItemSecondaryAction>
            </ListItem>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <FolderIcon />
                </ListItemIcon>
                <ListItemText primary="halo3" />
                {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                <ListItemSecondaryAction>
                    <Checkbox
                        color="primary"
                        edge="end"
                    />
                </ListItemSecondaryAction>
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <FileIcon />
                        </ListItemIcon>
                        <ListItemText primary="halo3.dll" />
                        <ListItemSecondaryAction>
                            <Checkbox
                                color="primary"
                                edge="end"
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
            </Collapse>
        </List>
    );
};
