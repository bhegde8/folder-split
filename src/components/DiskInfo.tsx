// React
import React, { ReactElement } from 'react';

// Material UI
import { Grid, LinearProgress, Paper, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import StorageIcon from '@material-ui/icons/Storage';

type Props = {
    readonly driveLabel: string;
    readonly freeSpace: number;
    readonly totalSpace: number;
};

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        paper: {
            padding: theme.spacing(2),
            backgroundColor: theme.palette.background.default,
        },
    }),
);

export default (props: Props): ReactElement => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <StorageIcon />
                </Grid>
                <Grid item xs={9}>
                    <Typography variant="h6" component="h6">
                        {props.driveLabel}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <LinearProgress
                        variant="determinate"
                        value={(props.freeSpace / props.totalSpace) * 100} />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" component="p">
                        {props.freeSpace} / {props.totalSpace} GB Free
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};
