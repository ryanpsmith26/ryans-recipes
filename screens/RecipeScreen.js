import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text } from 'react-native';
import { useFonts } from 'expo-font';

import RecipeImage from '../components/RecipeImage';
import NavBar from '../components/NavBar';

const RecipeScreen = ({ navigation }) => {
	useFonts({
		'covered-by-your-grace': require('../assets/fonts/CoveredByYourGrace-Regular.ttf')
	});

	return (
		<SafeAreaView style={styles.recipeView}>
			<ScrollView>
				<RecipeImage />
				<View style={styles.recipeContent}>
					<Text style={[ styles.recipesHeadings, styles.recipeTitle ]}>Braised Short Rib over Rice!</Text>
					<View style={styles.recipesContentSection}>
						<Text style={[ styles.recipesHeadings, styles.recipeSubHeading ]}>Ingredients</Text>
						<Text>Short ribs</Text>
						<Text>Basmati rice</Text>
						<Text>Chipotles in adobo</Text>
						<Text>Onion</Text>
						<Text>Garlic</Text>
						<Text>Avocado oil</Text>
						<Text>Cumin</Text>
						<Text>Cayenne</Text>
						<Text>S/P</Text>
					</View>
					<View>
						<Text style={[ styles.recipesHeadings, styles.recipeSubHeading ]}>Directions</Text>
						<Text>Preheat oven to 300F</Text>
						<Text>Add some avocado oil to a dutch oven and get it ripping hot</Text>
						<Text>Place in your short ribs and brown on all sides</Text>
						<Text>Remove the beef and set aside</Text>
						<Text>Add your onion and garlic to the pot</Text>
						<Text />
						<Text />
						<Text />
						<Text />
						<Text />
					</View>
				</View>
			</ScrollView>
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
	recipeContent: {
		margin: 20
	},
	recipesContentSection: {
		marginBottom: 20
	},
	recipeTitle: {
		fontFamily: 'covered-by-your-grace',
		letterSpacing: 3,
		fontSize: 25,
		marginBottom: 20
	},
	recipesHeadings: {
		color: '#fff',
		fontWeight: 'bold'
	},
	recipeSubHeading: {},
	recipeText: {}
});

export default RecipeScreen;
