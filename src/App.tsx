// React
import { hot } from 'react-hot-loader';
import React, { ReactElement } from 'react';

// Material UI
import { AppBar, CssBaseline, ThemeProvider, Toolbar,
         Typography, Theme } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

// Components
import Container from './components/Container'


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
        <Container />
    </ThemeProvider>
);

export default hot(module)(App);
