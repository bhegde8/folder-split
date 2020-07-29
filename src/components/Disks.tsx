// React
import React, { ReactElement } from 'react';

// Material UI
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

// Components
import DiskInfo from './DiskInfo'

export default (): ReactElement => {
    
    return (
        <Card>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Drives
                </Typography>
                <Grid container spacing={1}>
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
            </CardContent>
        </Card>
    );
};
