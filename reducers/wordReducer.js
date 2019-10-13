export const wordReducer = (state = [], action) => {
	switch (action.type) {
		case 'LOAD_WORDS':
			return action.words;
		default:
			return state;
	}
};
