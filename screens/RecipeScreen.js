import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text } from 'react-native';
import { AppLoading } from 'expo';
import { CoveredByYourGrace_400Regular, useFonts } from '@expo-google-fonts/covered-by-your-grace';

import RecipeImage from '../components/RecipeImage';
import NavBar from '../components/NavBar';

const RecipeScreen = ({ navigation }) => {
	let [ fontsLoaded ] = useFonts({
		CoveredByYourGrace_400Regular
	});

	if (!fontsLoaded) return <AppLoading />;
	else {
		return (
			<SafeAreaView style={styles.recipeView}>
				<ScrollView>
					<RecipeImage />
					<View style={styles.recipeContent}>
						<Text style={[ styles.recipesHeadings, styles.recipeTitle ]}>Braised Short Rib over Rice!</Text>
						<View style={styles.recipesContentSection}>
							<Text style={[ styles.recipesHeadings, styles.recipeSubHeading ]}>Ingredients</Text>
							<Text> - Short ribs</Text>
							<Text> - Basmati rice</Text>
							<Text> - Chipotles in adobo</Text>
							<Text> - Onion</Text>
							<Text> - Garlic</Text>
							<Text> - Avocado oil</Text>
							<Text> - Cumin</Text>
							<Text> - Cayenne</Text>
							<Text> - S/P</Text>
						</View>
						<View>
							<Text style={[ styles.recipesHeadings, styles.recipeSubHeading ]}>Directions</Text>
							<Text> - Preheat oven to 300F</Text>
							<Text> - Add some avocado oil to a dutch oven and get it ripping hot</Text>
							<Text> - Place in your short ribs and brown on all sides</Text>
							<Text> - Remove the beef and set aside</Text>
							<Text> - Add your onion and garlic to the pot</Text>
							<Text>
								{' '}
								- Saute until soft, picking up the fond at the bottom of the pot; add some liquid as
								needed to do so
							</Text>
							<Text> - Pour in your broth, cover and bring to a simmer</Text>
							<Text>
								{' '}
								- Place your beef into the bath and put the pot covered into the preheated oven
							</Text>
							<Text> - Check on it every hour and remove from oven when the beef easily falls apart</Text>
							<Text> - Shred the beef with two forks, remove the bones and enjoy!</Text>
						</View>
					</View>
				</ScrollView>
				<NavBar nav={navigation} />
			</SafeAreaView>
		);
	}
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
		fontFamily: 'CoveredByYourGrace_400Regular',
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
