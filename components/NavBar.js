import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const NavBar = ({ nav }) => {
	return (
		<View style={styles.navBarView}>
			<Button title="Home" color="white" onPress={() => nav.navigate('Welcome')} style={styles.NavBtn} />
			<Button title="Recipes" color="white" onPress={() => nav.navigate('Recipe')} style={styles.NavBtn} />
		</View>
	);
};

const styles = StyleSheet.create({
	navBarView: {
		borderTopWidth: 1,
		borderTopColor: '#404040',
		flex: -1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		paddingTop: 10
	},
	NavBtn: {
		fontSize: 30
	}
});

export default NavBar;
