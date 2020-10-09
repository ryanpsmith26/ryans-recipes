import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

import NavBar from '../components/NavBar';
import SubFormRecipeName from '../components/SubFormRecipeName';
import SubFormIngredients from '../components/SubFormIngredients';
import SubFormDirections from '../components/SubFormDirections';
import SubFormTime from '../components/SubFormTime';
import { addRecipe } from '../redux/recipes';

import colors from '../config/colors';

const NewRecipeForm = ({ navigation, recipes, addRecipe }) => {
	const [ recipeName, setRecipeName ] = useState('');
	const [ time, setTime ] = useState(0);
	const [ ingredients, setIngredients ] = useState([]);
	const [ directions, setDirections ] = useState([]);

	const handleSubmit = () => {
		addRecipe({
			id: recipes.length + 1,
			name: recipeName,
			time: `${time} minutes`,
			ingredients,
			directions,
			image: require('../assets/img/default.jpg')
		});
		navigation.navigate('Recipe', { id: recipes.length + 1 });
	};

	return (
		<SafeAreaView style={styles.recipeFormView}>
			<ScrollView>
				<Text style={styles.header}>Enter your Recipe Details here!</Text>

				<View style={styles.recipeForm}>
					<SubFormRecipeName recipeName={recipeName} setRecipeName={setRecipeName} />
					<SubFormTime time={time} setTime={setTime} />
					<SubFormIngredients ingredients={ingredients} setIngredients={setIngredients} />
					<SubFormDirections directions={directions} setDirections={setDirections} />
				</View>
			</ScrollView>
			<TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
				<Text style={styles.submitBtnText}>Submit</Text>
			</TouchableOpacity>
			<NavBar nav={navigation} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	recipeFormView: {
		flex: 1,
		backgroundColor: colors.medium,
		justifyContent: 'space-between'
	},
	recipeForm: {
		margin: 15,
		alignItems: 'center',
		minHeight: 1000
	},
	header: {
		color: colors.white,
		textAlign: 'center',
		letterSpacing: 2,
		fontSize: 20,
		marginTop: 25,
		fontWeight: 'bold'
	},
	submitBtn: {
		backgroundColor: colors.dark,
		borderRadius: 25,
		margin: 20,
		padding: 12
	},
	submitBtnText: {
		textAlign: 'center',
		color: colors.white,
		fontSize: 20,
		fontWeight: 'bold'
	}
});

const mapState = (state) => ({
	recipes: state.recipes
});

const mapDispatch = (dispatch) => ({
	addRecipe: (recipe) => dispatch(addRecipe(recipe))
});

export default connect(mapState, mapDispatch)(NewRecipeForm);
