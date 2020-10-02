import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

import RecipeImage from '../components/RecipeImage';
import NavBar from '../components/NavBar';

const RecipeScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.recipeView}>
			<RecipeImage />
			<Text style={[ styles.recipesAllText, styles.recipeTitle ]}>Shredded Short Ribs over Rice!</Text>
			<Text style={[ styles.recipesAllText, styles.recipeSubHeading ]}>Ingredients</Text>
			<Text>Short Ribs</Text>
			<Text>Short Ribs</Text>
			<Text>Short Ribs</Text>
			<Text style={[ styles.recipesAllText, styles.recipeSubHeading ]}>Directions</Text>
			<Text>Preheat oven</Text>
			<Text>Preheat oven</Text>
			<Text>Preheat oven</Text>
			<NavBar nav={navigation} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	recipeView: {
		flex: 1,
		backgroundColor: 'dodgerblue',
		justifyContent: 'space-between'
	},
	recipesAllText: {
		color: '#fff',
		fontWeight: 'bold'
	},
	recipeTitle: {
		textAlign: 'center',
		marginBottom: 20
	},
	recipeSubHeading: {},
	recipeText: {}
});

export default RecipeScreen;
