import React from 'react';
import GameModeCard from './GameModeCard';
import {Grid, Row, Col} from 'react-flexbox-grid';
import GameTitleCard from './GameTitleCard';

const SameSizeCol = ({children}) => <Col xs={12} md={8} lg={4}>{children}</Col>

const GameModeCol = (props) => <SameSizeCol><GameModeCard {...props} /></SameSizeCol>

const HomePage = () => (
  <Grid fluid>
    <Row center="xs">
      <SameSizeCol><GameTitleCard /></SameSizeCol>
    </Row>
    <Row center="xs">
      <GameModeCol
        name="Play with a friend"
        description="Press to get a link. Share the link with the opponent. The game will start once they open it." />
      <GameModeCol
        name="Local game"
        description="Play with a friend on the same device. Take turns." />
      <GameModeCol
        name="Random opponent"
        description="We will choose an opponent for you among others currently on the website." />
    </Row>
  </Grid>
);

export default HomePage;
