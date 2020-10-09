import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import { AntDesign } from '@expo/vector-icons';

import colors from '../config/colors';

const SubFormIngredients = ({ ingredients, setIngredients }) => {
	return (
		<Formik
			initialValues={{ ingredient: '' }}
			onSubmit={(values) => setIngredients([ ...ingredients, values.ingredient ])}
		>
			{({ handleChange, handleSubmit }) => (
				<View>
					<View style={styles.formInputView}>
						<TextInput
							style={styles.formInput}
							placeholder="Enter Ingredient"
							onChangeText={handleChange('ingredient')}
							clearTextOnFocus={true}
							onSubmitEditing={handleSubmit}
						/>
						<TouchableOpacity onPress={handleSubmit}>
							<AntDesign name="pluscircleo" size={30} color={colors.black} />
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
	);
};

const styles = StyleSheet.create({
	formInputView: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	formInput: {
		backgroundColor: colors.light,
		borderRadius: 25,
		height: 50,
		width: '88%',
		paddingHorizontal: 20,
		marginVertical: 20,
		marginRight: 15,
		fontSize: 20
	},
	renderedInputText: {
		fontSize: 20,
		color: colors.light,
		marginBottom: 8,
		marginLeft: 20
	}
});

export default SubFormIngredients;
