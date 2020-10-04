import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import { AntDesign } from '@expo/vector-icons';
import { CoveredByYourGrace_400Regular, useFonts } from '@expo-google-fonts/covered-by-your-grace';
import { AppLoading } from 'expo';

import NavBar from '../components/NavBar';

const NewRecipeForm = ({ navigation }) => {
	let [ fontsLoaded ] = useFonts({
		CoveredByYourGrace_400Regular
	});

	const [ recipeName, setRecipeName ] = useState('');
	const [ ingredients, setIngredients ] = useState([]);
	const [ directions, setDirections ] = useState([]);

	if (!fontsLoaded) return <AppLoading />;
	else {
		return (
			<SafeAreaView style={styles.recipeFormView}>
				<ScrollView>
					<View style={styles.recipeForm}>
						<Formik initialValues={{ name: '' }} onSubmit={(values) => setRecipeName(values.name)}>
							{({ handleChange, handleSubmit }) => (
								<View style={styles.subFormView}>
									<View style={styles.formInputView}>
										<TextInput
											style={styles.formInput}
											placeholder="Enter Recipe Name"
											onChangeText={handleChange('name')}
											clearTextOnFocus={true}
										/>
										<TouchableOpacity onPress={handleSubmit}>
											<AntDesign name="pluscircleo" size={30} color="black" />
										</TouchableOpacity>
									</View>
									<Text style={[ styles.renderedInputText, styles.renderedRecipeName ]}>
										{recipeName}
									</Text>
								</View>
							)}
						</Formik>
						<Formik
							initialValues={{ ingredient: '' }}
							onSubmit={(values) => setIngredients([ ...ingredients, values.ingredient ])}
						>
							{({ handleChange, handleSubmit }) => (
								<View style={styles.subFormView}>
									<View style={styles.formInputView}>
										<TextInput
											style={styles.formInput}
											placeholder="Enter Ingredient"
											onChangeText={handleChange('ingredient')}
											clearTextOnFocus={true}
										/>
										<TouchableOpacity onPress={handleSubmit}>
											<AntDesign name="pluscircleo" size={30} color="black" />
										</TouchableOpacity>
									</View>
									{ingredients.map((ingredient, i) => (
										<Text key={i} style={styles.renderedInputText}>
											- {ingredient}
										</Text>
									))}
								</View>
							)}
						</Formik>
						<Formik
							initialValues={{ direction: '' }}
							onSubmit={(values) => setDirections([ ...directions, values.direction ])}
						>
							{({ handleChange, handleSubmit }) => (
								<View style={styles.subFormView}>
									<View style={styles.formInputView}>
										<TextInput
											style={[ styles.formInput, styles.directionsInput ]}
											placeholder="Enter Direction"
											multiline={true}
											numberOfLines={3}
											onChangeText={handleChange('direction')}
											clearTextOnFocus={true}
										/>
										<TouchableOpacity onPress={handleSubmit}>
											<AntDesign name="pluscircleo" size={30} color="black" />
										</TouchableOpacity>
									</View>
									{directions.map((direction, i) => (
										<Text key={i} style={styles.renderedInputText}>
											- {direction}
										</Text>
									))}
								</View>
							)}
						</Formik>
					</View>
				</ScrollView>
				<NavBar nav={navigation} />
			</SafeAreaView>
		);
	}
};

const styles = StyleSheet.create({
	recipeFormView: {
		flex: 1,
		backgroundColor: 'dodgerblue',
		justifyContent: 'space-between'
	},
	recipeForm: {
		margin: 20,
		alignItems: 'center'
	},
	formInputView: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	formInput: {
		backgroundColor: '#66b3ff',
		borderRadius: 25,
		height: 50,
		width: '88%',
		paddingHorizontal: 20,
		marginVertical: 20,
		marginRight: 15,
		fontSize: 20
	},
	directionsInput: {
		height: 100,
		paddingTop: 15,
		paddingHorizontal: 20
	},
	renderedRecipeName: {
		fontFamily: 'CoveredByYourGrace_400Regular',
		letterSpacing: 3,
		fontSize: 25,
		textAlign: 'center'
	},
	renderedInputText: {
		fontSize: 20,
		color: '#fff',
		marginBottom: 8
	}
});

export default NewRecipeForm;
