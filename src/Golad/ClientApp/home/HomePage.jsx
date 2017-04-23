import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Icon from './Icon';

const HomePageHero = (props) => (<div style={{
  backgroundColor: '#202020',
  padding: '10vh',
  textAlign: 'center'
}}>
  {props.children}
</div>)

const StyledIcon = (props) => (<Icon
  style={{maxWidth: '50vw'}}
  height="20vh"
  playerColor={props.muiTheme.palette.primary2Color}
  opponentColor={props.muiTheme.palette.accent2Color}
/>)

class HomePage extends Component {
  render() {
    return (
      <div>
        <HomePageHero>
          <StyledIcon muiTheme={this.props.muiTheme}/>
          <div style={{paddingTop: 20}}>Game of Life and Death</div>
        </HomePageHero>
        <List style={{padding: 0}}>
          <ListItem primaryText="Random opponent" />
          <ListItem primaryText="Singleplayer" />
          <ListItem primaryText="Play with a friend" />
          <ListItem primaryText="Local game" />
        </List>
      </div>
    )
  }
}

export default muiThemeable()(HomePage);
