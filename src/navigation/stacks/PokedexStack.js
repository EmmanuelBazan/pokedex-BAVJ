import { createStackNavigator } from '@react-navigation/stack';
import PokedexScreen from '../../screens/PokedexScreen';
import PokemonScreen from '../../screens/PokemonScreen';

const Stack = createStackNavigator();

const PokedexStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='pokemon' component={PokemonScreen} />
            <Stack.Screen name='pokedex' component={PokedexScreen} />
        </Stack.Navigator>
    )
}

export default PokedexStack;