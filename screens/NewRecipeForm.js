import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import NavBar from '../components/NavBar';

const NewRecipeForm = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.recipeFormView}>
			<Text>Recipe Name</Text>
			<TextInput />
			<NavBar nav={navigation} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	recipeFormView: {
		flex: 1,
		backgroundColor: 'dodgerblue',
		justifyContent: 'space-between'
	}
});

export default NewRecipeForm;
