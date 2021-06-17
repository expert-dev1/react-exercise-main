import React from 'react';
import renderer from 'react-test-renderer';

import Timer from './timer';

it('displays time', () => {
    it('renders correctly when there are no items', () => {
        const tree = renderer.create(<Timer />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});