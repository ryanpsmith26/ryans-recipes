import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import WelcomeScreen from './screens/WelcomeScreen';
import RecipeScreen from './screens/RecipeScreen';

const Stack = createStackNavigator();

const StackNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen name="Welcome" component={WelcomeScreen} />
		<Stack.Screen name="Recipe" component={RecipeScreen} />
	</Stack.Navigator>
);

export default function App() {
	return (
		<NavigationContainer>
			<StackNavigator />
		</NavigationContainer>
	);
}
