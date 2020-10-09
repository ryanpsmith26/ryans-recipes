import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';
import { CoveredByYourGrace_400Regular, useFonts } from '@expo-google-fonts/covered-by-your-grace';
import { MaterialIcons } from '@expo/vector-icons';

import NavBar from '../components/NavBar';

import colors from '../config/colors';

const RecipeScreen = ({ navigation, route, recipes }) => {
	let [ fontsLoaded ] = useFonts({
		CoveredByYourGrace_400Regular
	});

	const recipe = recipes.find((recipe) => recipe.id === route.params.id);

	if (!fontsLoaded) return <AppLoading />;
	else {
		return (
			<SafeAreaView style={styles.recipeView}>
				<ScrollView>
					{/* Recipe Image: */}
					<Image source={recipe.image} style={styles.img} />
					<View style={styles.recipeContent}>
						{/* Recipe Name: */}
						<Text style={[ styles.recipesHeadings, styles.recipeTitle ]}>{recipe.name}</Text>
						{/* Cook Time */}
						<View style={styles.timeView}>
							<MaterialIcons name="timer" size={18} color={colors.white} />
							<Text style={styles.time}>{recipe.time}</Text>
						</View>
						{/* Ingredients: */}
						<View style={styles.recipesContentSection}>
							<Text style={[ styles.recipesHeadings, styles.recipeSubHeading ]}>Ingredients</Text>
							{recipe.ingredients.map((ingredient, i) => (
								<Text key={i} style={styles.singleIngredient}>
									- {ingredient}
								</Text>
							))}
						</View>
						{/* Directions: */}
						<View style={styles.recipesContentSection}>
							<Text style={[ styles.recipesHeadings, styles.recipeSubHeading ]}>Directions</Text>
							{recipe.directions.map((direction, i) => (
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
		backgroundColor: colors.medium,
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
		marginBottom: 18
	},
	recipesHeadings: {
		color: colors.white,
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
	},
	timeView: {
		flexDirection: 'row',
		marginBottom: 22
	},
	time: {
		color: colors.white,
		marginLeft: 5
	}
});

const mapState = (state) => ({
	recipes: state.recipes
});

export default connect(mapState)(RecipeScreen);
