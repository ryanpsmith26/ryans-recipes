import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image, Dimensions } from 'react-native';
import { AppLoading } from 'expo';
import { CoveredByYourGrace_400Regular, useFonts } from '@expo-google-fonts/covered-by-your-grace';

import NavBar from '../components/NavBar';

import colors from '../config/colors';

const WelcomeScreen = ({ navigation }) => {
	let [ fontsLoaded ] = useFonts({
		CoveredByYourGrace_400Regular
	});

	if (!fontsLoaded) return <AppLoading />;
	else {
		return (
			<SafeAreaView style={styles.welcomeView}>
				<View style={styles.welcomeHeadingView}>
					<Text style={styles.welcomeHeadingText}>Ryan's Recipes!</Text>
				</View>
				<Image source={require('../assets/img/frost-kitchen-1.jpeg')} style={styles.welcomeImg} />
				<NavBar style={styles.navbar} nav={navigation} />
			</SafeAreaView>
		);
	}
};

const welcomeHeaderHeight = Dimensions.get('screen').height / 10;
const welcomeImgHeight = Dimensions.get('screen').height / 1.335;
// would need to set navbar height by dimensions for super consistent results on WelcomeScreen

const styles = StyleSheet.create({
	welcomeView: {
		flex: 1,
		backgroundColor: colors.medium,
		justifyContent: 'space-between'
	},
	welcomeHeadingView: {
		height: welcomeHeaderHeight,
		justifyContent: 'center'
	},
	welcomeHeadingText: {
		fontFamily: 'CoveredByYourGrace_400Regular',
		letterSpacing: 7,
		color: colors.white,
		fontSize: 30,
		textAlign: 'center'
	},
	welcomeImg: {
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
