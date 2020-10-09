import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import { recipesReducer } from './recipes';

// STATE:
// {
//	recipes: []
// }

const appReducer = combineReducers({
	recipes: recipesReducer
});

export const store = createStore(appReducer, applyMiddleware(/* createLogger({ collapsed: true }) */));
