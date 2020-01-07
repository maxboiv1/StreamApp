import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {ExpoLinksView} from '@expo/samples';
import {Block, Button, Card, Icon, Input, NavBar, Text} from 'galio-framework';

export default function LinksScreen() {
    return (
        <ScrollView style={styles.container}>
            <Card
                flex
                borderless
                style={styles.card}
                title="Christopher Moon"
                caption="139 minutes ago"
                location="Los Angeles, CA"
                avatar="http://i.pravatar.cc/100?id=skater"
                image="https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300"
            />
        </ScrollView>
    );
}

LinksScreen.navigationOptions = {
    title: 'Films',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: '#fff',
    },
});
