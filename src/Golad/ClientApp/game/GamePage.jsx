import React, {Component} from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

class GamePage extends Component {
  render() {
    return (<h1 style={{margin: 0, padding: 50, textAlign: 'center'}}>GAEM PAGE<br/>IS WORKING!!1</h1>)
  }
}

export default muiThemeable()(GamePage);
