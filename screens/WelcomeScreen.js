import React from 'react';
import { StyleSheet, SafeAreaView, Text, Image } from 'react-native';
import { useFonts } from 'expo-font';

import NavBar from '../components/NavBar';

const WelcomeScreen = ({ navigation }) => {
	useFonts({
		'covered-by-your-grace': require('../assets/fonts/CoveredByYourGrace-Regular.ttf')
	});

	return (
		<SafeAreaView style={styles.welcomeView}>
			<Text style={styles.welcomeHeading}>Ryan's Recipes!</Text>
			<Image source={require('../assets/img/frost-kitchen-1.jpeg')} style={styles.welcomeImg} />
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
		marginTop: 30,
		fontFamily: 'covered-by-your-grace',
		letterSpacing: 7
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
