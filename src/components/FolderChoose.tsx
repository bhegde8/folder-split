// Electron
import { remote } from 'electron';

// React
import React, { ReactElement, useState } from 'react';

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

export default (): ReactElement => {
    const classes = useStyles();
    const [folder, setFolder] = useState('(No Folder Selected)');

    const openFolderDialog = async () => {
        const result = await remote.dialog.showOpenDialog({
            properties: ['openDirectory']
        });

        if (!result.canceled) {
            setFolder(result.filePaths[0]);
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
