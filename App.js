import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import WelcomeScreen from './screens/WelcomeScreen';
import AllRecipesScreen from './screens/AllRecipesScreen';
import RecipeScreen from './screens/RecipeScreen';

const Stack = createStackNavigator();

const StackNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen name="Welcome" component={WelcomeScreen} options={headerStyle} />
		<Stack.Screen name="Explore" component={AllRecipesScreen} options={headerStyle} />
		<Stack.Screen name="Recipe" component={RecipeScreen} options={headerStyle} />
	</Stack.Navigator>
);

export default function App() {
	return (
		<NavigationContainer>
			<StackNavigator />
		</NavigationContainer>
	);
}

const headerStyle = {
	headerStyle: { backgroundColor: 'dodgerblue' },
	headerTintColor: '#000'
};
