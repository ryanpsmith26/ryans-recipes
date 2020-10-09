import React, { useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { connect } from 'react-redux';

import RecipeListItem from '../components/RecipeListItem';
import SwipeDeleteBtn from '../components/SwipeDeleteBtn';
import NavBar from '../components/NavBar';
import { getRecipes } from '../redux/recipes';

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
					<Swipeable
						renderRightActions={() => <SwipeDeleteBtn id={item.id} />}
						onSwipeableRightOpen={() => console.log('hello')}
					>
						<RecipeListItem
							name={item.name}
							image={item.image}
							time={item.time}
							id={item.id}
							nav={navigation}
						/>
					</Swipeable>
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
	},
	deleteBtn: {
		backgroundColor: 'red'
	}
});

const mapState = (state) => ({
	recipes: state.recipes
});

const mapDispatch = (dispatch) => ({
	getRecipes: () => dispatch(getRecipes())
});

export default connect(mapState, mapDispatch)(AllRecipesScreen);
