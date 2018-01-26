import React from 'react';
import {shallow} from 'enzyme';
import Game from './game';

describe('Game Component', () =>{

  it('should not fail smoke test', ()=>{
    shallow(<Game />);
  });

});