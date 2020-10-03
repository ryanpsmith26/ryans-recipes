import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const FeaturedImage = () => {
	return (
		<View style={styles.image}>
			<Image source={require('../assets/img/brisket-avocado.jpeg')} style={styles.img} />
		</View>
	);
};

const styles = StyleSheet.create({
	img: {
		height: 400,
		width: '100%',
		resizeMode: 'cover',
		opacity: 0.75
	}
});

export default FeaturedImage;
