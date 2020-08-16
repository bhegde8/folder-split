// React
import React, { ReactElement } from 'react';

// Redux
import { useSelector } from 'react-redux';
import { selectDisks } from '../store/slices/disksSlice';
import { selectTree } from '../store/slices/treeSlice';

// Material UI
import { Button, Card, CardContent, Grid, Paper,
         Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import AnalysisIcon from '@material-ui/icons/Equalizer';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

// Components
import FileTransfer from './filetransfer/FileTransfer';

// Node Modules
import _ from 'lodash';


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

const SplitFiles = (): ReactElement => {
    const classes = useStyles();

    const disks = useSelector(selectDisks);
    const tree = useSelector(selectTree);

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
                        _.map(disks, (disk) => (
                            <Grid item key={disk.label} xs={12}>
                                <FileTransfer
                                    driveLabel={disk.label}
                                    rootFile={tree}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
            </CardContent>
        </Card>
    );
};

SplitFiles.displayName = 'SplitFiles';

export default SplitFiles;
