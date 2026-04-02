import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

export default function AddStudent() {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [department, setDepartment] = useState(null);

    const [students, setStudents] = useState([
        { id: 1, name: "Ali", department: "CS" },
        { id: 2, name: "Sara", department: "SE" },
        { id: 3, name: "Ahmed", department: "IT" }
    ]);

    const [displayList, setDisplayList] = useState(students);

    const departmentData = [
        { label: "CS", value: "CS" },
        { label: "SE", value: "SE" },
        { label: "IT", value: "IT" },
        { label: "AI", value: "AI" }
    ];

    const addStudent = () => {
        if (!id || !name || !department) {
            alert("Please enter ID, Name and select Department");
            return;
        }

        const newStudent = { id, name, department };
        const newList = [...students, newStudent];

        setStudents(newList);
        setDisplayList(newList);

        setId("");
        setName("");
        setDepartment(null);
    };

    const searchStudent = () => {
        const result = students.filter(s =>
            s.name.toLowerCase().includes(name.toLowerCase())
        );
        setDisplayList(result);
    };

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Student Manager</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter ID"
                value={id}
                onChangeText={setId}
            />

            <TextInput
                style={styles.input}
                placeholder="Enter Name"
                value={name}
                onChangeText={setName}
            />

            <Text style={styles.label}>Select Department</Text>
            <Dropdown
                style={styles.dropdown}
                data={departmentData}
                labelField="label"
                valueField="value"
                placeholder="Select Department"
                value={department}
                onChange={item => setDepartment(item.value)}
            />

            <View style={{ marginVertical: 5 }}>
                <Button title="Add Student" onPress={addStudent} />
            </View>

            <View style={{ marginVertical: 5 }}>
                <Button title="Search by Name" onPress={searchStudent} />
            </View>

            <FlatList
                data={displayList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>ID: {item.id}</Text>
                        <Text>Name: {item.name}</Text>
                        <Text>Dept: {item.department}</Text>
                    </View>
                )}
            />

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20
    },

    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 10,
        borderRadius: 5
    },

    label: {
        fontSize: 16,
        marginBottom: 5
    },

    dropdown: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 15
    },

    item: {
        borderWidth: 1,
        borderColor: "#ddd",
        padding: 10,
        marginTop: 10,
        borderRadius: 5
    }

});