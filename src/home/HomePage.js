import React from 'react';
import GameModeCard from './GameModeCard';
import {Grid, Row, Col} from 'react-flexbox-grid';
import GameTitleCard from './GameTitleCard';

const colSizing = {xs: 12, md: 8, lg: 4}

const HomePage = () => (
  <Grid fluid>
    <Row center="xs">
      <Col {...colSizing}><GameTitleCard /></Col>
    </Row>
    <Row center="xs">
      <Col {...colSizing}>
        <GameModeCard
          name="Random opponent"
          isPrimary={true}
          description="We will choose an opponent for you among others currently on the website." />
      </Col>
      <Col {...colSizing} first="lg">
        <GameModeCard
          name="Play with a friend"
          description="Press to get a link. Share the link with the opponent. The game will start once they open it." />
      </Col>
      <Col {...colSizing}>
        <GameModeCard
          name="Local game"
          description="Play with a friend on the same device. Take turns." />
      </Col>
    </Row>
  </Grid>
);

export default HomePage;
