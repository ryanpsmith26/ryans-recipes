import axios from 'axios';

// ACTION TYPES
const GET_RECIPES = 'GET_RECIPES';
const ADD_RECIPE = 'ADD_RECIPE';
const DELETE_RECIPE = 'DELETE_RECIPE';
// const GET_RECIPE_TEST = 'GET_RECIPE_TEST';

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

// const gotRecipeTest = (recipe) => ({
// 	type: GET_RECIPE_TEST,
// 	recipe
// });

// THUNK CREATORS

// export const getRecipeTest = () => async (dispatch) => {
// 	try {
// 		const { data: recipe } = await axios.get('http://localhost:3000/api/recipes');
// 		dispatch(gotRecipeTest(recipe));
// 	} catch (error) {
// 		console.error(error);
// 	}
// };

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
		// case GET_RECIPE_TEST:
		// 	return [ ...state, action.recipe ];
		default:
			return state;
	}
};
