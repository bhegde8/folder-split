// Electron
import { remote } from 'electron';

// React
import React, { ReactElement } from 'react';

// Redux
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store/store';
import { selectDisks } from '../store/slices/disksSlice';
import { selectRootPath, changeDirectory } from '../store/slices/treeSlice';

// Material UI
import { Card, CardContent, Button, Grid, Paper,
         Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import FolderIcon from '@material-ui/icons/Folder';


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        button: {
            width: '100%',
        },
        paper: {
            padding: theme.spacing(2),
            backgroundColor: theme.palette.background.default,
        },
        textRight: {
            textAlign: 'right',
        },
    }),
);

const FolderChoose = (): ReactElement => {
    const classes = useStyles();

    const disks = useSelector(selectDisks);
    const folder = useSelector(selectRootPath);
    const dispatch = useAppDispatch();

    const openFolderDialog = async () => {
        const result = await remote.dialog.showOpenDialog({
            properties: ['openDirectory']
        });

        if (!result.canceled) {
            dispatch(changeDirectory(result.filePaths[0], disks));
        }
    }

    return (
        <Card>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Folder
                </Typography>
                <Paper className={classes.paper}>
                    <Grid container spacing={1}>
                        <Grid item xs={9}>
                            <Typography variant="h6" component="h6">
                                {folder}
                            </Typography>
                        </Grid>
                        <Grid item className={classes.textRight} xs={3}>
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                startIcon={<FolderIcon />}
                                onClick={() => openFolderDialog()}
                            >
                                Choose Folder...
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </CardContent>
        </Card>
    );
};

FolderChoose.displayName = 'FolderChoose';

export default FolderChoose;