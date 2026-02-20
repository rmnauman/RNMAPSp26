import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Checkbox, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EmpChkList() {

    const [employees, setEmployees] = useState([
        { id: '1', name: 'Ali Khan', isSelected: false },
        { id: '2', name: 'Sara Ahmed', isSelected: false },
        { id: '3', name: 'Usman Tariq', isSelected: false },
        { id: '4', name: 'Hina Malik', isSelected: false },
        { id: '5', name: 'Bilal Raza', isSelected: false }
    ]);

    const toggleSelection = (id) => {
        const updated = employees.map(emp =>
            emp.id === id
                ? { ...emp, isSelected: !emp.isSelected }
                : emp
        );
        setEmployees(updated);
    };

    const deleteEmployees = () => {
        setEmployees(employees.filter(emp => emp.isSelected === false));
    };

    const selectedCount = employees.filter(e => e.isSelected).length;

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={[
                styles.card,
                item.isSelected && styles.selectedCard
            ]}
            activeOpacity={0.7}
            onPress={() => toggleSelection(item.id)}
        >
            <Checkbox
                status={item.isSelected ? 'checked' : 'unchecked'}

            />

            <Text style={styles.employeeText}>
                {item.name}
            </Text>
        </TouchableOpacity>
    );


    return (
        <SafeAreaView style={styles.container} edges={['bottom']}>

            <View style={styles.header}>
                <Text style={styles.headerTitle}>Employee Checklist</Text>
                <Text style={styles.subTitle}>Selected: {selectedCount}</Text>
            </View>

            <FlatList
                data={employees}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                style={{ flex: 1 }}
            />

            <TouchableOpacity
                style={[
                    styles.deleteButton,
                    selectedCount === 0 && { backgroundColor: '#ccc' }
                ]}
                onPress={deleteEmployees}
                disabled={selectedCount === 0}
            >
                <Text style={styles.buttonText}>Delete Selected</Text>
            </TouchableOpacity>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    selectedCard: {
        backgroundColor: '#e0f2fe',
        borderColor: '#0284c7'
    },

    container: {
        flex: 1,
        backgroundColor: '#f4f6f9',
        paddingHorizontal: 20
    },

    header: {
        marginTop: 20,
        marginBottom: 15
    },

    headerTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#1e293b'
    },

    subTitle: {
        fontSize: 16,
        color: '#64748b',
        marginTop: 4
    },

    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 15,
        marginVertical: 6,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#e2e8f0',
        elevation: 2
    },

    employeeText: {
        fontSize: 17,
        color: '#334155',
        fontWeight: '500'
    },

    deleteButton: {
        backgroundColor: '#dc2626',
        paddingVertical: 16,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10
    },

    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600'
    }
});
