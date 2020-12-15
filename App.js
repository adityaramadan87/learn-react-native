/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FirstScreen from "./main/screen/FirstScreen";
import SplashScreen from "./main/screen/SplashScreen";
import * as CardStyleInterpolators from "@react-navigation/stack/lib/commonjs/TransitionConfigs/CardStyleInterpolators";


function App() {
    const Stack = createStackNavigator();

    const fade = ({ current }) => ({
        cardStyle: {
            opacity: current.progress,
        },
    });
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false, }}/>
                <Stack.Screen name="Login" component={FirstScreen} options={{headerShown: false, cardStyleInterpolator: fade}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
