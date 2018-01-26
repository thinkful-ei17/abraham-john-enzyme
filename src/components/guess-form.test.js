import React from 'react';
import GuessForm from './guess-form';
import {shallow} from 'enzyme';


describe('hey man your form is cool', () => {
    it('Yea I know but look at them shallows', () => {
        shallow(<GuessForm />)
    });
});