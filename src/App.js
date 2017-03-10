import React from 'react';
import BackgroundPaper from './BackgroundPaper';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomePage from './home/HomePage';

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <BackgroundPaper>
      <HomePage />
    </BackgroundPaper>
  </MuiThemeProvider>
);

export default App;
