import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    FlatList,
    StyleSheet,
} from "react-native";
import { open } from "react-native-quick-sqlite";

const db = open({ name: "employee.db" });

export default function EmployeeScreen() {
    const [name, setName] = useState("");
    const [salary, setSalary] = useState("");
    const [employees, setEmployees] = useState([]);

    // Create table on first load
    useEffect(() => {
        db.execute(`
      CREATE TABLE IF NOT EXISTS Employee (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        salary TEXT
      );
    `);

        loadEmployees();
    }, []);

    const insertEmployee = () => {
        if (!name || !salary) return;

        db.execute(
            `INSERT INTO Employee (name, salary) VALUES (?, ?)`,
            [name, salary]
        );

        setName("");
        setSalary("");
        loadEmployees();
    };

    const loadEmployees = () => {
        const result = db.execute(`SELECT * FROM Employee`);
        setEmployees(result.rows._array); // quick-sqlite format
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Add Employee</Text>

            <TextInput
                placeholder="Employee Name"
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

            <Button title="Save Employee" onPress={insertEmployee} />

            <Text style={styles.heading}>All Employees</Text>

            <FlatList
                data={employees}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Text style={styles.item}>
                        {item.name} - Rs {item.salary}
                    </Text>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    heading: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 10,
        borderRadius: 6,
    },
    item: {
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
});