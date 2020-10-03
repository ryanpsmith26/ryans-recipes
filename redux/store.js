import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

// ACTION TYPES
const GET_RECIPES = 'GET_RECIPES';

// ACTION CREATORS
export const getRecipes = () => ({
	type: GET_RECIPES
});

// INITIAL STATE
const initialState = require('../data/stock-recipes');

// REDUCER
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_RECIPES:
			return state;
		default:
			return state;
	}
};

// STORE
export const store = createStore(reducer, applyMiddleware(createLogger({ collapsed: true })));
