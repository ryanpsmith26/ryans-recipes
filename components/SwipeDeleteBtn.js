import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

import { deleteRecipe } from '../redux/recipes';

const SwipeDeleteBtn = ({ id, deleteRecipe }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={() => deleteRecipe(id)}>
			<Text style={styles.text}>Delete</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ff4f42'
	},
	text: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 15,
		padding: 30
	}
});

const mapDispatch = (dispatch) => ({
	deleteRecipe: (id) => dispatch(deleteRecipe(id))
});

export default connect(null, mapDispatch)(SwipeDeleteBtn);
