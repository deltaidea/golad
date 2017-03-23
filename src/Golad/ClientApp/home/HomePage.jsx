import React from 'react';
import GameModeCard from './GameModeCard';
import {Grid, Row, Col} from 'react-flexbox-grid';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Icon from './Icon';

const HomePage = ({muiTheme}) => (
  <Grid fluid>
    <Row center="xs">
      <Icon width='50%' maxWidth='300px'
        playerColor={muiTheme.palette.primary2Color}
        opponentColor={muiTheme.palette.accent2Color}/>
      <div style={{marginTop: '1em', fontSize: '2em'}}>Game of Life and Death</div>
    </Row>
    <Row center="xs">
      <Col xs={12} md={8} lg={6}>
        <GameModeCard
          name="Random opponent"
          isPrimary={true}
          description="We will choose an opponent for you among others currently on the website." />
        <GameModeCard
          name="Singleplayer"
          description="Play against an AI." />
        <GameModeCard
          name="Play with a friend"
          description="Press to get a link. Share the link with the opponent. The game will start once they open it." />
        <GameModeCard
          name="Local game"
          description="Play with a friend on the same device. Take turns." />
      </Col>
    </Row>
  </Grid>
);

export default muiThemeable()(HomePage);
