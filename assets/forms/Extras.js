import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


//------------------ LOGIN SCREEN --------------------------
function LoginScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'space-evenly', alignContent: 'center' }}>
            <Text style={{ fontSize: 50, textAlign: 'center' }}>Login Screen</Text>
            <Button title='Login' onPress={() => navigation.replace('Home', { name: 'Ali', age: 11 })}></Button>
        </View>
    );
}

//------------------ LOGIN SCREEN --------------------------
function HomeScreen({ navigation, route }) {
    let data = route.params;
    return (
        <View style={{ flex: 1, justifyContent: 'space-evenly', alignContent: 'center' }}>
            <Text style={{ fontSize: 50, textAlign: 'center' }}>Home Screen</Text>
            <Text style={{ fontSize: 50, textAlign: 'center' }}>Welcome:</Text>

            <Button title='Log Out' onPress={() => navigation.replace('Login')}></Button>
        </View>
    );
}

//------------------- App Screen ----------------------------
export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarLabelStyle: {
                        fontSize: 20,
                    },
                }}>
                <Tab.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        tabBarIcon: (color, size) => {
                            return (<Icon name="person" color={color} size={24} />)
                        }
                    }} />
                <Tab.Screen name="Home" component={HomeScreen}
                    options={{
                        tabBarIcon: (color, size) => {
                            return (<Icon name="home" color={color} size={24} />)
                        }
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}




// // -------------------- LOGIN SCREEN --------------------
// function LoginScreen({ navigation }) {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Welcome Back</Text>

//             <TouchableOpacity
//                 style={styles.primaryButton}
//                 onPress={() => navigation.replace('Main')}
//             >
//                 <Text style={styles.buttonText}>Login</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }


// // -------------------- HOME --------------------
// function HomeScreen() {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Home Dashboard</Text>
//         </View>
//     );
// }


// // -------------------- PROFILE --------------------
// function ProfileScreen() {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Profile Information</Text>
//         </View>
//     );
// }


// // -------------------- SETTINGS (LOGOUT HERE) --------------------
// function SettingsScreen({ navigation }) {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Settings</Text>

//             <TouchableOpacity
//                 style={styles.logoutButton}
//                 onPress={() => navigation.replace('Login')}
//             >
//                 <Text style={styles.buttonText}>Logout</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }


// // -------------------- TABS --------------------
// function MainTabs() {
//     return (
//         <Tab.Navigator
//             screenOptions={{
//                 headerStyle: { backgroundColor: '#1e293b' },
//                 headerTitleStyle: { color: '#fff', fontWeight: 'bold' },
//                 headerTitleAlign: 'center',
//                 tabBarStyle: {
//                     backgroundColor: '#f1f2ef',
//                     paddingBottom: 50,
//                 },
//                 tabBarActiveTintColor: '#2563eb',
//                 tabBarInactiveTintColor: '#6b7280',
//             }}
//         >
//             <Tab.Screen
//                 name="Home"
//                 component={HomeScreen}
//                 options={{
//                     tabBarIcon: ({ color, size }) => (
//                         <Icon name="home" size={size} color={color} />
//                     ),
//                 }}
//             />

//             <Tab.Screen
//                 name="Profile"
//                 component={ProfileScreen}
//                 options={{
//                     tabBarIcon: ({ color, size }) => (
//                         <Icon name="person" size={size} color={color} />
//                     ),
//                 }}
//             />

//             <Tab.Screen
//                 name="Settings"
//                 component={SettingsScreen}
//                 options={{
//                     tabBarIcon: ({ color, size }) => (
//                         <Icon name="settings" size={size} color={color} />
//                     ),
//                 }}
//             />
//         </Tab.Navigator>
//     );
// }

// // -------------------- ROOT STACK --------------------
// export default function App() {
//     return (

//         <NavigationContainer>
//             <Stack.Navigator
//                 screenOptions={{
//                     headerStyle: { backgroundColor: '#1e293b' },
//                     headerTitleStyle: { color: '#fff', fontWeight: 'bold' },
//                     headerTitleAlign: 'center',
//                 }}
//             >
//                 <Stack.Screen
//                     name="Login"
//                     component={LoginScreen}
//                     options={{ headerShown: false }}
//                 />

//                 <Stack.Screen
//                     name="Main"
//                     component={MainTabs}
//                     options={{ headerShown: false }}
//                 />
//             </Stack.Navigator>
//         </NavigationContainer>

//     );
// }


// // -------------------- STYLES --------------------
// const styles = {
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f1f5f9',
//     },
//     title: {
//         fontSize: 22,
//         fontWeight: '600',
//         marginBottom: 20,
//         color: '#1e293b',
//     },
//     primaryButton: {
//         backgroundColor: '#2563eb',
//         paddingVertical: 12,
//         paddingHorizontal: 40,
//         borderRadius: 8,
//     },
//     logoutButton: {
//         backgroundColor: '#dc2626',
//         paddingVertical: 12,
//         paddingHorizontal: 40,
//         borderRadius: 8,
//         marginTop: 20,
//     },
//     buttonText: {
//         color: '#fff',
//         fontSize: 16,
//         fontWeight: '600',
//     },
// };
// import React from "react";
// import { View, Button, Text } from "react-native";
// import EmpChkList from './assets/forms/EmpChkList'
// import abc from './assets/forms/ImageHandling'
// import ImageHandling from "./assets/forms/ImageHandling";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// const App = () => {

//     const Stack = createNativeStackNavigator();
//     const Tab = createBottomTabNavigator();
//     return (
//         <NavigationContainer>
//             <Tab.Navigator>
//                 <Tab.Screen name="Home" component={HomeScreen} />
//                 <Tab.Screen name="Details" component={DetailsScreen} />
//             </Tab.Navigator>
//         </NavigationContainer>
//     );
// }
// function HomeScreen({ navigation }) {
//     return (
//         <View>
//             <Text>Home Screen</Text>
//             <Button
//                 title="Go to Details"
//                 onPress={() => navigation.navigate('Details')}
//             />
//         </View>
//     );
// }

// function DetailsScreen({ navigation }) {
//     return (
//         <View>
//             <Text>Details Screen</Text>
//             <Button
//                 title="Go Back"
//                 onPress={() => navigation.goBack()}
//             />
//         </View>
//     );
// }
// export default App;

// /*
// git add .
// git commit -m "your message"
// git push
// */
// /*
// git config --global user.name "rmnauman"
// git config --global user.email "rmnauman@gmail.com"
// */








// // import React, { useState } from "react";
// // import { Text, View } from "react-native";
// // import { Checkbox, PaperProvider, RadioButton } from "react-native-paper";
// // const App = () => {

// //     const [gender, setGender] = useState('male');
// //     const [ms, setMS] = useState(true);
// //     const [employeed, setEmployeed] = useState(true);
// //     return (
// //         <PaperProvider>
// //             <View>
// //                 <View style={{ backgroundColor: 'purple', marginTop: 40, padding: 10, }}>
// //                     <Text style={{ fontSize: 35, textAlign: 'center', color: 'white', }}> Employee Form</Text>
// //                 </View>
// //                 <View style={{ borderWidth: 2, margin: 5, borderRadius: 10, }}>
// //                     <View style={{ flexDirection: 'row' }}>
// //                         <RadioButton
// //                             status={gender == 'male' ? 'checked' : 'unchecked'}
// //                             onPress={() => setGender('male')}
// //                         />
// //                         <Text style={{ fontSize: 25 }}>Male</Text>
// //                     </View>
// //                     <View style={{ flexDirection: 'row' }}>
// //                         <RadioButton
// //                             status={gender == 'female' ? 'checked' : 'unchecked'}
// //                             onPress={() => setGender('female')}

// //                         />
// //                         <Text style={{ fontSize: 25 }}>Female</Text>
// //                     </View>

// //                 </View>
// //                 <View style={{ borderWidth: 2, margin: 5, borderRadius: 10, }}>
// //                     <View style={{ flexDirection: 'row' }}>
// //                         <Checkbox
// //                             status={ms ? 'checked' : 'unchecked'}
// //                             onPress={() => { setMS(!ms) }}
// //                         />
// //                         <Text style={{ fontSize: 25 }}>Male</Text>
// //                     </View>
// //                     <View style={{ flexDirection: 'row' }}>
// //                         <Checkbox
// //                             status={employeed ? 'checked' : 'unchecked'}
// //                             onPress={() => setEmployeed(!employeed)}
// //                         />
// //                         <Text style={{ fontSize: 25 }}>Female</Text>
// //                     </View>
// //                 </View>
// //             </View>
// //         </PaperProvider>
// //     );
// // }
// // export default App;


// // // import { Alert, Button, FlatList, Text, TextInput, View } from "react-native";

// // // const App = () => {
// // //     const [name, setName] = useState();
// // //     const [salary, setSalary] = useState();
// // //     const [empID, setEmpID] = useState(101);
// // //     const [employees, setEmployees] = useState([]);

// // //     const addEmployee = () => {
// // //         let emp = { empID: empID, name: name, salary: salary };
// // //         employees.push(emp)
// // //         //setEmployees([...employees,emp])
// // //         setEmpID(empID + 1)
// // //         console.log(employees)
// // //     }

// // //     const showEmp = () => {
// // //         const data = employees.find(e => e.name == name);
// // //         if (data)
// // //             Alert.alert(data.name);
// // //         else
// // //             Alert.alert('Not Found')
// // //     }
// // //     return (
// // //         <View style={{ flex: 1, }}>
// // //             <View>
// // //                 <Text style={{ fontSize: 40, textAlign: 'center' }}> Employee Form</Text>
// // //             </View>
// // //             <View>
// // //                 <TextInput
// // //                     placeholder="Enter Name"
// // //                     onChangeText={setName}
// // //                     value={name}
// // //                     style={{
// // //                         borderWidth: 2,
// // //                         fontSize: 25, margin: 10, padding: 10,
// // //                         borderRadius: 10,
// // //                     }} />
// // //             </View>
// // //             <View>
// // //                 <TextInput
// // //                     placeholder="Enter Salary"
// // //                     onChangeText={setSalary}
// // //                     value={salary}
// // //                     style={{
// // //                         borderWidth: 2,
// // //                         fontSize: 25, margin: 10, padding: 10,
// // //                         borderRadius: 10,
// // //                     }} />
// // //             </View>
// // //             <View style={{
// // //                 width: '50%',
// // //                 margin: 10,
// // //                 alignSelf: 'center'
// // //             }}>
// // //                 <Button
// // //                     onPress={addEmployee}
// // //                     title="ADD" />
// // //             </View>
// // //             <View style={{
// // //                 width: '50%',
// // //                 margin: 10,
// // //                 alignSelf: 'center'
// // //             }}>
// // //                 <Button
// // //                     onPress={showEmp}
// // //                     title="Show" />
// // //             </View>
// // //             <FlatList
// // //                 data={employees}
// // //                 renderItem={({ item }) => <Text
// // //                     style={{ fontSize: 40, borderWidth: 2, margin: 10, }}>{item.name} || {item.salary}</Text>
// // //                 }
// // //             />

// // //         </View>
// // //     );
// // // }
// // // export default App;