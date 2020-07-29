// React
import React, { ReactElement } from 'react';

// Material UI
import { Card, CardContent, Checkbox, List, ListItem, ListItemIcon,
         ListItemText, Typography } from '@material-ui/core';

export default (): ReactElement => {
    
    return (
        <Card>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Files
                </Typography>
                <List dense component="div" role="list">
                    {[0, 1, 2].map((value: number) => {
                    const labelId = `transfer-list-item-${value}-label`;

                    return (
                        <ListItem key={value} role="listitem" button>
                            <ListItemIcon>
                                <Checkbox
                                    checked={true}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`File ${value + 1}.dat`} />
                        </ListItem>
                    );
                    })}
                    <ListItem />
                </List>
            </CardContent>
        </Card>
    );
};
