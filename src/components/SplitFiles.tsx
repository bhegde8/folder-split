// React
import React, { ReactElement } from 'react';

// Redux
import { useSelector } from 'react-redux';
import { selectDisks } from '../store/slices/disksSlice';

// Material UI
import { Button, Card, CardContent, Grid, Paper,
         Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import AnalysisIcon from '@material-ui/icons/Equalizer';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

// System
import { File } from '../system/filemanager';

// Components
import FileTransfer from './filetransfer/FileTransfer';

// Node Modules
import _ from 'lodash';

const testData: File = {
    "isDirectory": true,
    "name": "copier-master",
    "size": {
      "bytes": 243513,
      "val": 243.51,
      "unit": "KB"
    },
    "children": [
      {
        "isDirectory": false,
        "name": ".env",
        "extension": "",
        "size": {
          "bytes": 354,
          "val": 354,
          "unit": "B"
        },
        "sourcePath": "/home/jmyers/Documents/copier-master/.env",
        "destPath": "/home/jmyers/Documents/copier-master/.env",
        "destDrive": "/"
      },
      {
        "isDirectory": false,
        "name": ".gitignore",
        "extension": "",
        "size": {
          "bytes": 17,
          "val": 17,
          "unit": "B"
        },
        "sourcePath": "/home/jmyers/Documents/copier-master/.gitignore",
        "destPath": "/home/jmyers/Documents/copier-master/.gitignore",
        "destDrive": "/"
      },
      {
        "isDirectory": false,
        "name": "README.md",
        "extension": ".md",
        "size": {
          "bytes": 18,
          "val": 18,
          "unit": "B"
        },
        "sourcePath": "/home/jmyers/Documents/copier-master/README.md",
        "destPath": "/home/jmyers/Documents/copier-master/README.md",
        "destDrive": "/"
      },
      {
        "isDirectory": false,
        "name": "build.ts",
        "extension": ".ts",
        "size": {
          "bytes": 305,
          "val": 305,
          "unit": "B"
        },
        "sourcePath": "/home/jmyers/Documents/copier-master/build.ts",
        "destPath": "/home/jmyers/Documents/copier-master/build.ts",
        "destDrive": "/"
      },
      {
        "isDirectory": false,
        "name": "nodemon.json",
        "extension": ".json",
        "size": {
          "bytes": 173,
          "val": 173,
          "unit": "B"
        },
        "sourcePath": "/home/jmyers/Documents/copier-master/nodemon.json",
        "destPath": "/home/jmyers/Documents/copier-master/nodemon.json",
        "destDrive": "/"
      },
      {
        "isDirectory": false,
        "name": "package-lock.json",
        "extension": ".json",
        "size": {
          "bytes": 232147,
          "val": 232.15,
          "unit": "KB"
        },
        "sourcePath": "/home/jmyers/Documents/copier-master/package-lock.json",
        "destPath": "/home/jmyers/Documents/copier-master/package-lock.json",
        "destDrive": "/"
      },
      {
        "isDirectory": false,
        "name": "package.json",
        "extension": ".json",
        "size": {
          "bytes": 2220,
          "val": 2.22,
          "unit": "KB"
        },
        "sourcePath": "/home/jmyers/Documents/copier-master/package.json",
        "destPath": "/home/jmyers/Documents/copier-master/package.json",
        "destDrive": "/"
      },
      {
        "isDirectory": true,
        "name": "scripts",
        "size": {
          "bytes": 272,
          "val": 272,
          "unit": "B"
        },
        "children": [
          {
            "isDirectory": false,
            "name": "commitpush.sh",
            "extension": ".sh",
            "size": {
              "bytes": 272,
              "val": 272,
              "unit": "B"
            },
            "sourcePath": "/home/jmyers/Documents/copier-master/scripts/commitpush.sh",
            "destPath": "/home/jmyers/Documents/copier-master/scripts/commitpush.sh",
            "destDrive": "/"
          }
        ],
        "sourcePath": "/home/jmyers/Documents/copier-master/scripts",
        "destPath": "/home/jmyers/Documents/copier-master/scripts",
        "destDrive": "/"
      },
      {
        "isDirectory": true,
        "name": "server",
        "size": {
          "bytes": 7644,
          "val": 7.64,
          "unit": "KB"
        },
        "children": [
          {
            "isDirectory": true,
            "name": "common",
            "size": {
              "bytes": 1548,
              "val": 1.55,
              "unit": "KB"
            },
            "children": [
              {
                "isDirectory": false,
                "name": "env.ts",
                "extension": ".ts",
                "size": {
                  "bytes": 50,
                  "val": 50,
                  "unit": "B"
                },
                "sourcePath": "/home/jmyers/Documents/copier-master/server/common/env.ts",
                "destPath": "/home/jmyers/Documents/copier-master/server/common/env.ts",
                "destDrive": "/"
              },
              {
                "isDirectory": false,
                "name": "errors.ts",
                "extension": ".ts",
                "size": {
                  "bytes": 499,
                  "val": 499,
                  "unit": "B"
                },
                "sourcePath": "/home/jmyers/Documents/copier-master/server/common/errors.ts",
                "destPath": "/home/jmyers/Documents/copier-master/server/common/errors.ts",
                "destDrive": "/"
              },
              {
                "isDirectory": false,
                "name": "logger.ts",
                "extension": ".ts",
                "size": {
                  "bytes": 131,
                  "val": 131,
                  "unit": "B"
                },
                "sourcePath": "/home/jmyers/Documents/copier-master/server/common/logger.ts",
                "destPath": "/home/jmyers/Documents/copier-master/server/common/logger.ts",
                "destDrive": "/"
              },
              {
                "isDirectory": false,
                "name": "server.ts",
                "extension": ".ts",
                "size": {
                  "bytes": 868,
                  "val": 868,
                  "unit": "B"
                },
                "sourcePath": "/home/jmyers/Documents/copier-master/server/common/server.ts",
                "destPath": "/home/jmyers/Documents/copier-master/server/common/server.ts",
                "destDrive": "/"
              }
            ],
            "sourcePath": "/home/jmyers/Documents/copier-master/server/common",
            "destPath": "/home/jmyers/Documents/copier-master/server/common",
            "destDrive": "/"
          },
          {
            "isDirectory": false,
            "name": "index.ts",
            "extension": ".ts",
            "size": {
              "bytes": 197,
              "val": 197,
              "unit": "B"
            },
            "sourcePath": "/home/jmyers/Documents/copier-master/server/index.ts",
            "destPath": "/home/jmyers/Documents/copier-master/server/index.ts",
            "destDrive": "/"
          },
          {
            "isDirectory": false,
            "name": "router.ts",
            "extension": ".ts",
            "size": {
              "bytes": 245,
              "val": 245,
              "unit": "B"
            },
            "sourcePath": "/home/jmyers/Documents/copier-master/server/router.ts",
            "destPath": "/home/jmyers/Documents/copier-master/server/router.ts",
            "destDrive": "/"
          },
          {
            "isDirectory": true,
            "name": "routing",
            "size": {
              "bytes": 5654,
              "val": 5.65,
              "unit": "KB"
            },
            "children": [
              {
                "isDirectory": false,
                "name": "GitLabController.ts",
                "extension": ".ts",
                "size": {
                  "bytes": 5654,
                  "val": 5.65,
                  "unit": "KB"
                },
                "sourcePath": "/home/jmyers/Documents/copier-master/server/routing/GitLabController.ts",
                "destPath": "/home/jmyers/Documents/copier-master/server/routing/GitLabController.ts",
                "destDrive": "/"
              }
            ],
            "sourcePath": "/home/jmyers/Documents/copier-master/server/routing",
            "destPath": "/home/jmyers/Documents/copier-master/server/routing",
            "destDrive": "/"
          }
        ],
        "sourcePath": "/home/jmyers/Documents/copier-master/server",
        "destPath": "/home/jmyers/Documents/copier-master/server",
        "destDrive": "/"
      },
      {
        "isDirectory": false,
        "name": "tsconfig.json",
        "extension": ".json",
        "size": {
          "bytes": 363,
          "val": 363,
          "unit": "B"
        },
        "sourcePath": "/home/jmyers/Documents/copier-master/tsconfig.json",
        "destPath": "/home/jmyers/Documents/copier-master/tsconfig.json",
        "destDrive": "/"
      }
    ],
    "sourcePath": "/home/jmyers/Documents/copier-master",
    "destPath": "/home/jmyers/Documents/copier-master",
    "destDrive": "/"
  };


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
                                <FileTransfer driveLabel={disk.label} rootFile={testData} />
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
