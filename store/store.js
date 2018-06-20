import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

const storeInitialState = {};

export default (initialState = storeInitialState) =>
	createStore(
		reducers,
		initialState,
		compose(
			applyMiddleware(thunkMiddleware),
			typeof window === 'object' &&
			typeof window.devToolsExtension !== 'undefined'
				? window.devToolsExtension()
				: f => f
		)
	);
