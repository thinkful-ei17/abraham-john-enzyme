import React from 'react';
import Feedback from './feedback';
import {shallow} from 'enzyme';

describe('<Feedback/>', () => {
  it('Renders without crashing', () => {
    shallow(<Feedback />);
  });

  it('Make Your Guess', () => {
    const wrapper = shallow(<Feedback />);
    // expect(wrapper.state('feedback')).toEqual('Make your guess!');
    expect(wrapper.contains(<h2>Make your guess!</h2>));
  });
});