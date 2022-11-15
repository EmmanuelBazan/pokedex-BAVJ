import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountStack from './stacks/AccountStack';
import FavoriteStack from './stacks/FavoriteStack';
import PokedexStack from './stacks/PokedexStack';
import Icon from 'react-native-vector-icons/FontAwesome';
import pokeballImage from '../assets/pokeball.webp';
import Styles from './styles/navigationStyles';

const Tab = createBottomTabNavigator();

const NavigationComponent = () => {
    return(
        <Tab.Navigator>

            <Tab.Screen name='accountStack' component={AccountStack} options={{
                tabBarLabel: 'Mi cuenta',
                tabBarIcon: ({color, size}) => {
                    return(
                        <Icon name='user' color={color} size={size} />
                    )
                }
                }} />

            <Tab.Screen name='pokedexStack' component={PokedexStack} options={{
                tabBarLabel: '',
                tabBarIcon: () => getPokeBall()
            }} />

            <Tab.Screen name='favoriteStack' component={FavoriteStack} options={{
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