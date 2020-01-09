import React from 'react';
import {ScrollView, StyleSheet, View, Dimensions,TouchableWithoutFeedback, Image} from 'react-native';
import {Block, Button, Card, Theme, Text} from 'galio-framework';

class MovieScreen extends React.Component {
    render() {
        const { navigation, product, horizontal, full, style, priceColor, imageStyle } = this.props;
        const imageStyles = [styles.image, full ? styles.fullImage : styles.horizontalImage, imageStyle];

        return (
            <Block row={horizontal} card flex style={[styles.product, styles.shadow, style]}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro', { product: product })}>
                    <Block flex style={[styles.imageContainer, styles.shadow]}>
                        <Image source={{ uri: 'http://hdqwalls.com/wallpapers/6-underground-4k-hj.jpg' }} style={imageStyles} />
                    </Block>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro', { product: product })}>
                    <Block flex space="between" style={styles.productDescription}>
                        <Text size={14} style={styles.productTitle}>{navigation.getParam('film').title}</Text>
                        <Text size={12} muted={!priceColor} color={priceColor}>veR</Text>
                    </Block>
                </TouchableWithoutFeedback>
            </Block>
        );
    }
}

MovieScreen.navigationOptions = {
    title: '{Nom du film}',
};

const styles = StyleSheet.create({

    productTitle: {
        flex: 1,
        flexWrap: 'wrap',
        paddingBottom: 6,
    },

    imageContainer: {
        elevation: 1,
    },

    horizontalImage: {
        height: 122,
        width: 'auto',
    },

});

export default MovieScreen;
