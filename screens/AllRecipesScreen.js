import React from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';

import RecipeListItem from '../components/RecipeListItem';
import NavBar from '../components/NavBar';

const recipeList = [
	{
		id: 1,
		name: 'Braised Short Ribs o/ white rice',
		image: require('../assets/img/brisket-avocado.jpeg'),
		time: '3 hours'
	},
	{
		id: 2,
		name: 'NY Strip w/ flakey salt',
		image: require('../assets/img/steak.jpeg'),
		time: '20 minutes'
	},
	{
		id: 3,
		name: 'Fried Eggs w/ avocado & sriracha',
		image: require('../assets/img/eggs-sriracha.jpeg'),
		time: '10 minutes'
	},
	{
		id: 4,
		name: 'Salmon w/ everything but the bagel',
		image: require('../assets/img/salmon-blue.jpeg'),
		time: '10 minutes'
	},
	{
		id: 5,
		name: 'Scrambled Eggs w/ bacon',
		image: require('../assets/img/eggs-bacon.jpeg'),
		time: '10 minutes'
	},
	{
		id: 6,
		name: 'Chicken Tikki Masala o/ basmati rice',
		image: require('../assets/img/tikka-masala.jpeg'),
		time: '30 minutes'
	}
];

const AllRecipesScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.allRecipesView}>
			<FlatList
				data={recipeList}
				keyExtractor={(recipe) => recipe.id.toString()}
				renderItem={({ item }) => <RecipeListItem name={item.name} image={item.image} time={item.time} />}
			/>
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
