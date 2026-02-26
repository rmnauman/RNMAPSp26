import React from "react";
import { Button } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function LoginNavigation() {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="Login" component={Login} />
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="HomePage" component={HomePage} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}


function Login({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
            <Text style={{ fontSize: 40, textAlign: 'center' }}>Login Screen</Text>
            <Button title='login'
                onPress={() => navigation.replace('HomePage', { name: 'Malik' })}
            />
        </View>
    );
}

function HomePage({ navigation, route }) {
    const data = route.params;
    return (
        <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
            <Text style={{ fontSize: 40, textAlign: 'center' }}>Welcome</Text>
            <Text style={{ fontSize: 40, textAlign: 'center' }}>{data.name}</Text>
            <Button
                onPress={() => navigation.replace('Login')}
                title='LogOut' />
        </View>
    );
}