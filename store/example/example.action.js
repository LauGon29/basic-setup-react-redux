import EXAMPLE_DATA from './example.types';

export function exampleAction(value) {
	return {
		type: EXAMPLE_DATA,
		value
	};
}
