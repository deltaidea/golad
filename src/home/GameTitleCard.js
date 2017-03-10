import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardText} from 'material-ui/Card';
import Icon from './Icon';

const GameModeCard = (props) => (
  <Card style={{
    marginTop: '30px',
  }}>
    <CardText>
      <Icon style={{
        display: 'inline-block',
        marginBottom: '3em',
        width: '50%',
        maxWidth: '300px',
      }}/>
      <div style={{
        fontSize: '2em',
      }}>Game of Life and Death</div>
    </CardText>
  </Card>
);

export default GameModeCard;
