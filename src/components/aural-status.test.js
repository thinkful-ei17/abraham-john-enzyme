import React from 'react';
import AuralStatus from './aural-status';
import {shallow} from 'enzyme';

describe("It's invisible!!!!", () => {
    it('Yup...Still invisible', () => {
        const wrapper = shallow(<AuralStatus/>)
        wrapper.contains(<p></p>)
    })
})
