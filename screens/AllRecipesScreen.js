import React from 'react';
import { StyleSheet, ScrollView, Text, SafeAreaView } from 'react-native';

import NavBar from '../components/NavBar';

const AllRecipesScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.allRecipesView}>
			<ScrollView>
				<Text>All Recipes</Text>
			</ScrollView>
			<NavBar nav={navigation} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	allRecipesView: {
		flex: 1,
		backgroundColor: 'dodgerblue',
		justifyContent: 'space-between'
	}
});

export default AllRecipesScreen;
