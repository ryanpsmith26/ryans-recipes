import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

const RecipeListItem = ({ name, image }) => {
	return (
		<View style={styles.listItemView}>
			<Image source={image} style={styles.listItemImg} />
			<Text style={styles.listItemText}>{name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	listItemView: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	listItemImg: {
		width: 70,
		height: 70,
		borderRadius: 10,
		margin: 10
	},
	listItemText: {
		fontSize: 15
	}
});

export default RecipeListItem;
