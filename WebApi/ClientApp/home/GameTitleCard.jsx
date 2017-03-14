import React from 'react';
import {Card, CardText} from 'material-ui/Card';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Icon from './Icon';

const GameModeCard = ({muiTheme}) => (
  <Card style={{marginTop: '30px'}}>
    <CardText>
      <Icon width='50%' maxWidth='300px'
        playerColor={muiTheme.palette.primary2Color}
        opponentColor={muiTheme.palette.accent2Color}/>
      <div style={{marginTop: '1em', fontSize: '2em'}}>Game of Life and Death</div>
    </CardText>
  </Card>
);

export default muiThemeable()(GameModeCard);
