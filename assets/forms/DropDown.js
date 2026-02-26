import React, { useState } from "react";
import { View, StyleSheet, Alert, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

export default function DropdownCode() {
    const [value, setValue] = useState(null);

    const countries = [

        { id: 1, name: 'Pakistan' },
        { id: 2, name: 'India' },
        { id: 3, name: 'Palestine' }
    ]
    const data = [
        { label: "Islamabad", value: "isb" },
        { label: "Lahore", value: "lhr" },
        { label: "Karachi", value: "khi" },
    ];

    return (
        <View style={styles.container}>
            <Dropdown
                style={styles.dropdown}
                data={countries}
                labelField="name"
                valueField="id"
                placeholder="Select City"
                value={value}
                onChange={item => {
                    setValue(item.id);
                    Alert.alert(value + "")
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
    },
    dropdown: {
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    placeholderStyle: {
        fontSize: 16,
        color: "gray",
    },
    selectedTextStyle: {
        fontSize: 16,
    },
});