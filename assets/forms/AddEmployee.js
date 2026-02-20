import React, { useState } from "react";
import { View, Text, Touchable, TouchableOpacity, Alert } from "react-native";
import { Checkbox, RadioButton } from "react-native-paper";

const AddEmployee = () => {
    const [gender, setGender] = useState('Male');
    const [married, setMarried] = useState(true);
    const [muslim, setMuslim] = useState(true);
    return (
        <View>
            <View style={{ backgroundColor: 'purple', marginTop: 40, }}>
                <Text style={{
                    fontSize: 35, color: 'white', textAlign: 'center',
                    padding: 20,
                }}> Employee SignUP</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    onPress={() => setGender('Male')}
                    status={gender == 'Male' ? 'checked' : 'unchecked'}
                />
                <Text style={{ fontSize: 30, }}> Male</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    onPress={() => setGender('Female')}
                    status={gender == 'Female' ? 'checked' : 'unchecked'}
                />
                <Text style={{ fontSize: 30, }}> Female</Text>
            </View>
            <TouchableOpacity
                onPress={() => Alert.alert(gender)}
                style={{
                    backgroundColor: 'green',
                    padding: 10,
                }}>
                <Text style={{ fontSize: 30, color: 'white', textAlign: 'center' }}>
                    Show Gender
                </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Checkbox
                    status={married ? 'checked' : 'unchecked'}
                    onPress={() => setMarried(!married)}
                />
                <Text style={{ fontSize: 30, }}> Married</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Checkbox
                    status={muslim ? 'checked' : 'unchecked'}
                    onPress={() => setMuslim(!muslim)}
                />
                <Text style={{ fontSize: 30, }}> Muslim</Text>
            </View>

        </View>
    );
}
export default AddEmployee;