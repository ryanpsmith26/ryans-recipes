import React from 'react';
import { StyleSheet, SafeAreaView, Text, Image, Dimensions } from 'react-native';
import { AppLoading } from 'expo';
import { CoveredByYourGrace_400Regular, useFonts } from '@expo-google-fonts/covered-by-your-grace';

import NavBar from '../components/NavBar';

const WelcomeScreen = ({ navigation }) => {
	let [ fontsLoaded ] = useFonts({
		CoveredByYourGrace_400Regular
	});

	if (!fontsLoaded) return <AppLoading />;
	else {
		return (
			<SafeAreaView style={styles.welcomeView}>
				<Text style={styles.welcomeHeading}>Ryan's Recipes!!!</Text>
				<Image source={require('../assets/img/frost-kitchen-1.jpeg')} style={styles.welcomeImg} />
				<NavBar style={styles.navbar} nav={navigation} />
			</SafeAreaView>
		);
	}
};

const welcomeImgHeight = Dimensions.get('screen').height / 1.48;

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
		margin: 30,
		fontFamily: 'CoveredByYourGrace_400Regular',
		letterSpacing: 7
	},
	welcomeImg: {
		// need to make height dynamic
		height: welcomeImgHeight,
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
