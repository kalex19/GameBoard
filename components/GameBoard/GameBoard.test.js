import React from 'react';
import { shallow } from 'enzyme';
import GameBoard from './GameBoard';
import '../../setup';

describe('GameBoard', () => {
	describe('Rendering', () => {
		it('should match to snapshot', () => {
			const component = shallow(<GameBoard />);
			expect(component).toMatchSnapshot();
		});
	});
});
