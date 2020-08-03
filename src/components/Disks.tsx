// React
import React, { ReactElement, useState, useEffect } from 'react';

// Material UI
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

// Components
import DiskInfo from './DiskInfo';

// System
import DiskManager, { DiskData } from '../system/diskmanager'
import _ from 'lodash';

export default (): ReactElement => {
    const [diskData, setDiskData] = useState([]);

    useEffect(() => {
        const update = async () => {
            setDiskData(await DiskManager.getDiskData());
        };

        update();
    }, [])

    return (
        <Card>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Drives
                </Typography>
                <Grid container spacing={1}>
                    {
                        _.map(diskData, (disk) => (
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
