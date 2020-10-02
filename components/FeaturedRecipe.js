import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

Icon.loadFont();

const FeaturedRecipe = () => {
	return (
		<View style={styles.recipeView}>
			<View style={styles.headingView}>
				<Text style={styles.text}>text</Text>
				<Icon style={styles.text} name="remove" color="red" />
			</View>
			<View style={styles.headingView}>
				<Text style={styles.text}>text</Text>
				<Icon style={styles.text} name="remove" color="red" />
			</View>
			<View style={styles.headingView}>
				<Text style={styles.text}>text</Text>
				<Icon style={styles.text} name="remove" color="red" />
			</View>
			<View style={styles.headingView}>
				<Text style={styles.text}>text</Text>
				<Icon style={styles.text} name="remove" color="red" />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	recipeView: {
		margin: 20
	},
	headingView: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 100
	},
	text: {
		fontSize: 30
	}
});

export default FeaturedRecipe;
