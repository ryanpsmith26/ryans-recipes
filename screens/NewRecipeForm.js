import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

import NavBar from '../components/NavBar';
import SubFormRecipeName from '../components/SubFormRecipeName';
import SubFormIngredients from '../components/SubFormIngredients';
import SubFormDirections from '../components/SubFormDirections';

const NewRecipeForm = ({ navigation, recipes }) => {
	const [ recipeName, setRecipeName ] = useState('');
	const [ ingredients, setIngredients ] = useState([]);
	const [ directions, setDirections ] = useState([]);

	return (
		<SafeAreaView style={styles.recipeFormView}>
			<ScrollView>
				<Text style={styles.header}>Enter your Recipe Details here!</Text>
				<View style={styles.recipeForm}>
					<SubFormRecipeName recipeName={recipeName} setRecipeName={setRecipeName} />
					<SubFormIngredients ingredients={ingredients} setIngredients={setIngredients} />
					<SubFormDirections directions={directions} setDirections={setDirections} />
				</View>
			</ScrollView>
			<NavBar nav={navigation} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	recipeFormView: {
		flex: 1,
		backgroundColor: 'dodgerblue',
		justifyContent: 'space-between'
	},
	recipeForm: {
		margin: 15,
		alignItems: 'center'
	},
	header: {
		color: '#fff',
		textAlign: 'center',
		letterSpacing: 3,
		fontSize: 20,
		marginTop: 25
	}
});

const mapState = (state) => ({
	recipes: state
});

export default connect(mapState)(NewRecipeForm);
