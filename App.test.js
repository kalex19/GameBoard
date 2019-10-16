import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import './setup';

describe('App', () => {
	describe('Rendering', () => {
		it('should match to snapshot', () => {
			const component = shallow(<App navigation />);
			expect(component).toMatchSnapshot();
		});
	});
});
