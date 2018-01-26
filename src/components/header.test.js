import React from 'react';
import {shallow} from 'enzyme';
import Header from './header';

describe('Header componenet', () =>{
  it('should pass smoke test', () => {
    shallow(<Header />);
  });
  
  it('should render the game title', () =>{
    const wrapper = shallow(<Header />);
    expect(wrapper.contains(<h1>HOT or COLD</h1>));
  });
});