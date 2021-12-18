import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// SCREENS IMPORT

import HomeScreen from '../../screens/Home';
import CategoriesScreen from '../../screens/Categories';
import CategoryViewScreen from '../../screens/Categories/View';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Categories" component={CategoriesScreen} />
            <Stack.Screen name="View" component={CategoryViewScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    )
};
export default AppStack;