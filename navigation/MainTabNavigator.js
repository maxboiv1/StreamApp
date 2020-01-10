import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import MovieScreen from "../screens/MovieScreen";

const config = Platform.select({
    web: {headerMode: 'screen'},
    default: {},
});

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
    },
    config
);

HomeStack.navigationOptions = {
    tabBarLabel: 'Accueil',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-home${focused ? '' : '-outline'}`
                    : 'md-home'
            }
        />
    ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
    {
        Links: LinksScreen,
    },
    config
);

LinksStack.navigationOptions = {
    tabBarLabel: 'Catalogue',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-menu'}/>
    ),
};

LinksStack.path = '';



const MovieStack = createStackNavigator(
    {
        Movie: MovieScreen,
    },
    config
);

MovieStack.navigationOptions = {
    tabBarLabel: 'Film',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-star'} />
    ),
};

MovieStack.path = '';

const tabNavigator = createBottomTabNavigator({
    HomeStack,
    LinksStack,
    MovieStack
});

tabNavigator.path = '';

export default tabNavigator;
