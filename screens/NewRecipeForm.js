import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import NavBar from '../components/NavBar';

const NewRecipeForm = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.recipeFormView}>
			<View style={styles.recipeForm}>
				<TextInput style={styles.formInput} placeholder="Recipe Name" />
				<TextInput style={styles.formInput} placeholder="Ingredients" />
				<TextInput
					style={[ styles.formInput, styles.directionsInput ]}
					placeholder="Directions"
					multiline={true}
					numberOfLines={3}
				/>
			</View>
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
		marginTop: 20,
		alignItems: 'center'
	},
	formInput: {
		backgroundColor: '#66b3ff',
		borderRadius: 25,
		height: 50,
		width: '85%',
		paddingHorizontal: 20,
		marginVertical: 10,
		fontSize: 20
	},
	directionsInput: {
		height: 100,
		paddingTop: 15,
		paddingHorizontal: 20
	}
});

export default NewRecipeForm;
