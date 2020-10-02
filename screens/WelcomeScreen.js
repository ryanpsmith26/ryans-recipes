import React from 'react';
import { StyleSheet, SafeAreaView, View, ImageBackground, Text, Image } from 'react-native';

import NavBar from '../components/NavBar';

const WelcomeScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.welcomeView}>
			<Text style={styles.welcomeHeading}>Ryan's Recipes!</Text>
			<Image source={require('../img/frost-kitchen-1.jpeg')} style={styles.welcomeImg} />
			<NavBar style={styles.navbar} nav={navigation} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	welcomeView: {
		flex: 1,
		backgroundColor: 'dodgerblue',
		justifyContent: 'space-between'
	},
	welcomeHeading: {
		textAlign: 'center',
		color: '#fff',
		fontSize: 30,
		marginTop: 30
	},
	welcomeImg: {
		height: 600,
		width: '100%',
		resizeMode: 'cover',
		opacity: 0.8
	},
	navbar: {
		position: 'absolute',
		bottom: 40
	}
});

export default WelcomeScreen;
