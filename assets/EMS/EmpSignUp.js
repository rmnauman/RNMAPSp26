import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import CustomButton from '../CustomeComponents/CustButton'
import { Checkbox, RadioButton } from 'react-native-paper'
const EmpSignUp = () => {
    return (
        <View>
            <View>
                <Text> Sign Up </Text>
            </View>
            <View>
                <TextInput style={ss.txtInput} placeholder="Name" />
            </View>
            <View>
                <TextInput style={ss.txtInput} placeholder="Email" />
            </View>
            <View>
                <TextInput style={ss.txtInput} placeholder="Password" />
            </View>
            <View>
                <TextInput style={ss.txtInput} placeholder="Confirm Password" />
            </View>
            <View style={ss.RadioView}>
                <RadioButton /> <Text style={ss.txtStyle}>Male</Text>
                <RadioButton /> <Text style={ss.txtStyle}>Female</Text>
            </View>
            <View style={ss.RadioView}>
                <Checkbox /> <Text style={ss.txtStyle}>Married</Text>
            </View>
            <View>
                <Dropdown style={ss.ddStyle} data={[]} />
            </View>
            <CustomButton btnText='SAVE' bgClr='#d06f6f' />
            <CustomButton btnText='Show Data' />
        </View>
    );

}
const ss = StyleSheet.create({
    ddStyle: {
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        margin: 10,
    },
    RadioView: {
        flexDirection: 'row',
        marginLeft: 15,
        alignItems: 'center',
    },
    txtStyle: {
        fontSize: 30,
        margin: 10,
    },
    txtInput: {
        fontSize: 30,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        margin: 10,
    }
});
export default EmpSignUp;