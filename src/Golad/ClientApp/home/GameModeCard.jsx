import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardText} from 'material-ui/Card';

const GameModeCard = ({name, description, isPrimary}) => (
  <Card style={{
    marginTop: '20px',
  }}>
    <CardText>
      <FlatButton label={name} primary={isPrimary} secondary={!isPrimary} />
      <p>{description}</p>
    </CardText>
  </Card>
);

export default GameModeCard;
