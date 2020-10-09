import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import { AntDesign } from '@expo/vector-icons';

import colors from '../config/colors';

const SubFormDirections = ({ directions, setDirections }) => {
	return (
		<Formik
			initialValues={{ direction: '' }}
			onSubmit={(values) => setDirections([ ...directions, values.direction ])}
		>
			{({ handleChange, handleSubmit }) => (
				<View>
					<View style={styles.formInputView}>
						<TextInput
							style={[ styles.formInput, styles.directionsInput ]}
							placeholder="Enter Direction"
							multiline={true}
							numberOfLines={3}
							onChangeText={handleChange('direction')}
							clearTextOnFocus={true}
							onSubmitEditing={handleSubmit}
						/>
						<TouchableOpacity onPress={handleSubmit}>
							<AntDesign name="pluscircleo" size={30} color={colors.black} />
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
	directionsInput: {
		height: 100,
		paddingTop: 15,
		paddingHorizontal: 20
	},
	renderedInputText: {
		fontSize: 20,
		color: colors.white,
		marginBottom: 8,
		marginLeft: 20
	}
});

export default SubFormDirections;
