import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const NavBar = ({ nav }) => {
	return (
		<View style={styles.navBarView}>
			<Entypo name="home" size={30} color="#fff" onPress={() => nav.navigate('Welcome')} />
			<Entypo name="bowl" size={30} color="#fff" onPress={() => nav.navigate('Explore')} />
			<Entypo name="heart" size={30} color="#fff" onPress={() => nav.navigate('Recipe')} />
		</View>
	);
};

const styles = StyleSheet.create({
	navBarView: {
		borderTopWidth: 0.25,
		borderTopColor: '#fff',
		flex: -1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		paddingTop: 10
	}
});

export default NavBar;
