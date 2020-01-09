import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {ExpoLinksView} from '@expo/samples';
import {Block, Button, Card, Icon, Input, NavBar, Text} from 'galio-framework';
import MovieScreen from "./screens/MovieScreen";

export default function MovieScreen() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Card
                    flex
                    borderless
                    style={styles.card}
                    title="6 Underground"
                    caption="Durée : 2h08"
                    location="USA, 2019"
                    avatar="https://www.presse-citron.net/wordpress_prod/wp-content/uploads/2019/10/netflix.jpg"
                    image="http://hdqwalls.com/wallpapers/6-underground-4k-hj.jpg"
                />
            </View>
        </ScrollView>
    );
}

LinksScreen.navigationOptions = {
    title: '{Nom du film}',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#fff',
    },
    card: {
        marginBottom: 2.5,
        marginTop: 2.5,
    },
});
