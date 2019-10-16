import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import '../../setup';

describe('Header', () => {
	describe('Rendering', () => {
		it('should match to snapshot', () => {
			const component = shallow(<Header />);
			expect(component).toMatchSnapshot();
		});
	});
});
