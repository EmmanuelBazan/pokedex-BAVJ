import { createStackNavigator } from '@react-navigation/stack';
import FavoriteScreen from '../../screens/FavoriteScreen';

const Stack = createStackNavigator();

const FavoriteStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='favorite' component={FavoriteScreen} />
        </Stack.Navigator>
    )
}

export default FavoriteStack;