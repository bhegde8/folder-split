import { hot } from 'react-hot-loader';
import React, { ReactElement } from 'react';

import { AppBar, CssBaseline, ThemeProvider, Toolbar,
         Typography, Theme } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

// Use the default dark theme provided by Material-UI with blue
// as the primary color
const darkMode: Theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: blue[800],
        },
    },
});
  

const App = (): ReactElement => (
    <ThemeProvider theme={darkMode}>
        <CssBaseline />

        <AppBar>
            <Toolbar>

                <Typography variant="h5">
                    Folder Split
                </Typography>

            </Toolbar>
        </AppBar>

      </ThemeProvider>
);

export default hot(module)(App);
