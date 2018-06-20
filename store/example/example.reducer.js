import EXAMPLE_DATA from './example.types';

const initialState = {
	exampleData: "Default Value"
};

const exampleReducer = (state = initialState, action) => {
	switch (action.type) {
		case EXAMPLE_DATA:
			return Object.assign({}, state, {
				exampleData: action.value
			});
		default:
			return state;
	}
};

export default exampleReducer;
