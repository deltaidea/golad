import React from 'react';
import BackgroundPaper from './BackgroundPaper';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardText} from 'material-ui/Card';

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <BackgroundPaper>
      <div style={{textAlign: "center"}}>
        <Card>
          <CardText>
            <RaisedButton label="1v1" />
            <p>A regular 1v1 game. Press to get a link. Share the link with the opponent. The game will start once they open it.</p>
          </CardText>
        </Card>
      </div>
    </BackgroundPaper>
  </MuiThemeProvider>
);

export default App;
