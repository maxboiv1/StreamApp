import React from 'react';
import {ScrollView, StyleSheet, View, Image} from 'react-native';
import {Block, Button, Theme, Text} from 'galio-framework';

class MovieScreen extends React.Component {
    render() {

        const {navigation} = this.props;

        return (
            <ScrollView>
                <Image
                    style={styles.bandeau}
                    source={require('../assets/images/bandeauapp.png')}
                />

                <Block style={styles.container}>
                    <Image
                        style={styles.image}
                        source={{uri: navigation.getParam('film').affiche}}
                    />
                    <Block  style={styles.infos}>
                        <Text style={styles.titre}>{navigation.getParam('film').title}</Text>
                        <Text>Date de sortie: {navigation.getParam('film').datesortie}</Text>
                        <Text>Réalisateur: {navigation.getParam('film').real}</Text>
                        <Text>Acteurs: {navigation.getParam('film').acteurs}</Text>
                        <Text>Style: {navigation.getParam('film').style}</Text>
                        <Text>{navigation.getParam('film').caption}</Text>
                    </Block>
                </Block>
                <Text style={styles.synopsis}>Synopsis: {navigation.getParam('film').desc}</Text>
            </ScrollView>
        );
    }
}

MovieScreen.navigationOptions = {
    title: 'Film',
};

const styles = StyleSheet.create({
    bandeau: {
        width: 375,
        height: 100
    },
    container: {
        margin: 10,
        marginBottom: 0,
        flexDirection: 'row',
    },
    image: {
        width: 125,
        height: 175
    },
    synopsis: {
        margin: 10,
    },
    infos: {
        marginTop: 0,
        margin: 10,
        marginRight: 10,
    },
    titre: {
        fontWeight: 'bold',
        marginBottom: 10,
    },
});


export default MovieScreen;
