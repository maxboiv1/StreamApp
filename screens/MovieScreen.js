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
                    <Block style={styles.infos}>
                        <Text style={styles.titre}>{navigation.getParam('film').title}</Text>
                        <Block style={styles.infosdisplay}>
                            <Text style={styles.infostitle}>Date de sortie: </Text>
                            <Text>{navigation.getParam('film').datesortie}</Text>
                        </Block>
                        <View style={styles.infosdisplay}>
                            <Text style={styles.infostitle}>Réalisateur: </Text>
                            <Text>{navigation.getParam('film').real}</Text>
                        </View>
                        <View style={styles.infosdisplay}>
                            <Text style={styles.infostitle}>Acteurs: </Text>
                            <Text>{navigation.getParam('film').acteurs}</Text>
                        </View>
                        <View style={styles.infosdisplay}>
                            <Text style={styles.infostitle}>Style: </Text>
                            <Text>{navigation.getParam('film').style}</Text>
                        </View>

                        <Text>{navigation.getParam('film').caption}</Text>
                    </Block>
                </Block>
                <Text style={styles.subtitle}>Synopsis: </Text>
                <Text style={styles.synopsis}>{navigation.getParam('film').desc}</Text>
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
        marginTop: 20,
        marginBottom: 0,
        flexDirection: 'row',
        width: null,
        height: null,
    },
    image: {
        width: 125,
        height: 175
    },
    synopsis: {
        margin: 10,
        marginTop: 0,
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
    subtitle: {
        margin: 10,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    infosdisplay: {
        flexDirection: 'row',
    },
    infostitle: {
        color: '#480EA5',
    },
});


export default MovieScreen;
