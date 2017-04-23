import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import {Link} from 'react-router-dom';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Icon from './Icon';
import IconRandomOpponent from 'material-ui/svg-icons/social/public';
import IconPlayOnline from 'material-ui/svg-icons/social/people';
import IconSingleplayer from 'material-ui/svg-icons/social/person';
import IconPlayOnThisDevice from 'material-ui/svg-icons/hardware/smartphone';

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

const GameMode = ({icon, name}) => (<Link to="/game" style={{textDecoration: 'none'}}>
  <ListItem
    leftIcon={icon}
    primaryText={name}
    innerDivStyle={{
      maxWidth: '1000px',
      margin: 'auto',
    }}
  />
</Link>)

class HomePage extends Component {
  render() {
    return (
      <div>
        <HomePageHero>
          <StyledIcon muiTheme={this.props.muiTheme}/>
          <div style={{paddingTop: 20}}>Game of Life and Death</div>
        </HomePageHero>
        <List style={{padding: 0}}>
          <GameMode icon={<IconRandomOpponent />} name="Random opponent" />
          <GameMode icon={<IconPlayOnline />} name="Play with a friend online" />
          <GameMode icon={<IconSingleplayer />} name="Singleplayer" />
          <GameMode icon={<IconPlayOnThisDevice />} name="Play with a friend on this device" />
        </List>
      </div>
    )
  }
}

export default muiThemeable()(HomePage);
