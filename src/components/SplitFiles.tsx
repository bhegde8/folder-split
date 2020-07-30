// React
import React, { ReactElement } from 'react';

// Material UI
import { Button, Card, CardContent, Grid, Paper,
         Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import AnalysisIcon from '@material-ui/icons/Equalizer';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

// Components
import FileTransfer from './filetransfer/FileTransfer';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            width: '100%',
        },
        paper: {
            padding: theme.spacing(2),
            backgroundColor: theme.palette.background.default,
        },
    }),
);

export default (): ReactElement => {
    const classes = useStyles();

    return (
        <Card>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Split Files
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <Button
                                        className={classes.button}
                                        variant="contained"
                                        color="primary"
                                        startIcon={<AnalysisIcon />}
                                    >
                                        Auto Balance
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button
                                        className={classes.button}
                                        variant="contained"
                                        color="primary"
                                        startIcon={<ArrowForwardIcon />}
                                    >
                                        Begin Split
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    {
                        ['C:', 'D:'].map((driveLabel) => (
                            <Grid item xs={4}>
                                <FileTransfer driveLabel={driveLabel} />
                            </Grid>
                        ))
                    }
                </Grid>
            </CardContent>
        </Card>
    );
};
