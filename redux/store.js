import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

// ACTION TYPES
const GET_RECIPES = 'GET_RECIPES';
const ADD_RECIPE = 'ADD_RECIPE';

// ACTION CREATORS
export const getRecipes = () => ({
	type: GET_RECIPES
});

export const addRecipe = (recipe) => ({
	type: ADD_RECIPE,
	recipe
});

// INITIAL STATE
const initialState = require('../data/stock-recipes');

// REDUCER
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_RECIPES:
			return state;
		case ADD_RECIPE:
			return [ ...state, action.recipe ];
		default:
			return state;
	}
};

// STORE
export const store = createStore(reducer, applyMiddleware(createLogger({ collapsed: true })));
