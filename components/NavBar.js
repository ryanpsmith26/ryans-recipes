import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NavBar = ({ nav }) => {
	return (
		<View style={styles.navBarView}>
			<TouchableOpacity activeOpacity={0.3} onPress={() => nav.navigate('Welcome')}>
				<Entypo name="home" size={30} color="#fff" />
			</TouchableOpacity>
			<TouchableOpacity onPress={() => nav.navigate('Explore')}>
				<Entypo name="bowl" size={30} color="#fff" />
			</TouchableOpacity>
			<TouchableOpacity onPress={() => nav.navigate('New Recipe')}>
				<Entypo name="plus" size={40} color="#fff" />
			</TouchableOpacity>
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
