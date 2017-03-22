import React from 'react';
import BackgroundPaper from './BackgroundPaper';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import * as colors from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomePage from './home/HomePage';

const goladColors = {
  primary1Color: colors.red400,
  primary2Color: colors.red500,
  primary3Color: colors.redA200,
  accent1Color: colors.indigo100,
  accent2Color: colors.indigo500,
  accent3Color: colors.indigo100,
}

const goladTheme = {...darkBaseTheme};
goladTheme.palette = {...goladTheme.palette, ...goladColors};

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(goladTheme)}>
    <BackgroundPaper>
      <HomePage />
    </BackgroundPaper>
  </MuiThemeProvider>
);

export default App;
