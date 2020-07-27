// React
import React, { ReactElement } from 'react';

// Material UI
import { Button, Divider, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import FolderIcon from '@material-ui/icons/Folder'

// Components
import DiskInfo from './DiskInfo'

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
                    <Paper className={classes.paper}>
                        <Grid container spacing={1}>
                            <Grid item xs={9}>
                                <Typography variant="h6" component="h6">
                                    D:\SteamLibrary\steamapps\common\Halo The Master Chief Collection
                                </Typography>
                            </Grid>
                            <Grid item className={classes.textRight} xs={3}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<FolderIcon />}
                                >
                                    Choose Folder...
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                {
                    [{
                        driveLabel: 'C:',
                        freeSpace: 40.0,
                        totalSpace: 237,
                    },
                    {
                        driveLabel: 'D:',
                        freeSpace: 6.41,
                        totalSpace: 59.6,
                    }].map((driveData) => (
                        <Grid item xs={3}>
                            <DiskInfo
                                driveLabel={driveData.driveLabel}
                                freeSpace={driveData.freeSpace}
                                totalSpace={driveData.totalSpace}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    );
};
