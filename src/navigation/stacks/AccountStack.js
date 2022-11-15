import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../../screens/AccountScreen';

const Stack = createStackNavigator();

const AccountStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='account' component={AccountScreen} />
        </Stack.Navigator>
    )
}

export default AccountStack;