import React from 'react';
import GameModeCard from './GameModeCard';
import {Grid, Row, Col} from 'react-flexbox-grid';
import GameTitleCard from './GameTitleCard';

const HomePage = () => (
  <Grid fluid>
    <Row center="xs">
      <Col xs={12} md={8} lg={4}>
        <GameTitleCard />
      </Col>
    </Row>
    <Row center="xs" style={{textAlign: "center"}}>
      <Col xs={12} md={8} lg={4} style={{textAlign: "center"}}>
        <GameModeCard
          name="Play with a friend"
          description="Press to get a link. Share the link with the opponent. The game will start once they open it."
        ></GameModeCard>
      </Col>
      <Col xs={12} md={8} lg={4} style={{textAlign: "center"}}>
        <GameModeCard
          name="Local game"
          description="Play with a friend on the same device. Take turns."
        ></GameModeCard>
      </Col>
      <Col xs={12} md={8} lg={4} style={{textAlign: "center"}}>
        <GameModeCard
          name="Random opponent"
          description="We will choose an opponent for you among others currently on the website."
        ></GameModeCard>
      </Col>
    </Row>
  </Grid>
);

export default HomePage;
