// React
import React, { ReactElement } from 'react';

// Material UI
import { List, ListSubheader } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

// System
import { File } from '../../system/filemanager';

// Components
import FolderItem from './FolderItem';


type Props = {
    readonly driveLabel: string;
    readonly rootFile: File;
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
    }),
);

const FileTransfer = (props: Props): ReactElement => {
    const classes = useStyles();

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
            <FolderItem {...props.rootFile} />
        </List>
    );
};

FileTransfer.displayName = 'FileTransfer';

export default FileTransfer;
