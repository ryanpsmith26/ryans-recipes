import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import { AntDesign } from '@expo/vector-icons';

import colors from '../config/colors';

const SubFormTime = ({ time, setTime }) => {
	return (
		<Formik initialValues={{ time: 0 }} onSubmit={(values) => setTime(values.time)}>
			{({ handleChange, handleSubmit }) => (
				<View>
					<View style={styles.formInputView}>
						<TextInput
							style={styles.formInput}
							placeholder="Enter Cook Time (minutes)"
							onChangeText={handleChange('time')}
							clearTextOnFocus={true}
							keyboardType="number-pad"
							onSubmitEditing={handleSubmit}
						/>
						<TouchableOpacity onPress={handleSubmit}>
							<AntDesign name="pluscircleo" size={30} color={colors.black} />
						</TouchableOpacity>
					</View>

					{time > 0 && <Text style={[ styles.renderedInputText, styles.time ]}>{time} minutes</Text>}
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
		color: colors.white,
		marginBottom: 8,
		marginLeft: 20
	},
	time: {
		color: colors.white
	}
});

export default SubFormTime;
