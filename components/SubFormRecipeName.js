import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import { CoveredByYourGrace_400Regular, useFonts } from '@expo-google-fonts/covered-by-your-grace';
import { AntDesign } from '@expo/vector-icons';
import { AppLoading } from 'expo';

import colors from '../config/colors';

const SubFormRecipeName = ({ recipeName, setRecipeName }) => {
	let [ fontsLoaded ] = useFonts({
		CoveredByYourGrace_400Regular
	});

	if (!fontsLoaded) return <AppLoading />;
	else {
		return (
			<Formik initialValues={{ name: '' }} onSubmit={(values) => setRecipeName(values.name)}>
				{({ handleChange, handleSubmit }) => (
					<View>
						<View style={styles.formInputView}>
							<TextInput
								style={styles.formInput}
								placeholder="Enter Recipe Name"
								onChangeText={handleChange('name')}
								clearTextOnFocus={true}
								onSubmitEditing={handleSubmit}
							/>
							<TouchableOpacity onPress={handleSubmit}>
								<AntDesign name="pluscircleo" size={30} color={colors.black} />
							</TouchableOpacity>
						</View>

						{recipeName.length > 0 && (
							<Text style={[ styles.renderedInputText, styles.renderedRecipeName ]}>{recipeName}</Text>
						)}
					</View>
				)}
			</Formik>
		);
	}
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
	renderedRecipeName: {
		fontFamily: 'CoveredByYourGrace_400Regular',
		letterSpacing: 3,
		fontSize: 25
	},
	renderedInputText: {
		fontSize: 20,
		color: colors.white,
		marginBottom: 8,
		marginLeft: 20
	}
});

export default SubFormRecipeName;
