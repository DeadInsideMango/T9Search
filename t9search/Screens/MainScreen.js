import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Components/Home/Home';

const Stack = createNativeStackNavigator();
const Info = React.lazy(() => import('../Components/Info/Info'));

const MainScreen = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Group>
                <Stack.Screen name='Home' component={Home}/>
            </Stack.Group>

            <Stack.Group screenOptions={{
                presentation: 'modal'
            }}>
                <Stack.Screen name='Info' component={Info} />
            </Stack.Group>
        </Stack.Navigator>
    );
}

export default MainScreen;