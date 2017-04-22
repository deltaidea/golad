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
  attrs={{
    height: '20vh',
    style: {
      maxWidth: '50vw',
    },
  }}
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
          <ListItem
            primaryText="Random opponent"
            secondaryText="We will choose an opponent for you among others currently on the website"
            secondaryTextLines={2}
          />
          <ListItem
            primaryText="Singleplayer"
            secondaryText="Play against an AI. Works even offline"
            secondaryTextLines={2}
          />
          <ListItem
            primaryText="Play with a friend"
            secondaryText="Press to get a link. Share the link with the opponent. The game will start once they open it"
            secondaryTextLines={2}
          />
          <ListItem
            primaryText="Local game"
            secondaryText="Play with a friend on the same device. Take turns"
            secondaryTextLines={2}
          />
        </List>
      </div>
    )
  }
}

export default muiThemeable()(HomePage);
