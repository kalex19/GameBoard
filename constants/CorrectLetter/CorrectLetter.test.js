import React from 'react';
import { shallow } from 'enzyme';
import CorrectLetter from './CorrectLetter';
import '../../setup';

describe('CorrectLetter', () => {
	describe('Rendering', () => {
		it('should match to snapshot', () => {
			const component = shallow(<CorrectLetter />);
			expect(component).toMatchSnapshot();
		});
	});
});
