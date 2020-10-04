import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import { AntDesign } from '@expo/vector-icons';

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
						/>
						<TouchableOpacity onPress={handleSubmit}>
							<AntDesign name="pluscircleo" size={30} color="black" />
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
		backgroundColor: '#66b3ff',
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
		color: '#fff',
		marginBottom: 8
	},
	time: {
		color: '#fff',
		marginLeft: 20
	}
});

export default SubFormTime;
