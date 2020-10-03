import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const RecipeListItem = ({ name, image, time }) => {
	return (
		<View style={styles.listItemView}>
			<Image source={image} style={styles.listItemImg} />
			<View>
				<Text style={styles.listItemName}>{name}</Text>
				<View style={styles.timeView}>
					<MaterialIcons name="timer" size={18} color="#fff" />
					<Text style={styles.listItemTime}>{time}</Text>
				</View>
			</View>
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
	listItemName: {
		fontSize: 15,
		fontWeight: 'bold',
		marginBottom: 8
	},
	listItemTime: {
		color: '#fff',
		marginLeft: 5
	},
	timeView: {
		flexDirection: 'row'
	}
});

export default RecipeListItem;
