import React from 'react';
import setupTests from '../setupTests';
import Feedback from './feedback'

describe('<Feedback/>', () => {
    it('Renders without crashing'), () => {
        shallow(<Feedback/>);
    };

    it('Make Your Guess'), () => {
        const wrapper = shallow(<Feedback/>);
        expect(wrapper.state('feedback')).toEqual('Make your guess!');
    }
})