// React
import React, { ReactElement } from 'react';

// Material UI
import { Checkbox, Collapse, List, ListItem, ListItemIcon, ListItemText,
         ListItemSecondaryAction } from '@material-ui/core';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FolderIcon from '@material-ui/icons/Folder';

// System
import { File } from '../../system/filemanager';

// Components
import FileItem from './FileItem';

// Node Modules
import _ from 'lodash';


const FolderItem = (props: File): ReactElement => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <React.Fragment>
            <ListItem
                button
                onClick={handleClick}
                style={{ paddingLeft: `${props.depth}em` }}
            >
                <ListItemIcon>
                    <FolderIcon />
                </ListItemIcon>
                <ListItemText
                    primary={props.name}
                    secondary={`${props.size.val} ${props.size.unit}`}
                />
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
                    {
                        _.map(props.children, (file) => {
                            return (file.isDirectory) ?
                                    <FolderItem key={file.name} {...file} /> :
                                    <FileItem key={file.name} {...file} />
                        })
                    }
                </List>
            </Collapse>
        </React.Fragment>
    );
};

FolderItem.displayName = 'FolderItem';

export default FolderItem;
