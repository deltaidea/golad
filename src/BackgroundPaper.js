import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

/**
 * Just a plain div that takes up the whole screen and
 * applies background color based on the theme.
 *
 * Pages that led to this solution:
 * - http://www.material-ui.com/#/customization/themes
 * - http://stackoverflow.com/a/40746742
 * - http://stackoverflow.com/q/38428322
 */
const BackgroundPaper = (props) => (
  <div style={{
    backgroundColor: props.muiTheme.palette.canvasColor,
    width: "100%",
    height: "100%",
  }}>
    {props.children}
  </div>
);

export default muiThemeable()(BackgroundPaper);
