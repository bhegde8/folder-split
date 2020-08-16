// React
import React, { ReactElement } from 'react';

// Material UI
import { Checkbox, ListItem, ListItemIcon, ListItemText,
         ListItemSecondaryAction } from '@material-ui/core';

import FileIcon from '@material-ui/icons/InsertDriveFileOutlined';

// System
import { File } from '../../system/filemanager';


const FileItem = (props: File): ReactElement => {
    return (
        <ListItem button style={{ paddingLeft: `${props.depth}em` }}>
            <ListItemIcon>
                <FileIcon />
            </ListItemIcon>
            <ListItemText primary={props.name} />
            <ListItemSecondaryAction>
                <Checkbox
                    color="primary"
                    edge="end"
                />
            </ListItemSecondaryAction>
        </ListItem>
    );
};

FileItem.displayName = 'FileItem';

export default FileItem;
