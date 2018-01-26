import React from 'react';
import {shallow} from 'enzyme';
import StatusSection from './status-section';


describe('Status-Section tests', () => {
    it("It's doing ok!", () => {
        const arr = ['34','32'];
        shallow(<StatusSection guesses= {arr} />)
    })
})