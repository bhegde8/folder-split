// React
import React, { ReactElement, useEffect } from 'react';

// Redux
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store/store';
import { selectDisks, refreshDiskData } from '../store/slices/disksSlice';

// Material UI
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

// Components
import DiskInfo from './DiskInfo';

// System
import _ from 'lodash';

export default (): ReactElement => {
    const disks = useSelector(selectDisks);
    const dispatch = useAppDispatch();

    // When this component first loads, do an initial
    // loading of the disk data
    useEffect(() => {
        dispatch(refreshDiskData());
    }, []);

    return (
        <Card>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Drives
                </Typography>
                <Grid container spacing={1}>
                    {
                        _.map(disks, (disk) => (
                            <Grid item xs={2}>
                                <DiskInfo {...disk} />
                            </Grid>
                        ))
                    }
                </Grid>
            </CardContent>
        </Card>
    );
};
