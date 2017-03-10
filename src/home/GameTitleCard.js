import React from 'react';
import {Card, CardText} from 'material-ui/Card';
import {red500, indigo500} from 'material-ui/styles/colors';
import Icon from './Icon';

const GameModeCard = () => (
  <Card style={{marginTop: '30px'}}>
    <CardText>
      <Icon width='50%' maxWidth='300px' playerColor={red500} opponentColor={indigo500}/>
      <div style={{marginTop: '1em', fontSize: '2em'}}>Game of Life and Death</div>
    </CardText>
  </Card>
);

export default GameModeCard;
