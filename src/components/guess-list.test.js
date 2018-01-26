import React from 'react';
import GuessList from './guess-list';
import {shallow, mount} from 'enzyme';


describe('hey man your form is cool', () => {
    it('Yea I know but look at them shallows', () => {
        const arr = ['<li>to</li>','<li>hey</li>','<li>l</li>'];
        const wrapper = mount(<GuessList guesses={arr}/>);   
        wrapper.update();
        wrapper.contains(<li>to</li>);
    });
});