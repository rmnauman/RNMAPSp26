import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function SalaryCalculator() {

    const [monthlySalary, setMonthlySalary] = useState("");
    const [bonus, setBonus] = useState("");

    const [yearlySalary, setYearlySalary] = useState(0);
    const [tax, setTax] = useState(0);
    const [netSalary, setNetSalary] = useState(0);

    const calculateSalary = () => {

        let mSalary = parseFloat(monthlySalary);
        let b = parseFloat(bonus) || 0;

        if (isNaN(mSalary)) {
            alert("Enter valid monthly salary");
            return;
        }

        let yearly = (mSalary * 12) + b;

        let taxAmount = yearly > 1000000 ? yearly * 0.10 : yearly * 0.05;

        let net = yearly - taxAmount;

        setYearlySalary(yearly);
        setTax(taxAmount);
        setNetSalary(net);
    };

    const clearFields = () => {
        setMonthlySalary("");
        setBonus("");
        setYearlySalary(0);
        setTax(0);
        setNetSalary(0);
    };

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Yearly Salary Calculator</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter Monthly Salary"
                keyboardType="numeric"
                value={monthlySalary}
                onChangeText={setMonthlySalary}
            />

            <TextInput
                style={styles.input}
                placeholder="Enter Bonus"
                keyboardType="numeric"
                value={bonus}
                onChangeText={setBonus}
            />

            <View style={styles.button}>
                <Button title="Calculate Salary" onPress={calculateSalary} />
            </View>

            <View style={styles.button}>
                <Button title="Clear" onPress={clearFields} />
            </View>

            <Text style={styles.result}>Yearly Salary: {yearlySalary}</Text>
            <Text style={styles.result}>Tax: {tax}</Text>
            <Text style={styles.result}>Net Salary: {netSalary}</Text>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 25,
        justifyContent: "center"
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 30
    },

    input: {
        borderWidth: 1,
        borderColor: "#aaa",
        borderRadius: 8,
        padding: 15,
        fontSize: 18,
        marginBottom: 20
    },

    button: {
        marginBottom: 15
    },

    result: {
        fontSize: 20,
        marginTop: 10
    }

});