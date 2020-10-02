import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = () => {
	return (
		<View style={styles.header}>
			<Text style={styles.text}>Ryan's Recipes!!</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		backgroundColor: '#cbc2f2',
		height: 135,
		padding: 30
	},
	text: {
		color: '#fff',
		fontSize: 30
	}
});

export default Header;
