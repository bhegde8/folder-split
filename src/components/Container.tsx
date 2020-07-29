// React
import React, { ReactElement } from 'react';

// Material UI
import { Grid } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

// Components
import Disks from './Disks'
import Files from './Files'
import Folder from './Folder'

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            flexGrow: 1,
            marginTop: '3em',
        },
        paper: {
            padding: theme.spacing(2),
        },
        textRight: {
            textAlign: "right",
        },
    }),
);

export default (): ReactElement => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={12}>
                    <Folder />
                </Grid>
                <Grid item xs={12}>
                    <Disks />
                </Grid>
                <Grid item xs={12}>
                    <Files />
                </Grid>
            </Grid>
        </div>
    );
};
