import React, { useState } from "react";
import { Alert, Button, FlatList, Text, TouchableOpacity, View } from "react-native";

const EmpForm = () => {
    const [emp, setEmp] = useState([
        'Amir', 'Zain', 'Ayehsa', 'Zahid', 'Amna'
    ]);

    const [students, setStudents] = useState([
        { regNo: 295, name: 'Usaid', CGPA: 3.3 },
        { regNo: 195, name: 'Abdul', CGPA: 2.7 },
        { regNo: 205, name: 'Kashif', CGPA: 9.0 },
        { regNo: 190, name: 'Ayesha', CGPA: 15.0 },
        { regNo: 285, name: 'Meesum', CGPA: 3.6 },
    ]);

    const delStudents = (reg) => {
        const newData = students.filter(s => s.regNo != reg);
        setStudents(newData)
    }
    const showStudents = ({ item }) => {
        return (
            <View style={{
                borderWidth: 2, borderRadius: 10, margin: 5,
                flexDirection: 'row', flex: 1,
            }}>
                <View style={{ flex: 4, backgroundColor: 'yellow' }}>
                    <Text style={{ fontSize: 30, }}>RegNo:{item.regNo}</Text>
                    <Text style={{ fontSize: 30, }}>Name:{item.name}</Text>
                    <Text style={{ fontSize: 30, }}>CGPA:{item.CGPA}</Text>
                </View>
                <TouchableOpacity
                    style={{
                        flex: 1, backgroundColor: 'red',
                        justifyContent: 'center',
                    }}
                    onPress={() => delStudents(item.regNo)}>
                    <View>
                        <Text style={{
                            color: 'white',
                            textAlign: 'center', fontSize: 25, fontWeight: 'bold'
                        }}>Delete</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }



    const showEmployees = ({ item }) => {
        return (
            <View>
                <Text style={{ fontSize: 30, textAlign: 'center' }}>
                    Name : {item}
                </Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{
                backgroundColor: 'purple', marginTop: 40,
                padding: 10,
            }}>
                <Text style={{ fontSize: 35, color: 'white', textAlign: 'center' }}> Employe</Text>
            </View>
            <View>
                <FlatList
                    data={students}
                    renderItem={showStudents}
                />
            </View>
        </View>
    );
}
export default EmpForm;