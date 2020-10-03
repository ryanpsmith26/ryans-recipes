import React, { useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';

import RecipeListItem from '../components/RecipeListItem';
import NavBar from '../components/NavBar';
import { getRecipes } from '../redux/store';

const AllRecipesScreen = ({ navigation, getRecipes, recipes }) => {
	useEffect(() => {
		getRecipes();
	});

	return (
		<SafeAreaView style={styles.allRecipesView}>
			<FlatList
				data={recipes}
				keyExtractor={(recipe) => recipe.id.toString()}
				renderItem={({ item }) => (
					<RecipeListItem name={item.name} image={item.image} time={item.time} nav={navigation} />
				)}
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

const mapState = (state) => ({
	recipes: state
});

const mapDispatch = (dispatch) => ({
	getRecipes: () => dispatch(getRecipes())
});

export default connect(mapState, mapDispatch)(AllRecipesScreen);
