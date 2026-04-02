import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    Alert,
    StyleSheet
} from 'react-native';
import { open } from 'react-native-quick-sqlite';

const db = open({ name: 'company.db' });

export default function EmployeeScreen() {

    const [employees, setEmployees] = useState([]);
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        db.execute(`
      CREATE TABLE IF NOT EXISTS Employee(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        salary REAL
      );
    `);
        getEmployees();
    }, []);

    const getEmployees = () => {
        const result = db.execute('SELECT * FROM Employee');
        setEmployees(result.rows._array);
    };

    const insertEmployee = () => {
        if (!name || !salary) {
            Alert.alert('Fill all fields');
            return;
        }

        db.execute(
            'INSERT INTO Employee (name, salary) VALUES (?, ?)',
            [name, salary]
        );

        clearFields();
        getEmployees();
    };

    const updateEmployee = () => {
        if (!selectedId) {
            Alert.alert('Select employee first');
            return;
        }

        db.execute(
            'UPDATE Employee SET name=?, salary=? WHERE id=?',
            [name, salary, selectedId]
        );

        clearFields();
        getEmployees();
    };

    const deleteEmployee = () => {
        if (!selectedId) {
            Alert.alert('Select employee first');
            return;
        }

        db.execute(
            'DELETE FROM Employee WHERE id=?',
            [selectedId]
        );

        clearFields();
        getEmployees();
    };

    const showTotalSalary = () => {
        const result = db.execute(
            'SELECT SUM(salary) as total FROM Employee'
        );
        const total = result.rows._array[0].total || 0;
        Alert.alert('Total Salary', total.toString());
    };

    const clearFields = () => {
        setName('');
        setSalary('');
        setSelectedId(null);
    };

    const populateFields = (item) => {
        setName(item.name);
        setSalary(item.salary.toString());
        setSelectedId(item.id);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Quick SQLite CRUD</Text>

            <TextInput
                placeholder="Name"
                value={name}
                onChangeText={setName}
                style={styles.input}
            />

            <TextInput
                placeholder="Salary"
                value={salary}
                onChangeText={setSalary}
                keyboardType="numeric"
                style={styles.input}
            />

            <View style={styles.row}>
                <TouchableOpacity style={styles.btn} onPress={insertEmployee}>
                    <Text style={styles.btnText}>Insert</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={updateEmployee}>
                    <Text style={styles.btnText}>Update</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={deleteEmployee}>
                    <Text style={styles.btnText}>Delete</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.totalBtn} onPress={showTotalSalary}>
                <Text style={styles.btnText}>Show Total Salary</Text>
            </TouchableOpacity>

            <FlatList
                data={employees}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => populateFields(item)}
                    >
                        <Text>ID: {item.id}</Text>
                        <Text>Name: {item.name}</Text>
                        <Text>Salary: {item.salary}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    btn: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5
    },
    totalBtn: {
        backgroundColor: '#2ecc71',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10
    },
    btnText: { color: 'white', fontWeight: 'bold' },
    item: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 8
    }
});

