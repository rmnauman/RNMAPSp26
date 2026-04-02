import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { RadioButton, Checkbox } from "react-native-paper";

export default function OrderCalculator() {

    const [quantity, setQuantity] = useState("");
    const [product, setProduct] = useState("regular");
    const [discount, setDiscount] = useState(false);
    const [total, setTotal] = useState(0);

    const calculateTotal = () => {

        let qty = parseInt(quantity);

        if (isNaN(qty)) {
            alert("Enter valid quantity");
            return;
        }

        let price = product === "regular" ? 100 : 200;

        let result = qty * price;

        if (discount) {
            result = result - (result * 0.10);
        }

        setTotal(result);
    };

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Order Calculator</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter Quantity"
                keyboardType="numeric"
                value={quantity}
                onChangeText={setQuantity}
            />

            <Text style={styles.heading}>Select Product</Text>

            <RadioButton.Group
                onValueChange={value => setProduct(value)}
                value={product}
            >

                <View style={styles.row}>
                    <RadioButton value="regular" />
                    <Text style={styles.label}>Regular (100)</Text>
                </View>

                <View style={styles.row}>
                    <RadioButton value="premium" />
                    <Text style={styles.label}>Premium (200)</Text>
                </View>

            </RadioButton.Group>

            <View style={styles.row}>
                <Checkbox
                    status={discount ? "checked" : "unchecked"}
                    onPress={() => setDiscount(!discount)}
                />
                <Text style={styles.label}>Apply 10% Discount</Text>
            </View>

            <Button title="Calculate" onPress={calculateTotal} />

            <Text style={styles.result}>
                Total Price: {total}
            </Text>

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

    heading: {
        fontSize: 18,
        marginBottom: 10
    },

    input: {
        borderWidth: 1,
        borderColor: "#aaa",
        padding: 15,
        fontSize: 18,
        borderRadius: 8,
        marginBottom: 20
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },

    label: {
        fontSize: 18
    },

    result: {
        fontSize: 22,
        marginTop: 20,
        fontWeight: "bold"
    }

});