import React from 'react';
import { shallow } from 'enzyme';
import IncorrectLetter from './IncorrectLetter';
import '../../setup';

describe('IncorrectLetter', () => {
	describe('Rendering', () => {
		it('should match to snapshot', () => {
			const component = shallow(<IncorrectLetter />);
			expect(component).toMatchSnapshot();
		});
	});
});
