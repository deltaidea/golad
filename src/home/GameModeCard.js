import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardText} from 'material-ui/Card';

const GameModeCard = ({name, description}) => (
  <Card style={{
    height: '150px',
    paddingTop: '10px',
    marginTop: '30px',
  }}>
    <CardText>
      <RaisedButton label={name} />
      <p>{description}</p>
    </CardText>
  </Card>
);

export default GameModeCard;
