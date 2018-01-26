import React from 'react';
import GuessCount from './guess-count';
import {shallow} from 'enzyme';


describe('Count is not rendering', () => {
    it('Shallow test is failing', () => {
        shallow(<GuessCount/>);
    })
});