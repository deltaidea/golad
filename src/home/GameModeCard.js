import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardText} from 'material-ui/Card';

const GameModeCard = (props) => (
  <Card style={{
    height: '150px',
    paddingTop: '10px',
    marginTop: '30px',
  }}>
    <CardText>
      <RaisedButton label={props.name} />
      <p>{props.description}</p>
    </CardText>
  </Card>
);

export default GameModeCard;
