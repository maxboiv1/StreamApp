import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Notifications} from "expo";
import * as Permissions from 'expo-permissions';

import {MonoText} from '../components/StyledText';

class HomeScreen extends React.Component {
    render() {
        return (
            <View>
                <Image
                    style={styles.container}
                    source={require('../assets/images/accueilapp.png')}
                />
            </View>
        );
    }

    async componentDidMount() {
        const {status: existingStatus} = await Permissions.getAsync(
            Permissions.NOTIFICATIONS
        );
        let finalStatus = existingStatus;

        if (existingStatus !== 'granted') {
            const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }

        if (finalStatus !== 'granted') {
            return;
        }

        let token = await Notifications.getExpoPushTokenAsync();
        console.log(token);
    }
}

HomeScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    }
});

export default HomeScreen;
