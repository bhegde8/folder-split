// React
import React, { ReactElement } from 'react';

// Material UI
import { Grid, LinearProgress, Paper, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import StorageIcon from '@material-ui/icons/Storage';

// System
import { DiskData } from '../system/diskmanager'

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        paper: {
            padding: theme.spacing(2),
            backgroundColor: theme.palette.background.default,
        },
    }),
);

export default (props: DiskData): ReactElement => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <StorageIcon />
                </Grid>
                <Grid item xs={9}>
                    <Typography variant="h6" component="h6">
                        {props.label}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <LinearProgress
                        variant="determinate"
                        value={props.usage} />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" component="p">
                        {props.free} / {props.total} GB Free
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};
