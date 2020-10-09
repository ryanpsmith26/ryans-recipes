import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { LogBox } from 'react-native';

import { store } from './redux/store';
import WelcomeScreen from './screens/WelcomeScreen';
import AllRecipesScreen from './screens/AllRecipesScreen';
import NewRecipeForm from './screens/NewRecipeForm';
import RecipeScreen from './screens/RecipeScreen';

import colors from './config/colors';

const Stack = createStackNavigator();

const StackNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="Welcome"
			component={WelcomeScreen}
			options={{
				...headerStyle,
				headerShown: false
			}}
		/>
		<Stack.Screen name="Explore" component={AllRecipesScreen} options={headerStyle} />
		<Stack.Screen name="New Recipe" component={NewRecipeForm} options={headerStyle} />
		<Stack.Screen name="Recipe" component={RecipeScreen} options={headerStyle} />
	</Stack.Navigator>
);

export default function App() {
	LogBox.ignoreLogs([ 'Warning: ...' ]); // Ignore log notification by message
	LogBox.ignoreAllLogs(); // Ignore all log notifications

	return (
		<Provider store={store}>
			<NavigationContainer>
				<StackNavigator />
			</NavigationContainer>
		</Provider>
	);
}

// refactor to place headerStyle on Stack.Navigator for ALL stacks
const headerStyle = {
	headerStyle: { backgroundColor: colors.medium },
	headerTintColor: colors.black
};
