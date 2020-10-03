import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Image } from 'react-native';
import { AppLoading } from 'expo';
import { CoveredByYourGrace_400Regular, useFonts } from '@expo-google-fonts/covered-by-your-grace';
import { connect } from 'react-redux';

import NavBar from '../components/NavBar';

const recipeInfo = {
	name: 'Braised Short Ribs over Rice!',
	ingredients: [
		'Short ribs',
		'White Rice',
		'Chipotles in abodo',
		'Onion',
		'Garlic',
		'Avocado',
		'Avocado oil (or any high heat oil)',
		'Cumin',
		'Cayenne',
		'S/P'
	],
	directions: [
		'Preheat oven to 300F',
		'Add some avocado oil to a dutch oven and get it ripping hot',
		'Place in your short ribs and brown on all sides',
		'Remove the beef and set aside',
		'Add your onion and garlic to the pot',
		'Saute until soft, picking up the fond at the bottom of the pot; add some liquid as needed to do so',
		'Pour in your broth, cover and bring to a simmer',
		'Place your beef into the bath and put the pot covered into the preheated oven',
		'Check on it every hour and remove from oven when the beef easily falls apart',
		'Shred the beef with two forks, remove the bones and enjoy!'
	],
	image: require('../assets/img/brisket-avocado.jpeg')
};

const RecipeScreen = ({ navigation }) => {
	let [ fontsLoaded ] = useFonts({
		CoveredByYourGrace_400Regular
	});

	if (!fontsLoaded) return <AppLoading />;
	else {
		return (
			<SafeAreaView style={styles.recipeView}>
				<ScrollView>
					{/* Recipe Image: */}
					<Image source={recipeInfo.image} style={styles.img} />
					<View style={styles.recipeContent}>
						{/* Recipe Name: */}
						<Text style={[ styles.recipesHeadings, styles.recipeTitle ]}>{recipeInfo.name}</Text>
						{/* Ingredients: */}
						<View style={styles.recipesContentSection}>
							<Text style={[ styles.recipesHeadings, styles.recipeSubHeading ]}>Ingredients</Text>
							{recipeInfo.ingredients.map((ingredient, i) => (
								<Text key={i} style={styles.singleIngredient}>
									- {ingredient}
								</Text>
							))}
						</View>
						{/* Directions: */}
						<View style={styles.recipesContentSection}>
							<Text style={[ styles.recipesHeadings, styles.recipeSubHeading ]}>Directions</Text>
							{recipeInfo.directions.map((direction, i) => (
								<View key={i} style={styles.singleDirectionView}>
									<Text style={styles.singleDirection}>- </Text>
									<Text style={styles.singleDirection}>{direction}</Text>
								</View>
							))}
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
	img: {
		height: 400,
		width: '100%',
		resizeMode: 'cover',
		opacity: 0.75
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
		fontWeight: 'bold',
		fontSize: 20,
		letterSpacing: 2
	},
	singleIngredient: {
		marginTop: 10,
		fontSize: 15
	},
	singleDirectionView: {
		flexDirection: 'row',
		marginTop: 15
	},
	singleDirection: {
		fontSize: 15
	}
});

const mapState = (state) => ({});

export default connect(mapState)(RecipeScreen);
