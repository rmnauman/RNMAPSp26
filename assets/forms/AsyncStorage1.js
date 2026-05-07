import React from 'react';
//npm install @react-native-async-storage/async-storage@1.21.0
import { View, Text, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AsyncStorage1() {

    // ================= STRING =================
    const addName = async () => {
        await AsyncStorage.setItem('name', 'Nauman');
        Alert.alert('Name Saved');
    };

    const getName = async () => {
        const name = await AsyncStorage.getItem('name');
        Alert.alert('Name', name || 'No Data');
    };

    // ================= OBJECT =================
    const addEmployee = async () => {
        const emp = {
            id: 1,
            name: 'Ali',
            salary: 50000
        };

        await AsyncStorage.setItem('employee', JSON.stringify(emp));
        Alert.alert('Employee Saved');
    };

    const getEmployee = async () => {
        const data = await AsyncStorage.getItem('employee');
        const emp = data ? JSON.parse(data) : null;
        Alert.alert(emp ? emp.name : 'Not Found');
    };

    // ================= ARRAY =================
    const addEmployees = async () => {
        const employees = [
            { id: 1, name: 'Ali' },
            { id: 2, name: 'Sara' },
            { id: 3, name: 'Ahmed' }
        ];

        await AsyncStorage.setItem('employees', JSON.stringify(employees));
        Alert.alert('Employees Saved');
    };

    const getEmployees = async () => {
        const data = await AsyncStorage.getItem('employees');
        const employees = data ? JSON.parse(data) : [];

        Alert.alert('Employees', JSON.stringify(employees));
    };

    // ================= DELETE =================
    const removeEmployee = async () => {
        await AsyncStorage.removeItem('employee');
        Alert.alert('Employee Removed');
    };

    const resetStorage = async () => {
        await AsyncStorage.clear();
        Alert.alert('Storage Cleared');
    };

    // ================= UI =================
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.heading}>AsyncStorage Demo</Text>

            <Button title="Add Name" onPress={addName} />
            <Button title="Get Name" onPress={getName} />

            <View style={styles.space} />

            <Button title="Add Employee" onPress={addEmployee} />
            <Button title="Get Employee" onPress={getEmployee} />

            <View style={styles.space} />

            <Button title="Add Employees" onPress={addEmployees} />
            <Button title="Get Employees" onPress={getEmployees} />

            <View style={styles.space} />

            <Button title="Remove Employee" onPress={removeEmployee} color="orange" />
            <Button title="Reset Storage" onPress={resetStorage} color="red" />
        </ScrollView>
    );
}

// ================= STYLES =================
const styles = StyleSheet.create({
    container: {
        padding: 20,
        gap: 10,
        justifyContent: 'center'
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
    space: {
        marginVertical: 10
    }
});
