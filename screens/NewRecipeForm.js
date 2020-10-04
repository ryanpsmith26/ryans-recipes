import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

import NavBar from '../components/NavBar';
import SubFormRecipeName from '../components/SubFormRecipeName';
import SubFormIngredients from '../components/SubFormIngredients';
import SubFormDirections from '../components/SubFormDirections';
import SubFormTime from '../components/SubFormTime';

const NewRecipeForm = ({ navigation, recipes }) => {
	const [ recipeName, setRecipeName ] = useState('');
	const [ time, setTime ] = useState(0);
	const [ ingredients, setIngredients ] = useState([]);
	const [ directions, setDirections ] = useState([]);

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
			<TouchableOpacity style={styles.submitBtn}>
				<Text style={styles.submitBtnText}>Submit</Text>
			</TouchableOpacity>
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
		alignItems: 'center',
		minHeight: 1000
	},
	header: {
		color: '#fff',
		textAlign: 'center',
		letterSpacing: 2,
		fontSize: 20,
		marginTop: 25,
		fontWeight: 'bold'
	},
	submitBtn: {
		backgroundColor: '#2650c9',
		borderRadius: 25,
		margin: 20,
		padding: 12
	},
	submitBtnText: {
		textAlign: 'center',
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold'
	}
});

const mapState = (state) => ({
	recipes: state
});

export default connect(mapState)(NewRecipeForm);
