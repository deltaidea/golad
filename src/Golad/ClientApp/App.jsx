import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import * as colors from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiThemeable from 'material-ui/styles/muiThemeable';
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
const muiTheme = getMuiTheme(goladTheme);

/**
 * Just a plain div that takes up the whole screen and
 * applies background color based on the theme.
 *
 * Pages that led to this solution:
 * - http://www.material-ui.com/#/customization/themes
 * - http://stackoverflow.com/a/40746742
 * - http://stackoverflow.com/q/38428322
 */
const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div style={{
      backgroundColor: muiTheme.palette.canvasColor,
      minWidth: "100%",
      minHeight: "100%",
    }}>
      <HomePage />
    </div>
  </MuiThemeProvider>
);

export default App;
