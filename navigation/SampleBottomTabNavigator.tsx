import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import TabTwoScreen from "../screens/TabTwoScreen";

const Tab = createBottomTabNavigator();

function SampleBottomTabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="TabTwo" component={TabTwoScreen} />
        </Tab.Navigator>
    );
}

export default SampleBottomTabNavigator;
