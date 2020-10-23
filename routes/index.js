import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import HeaderLeft from '../components/HeaderLeft';
import HeaderRight from '../components/HeaderRight';
import * as RootNavigation from './RootNavigation.js'
import { navigationRef } from './RootNavigation';
import BottomSheetCustom from '../components/BottomSheetCustom';
import { View } from 'react-native';


const Stack = createStackNavigator();

const Routes = () => (
    <View style={{flex: 1}}>
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                screenOptions={{
                    gestureEnabled: true,
                    // if you want to change the back swipe width
                    gestureDirection: 'horizontal',
                    gestureResponseDistance: {
                        horizontal: 200,
                    },
                    cardStyle: {
                        backgroundColor: "#191919",
                    },
                    cardStyleInterpolator: ({ current, next, layouts }) => {
                        return {
                            cardStyle: {
                                transform: [
                                    {
                                        translateX: current.progress.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [layouts.screen.width, 0],
                                        }),
                                    },
                                ],
                            },
                            overlayStyle: {
                                opacity: current.progress.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 0.5],
                                }),
                            },
                        };
                    },
                }}>

                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ header: () => null, }}
                />
                <Stack.Screen
                    name="Screen1"
                    component={Screen1}
                    options={{
                        title: "Screen 1",
                        headerStyle: {
                            backgroundColor: "#191919",
                        },
                        headerTintColor: "#fff",
                        headerTitleAlign: "center",
                        headerLeft: () => (
                            <HeaderLeft></HeaderLeft>
                        ),
                        headerRight: () => (
                            <HeaderRight></HeaderRight>
                        ),
                    }}
                />

                <Stack.Screen
                    name="Screen2"
                    component={Screen2}
                    options={{
                        title: "Screen 2",
                        headerStyle: {
                            backgroundColor: "#191919",
                        },
                        headerTintColor: "#fff",
                        headerTitleAlign: "center",
                        headerLeft: () => (
                            <HeaderLeft></HeaderLeft>
                        ),
                        headerRight: () => (
                            <HeaderRight></HeaderRight>
                        ),
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
        <BottomSheetCustom></BottomSheetCustom>
    </View>
)

export default Routes;