// ACTION TYPES
const GET_RECIPES = 'GET_RECIPES';
const ADD_RECIPE = 'ADD_RECIPE';
const DELETE_RECIPE = 'DELETE_RECIPE';

// ACTION CREATORS
export const getRecipes = () => ({
	type: GET_RECIPES
});

export const addRecipe = (recipe) => ({
	type: ADD_RECIPE,
	recipe
});

export const deleteRecipe = (id) => ({
	type: DELETE_RECIPE,
	id
});

// INITIAL STATE
const initialState = require('../data/stock-recipes');

// REDUCER
export const recipesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_RECIPES:
			return state;
		case ADD_RECIPE:
			return [ ...state, action.recipe ];
		case DELETE_RECIPE:
			console.log('in reducer-->', action.id);
			return state.filter((recipe) => recipe.id !== action.id);
		default:
			return state;
	}
};
