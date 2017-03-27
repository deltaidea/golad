import React from 'react';
import {shallow} from 'enzyme';
import Icon from './Icon';

test('it renders svg with specified colors', () => {
  const icon = shallow(<Icon playerColor="#111111" opponentColor="#222222" />);

  expect(icon.find('rect[x="0"][y="0"]').prop('fill')).toEqual('#111111');
  expect(icon.find('rect[x="100"][y="100"]').prop('fill')).toEqual('#222222');
});
