import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Account from '../screens/Account';
import Favorite from '../screens/Favorites';
import Pokedex from '../screens/Pokedex';
import Icon from 'react-native-vector-icons/FontAwesome';
import pokeballImage from '../assets/pokeball.webp';
import Styles from './navigationStyles';

const Tab = createBottomTabNavigator();

const NavigationComponent = () => {
    return(
        <Tab.Navigator>

            <Tab.Screen name='account' component={Account} options={{
                tabBarLabel: 'Mi cuenta',
                tabBarIcon: ({color, size}) => {
                    return(
                        <Icon name='user' color={color} size={size} />
                    )
                }
                }} />

            <Tab.Screen name='pokedex' component={Pokedex} options={{
                tabBarLabel: '',
                tabBarIcon: () => getPokeBall()
            }} />

            <Tab.Screen name='favorite' component={Favorite} options={{
                tabBarLabel: 'Favoritos',
                tabBarIcon: ({color, size}) => {
                    return(
                        <Icon name='heart' color={color} size={size} />
                    )
                }
            }} />

        </Tab.Navigator>
    )
}

const getPokeBall = () => {
    return(
        <Image source={pokeballImage} style={Styles.pokeball} />
    )
}

export default NavigationComponent;