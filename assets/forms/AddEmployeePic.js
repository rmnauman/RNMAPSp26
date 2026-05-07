import React, { useState } from "react";
import { Alert, Button, Text, TextInput, View, Image } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

export default function AddEmployeePic() {
    const [ID, setID] = useState('');
    const [Name, setName] = useState('');
    const [age, setAge] = useState('');
    const [salary, setSalary] = useState('');
    const [image, setImage] = useState(null);

    // 📸 Select from Gallery
    const pickImage = () => {
        launchImageLibrary({ mediaType: 'photo' }, (res) => {
            if (!res.didCancel && res.assets) {
                setImage(res.assets[0]);
            }
        });
    };

    // 📷 Open Camera
    const openCamera = () => {
        launchCamera({ mediaType: 'photo' }, (res) => {
            if (!res.didCancel && res.assets) {
                setImage(res.assets[0]);
            }
        });
    };

    const addStudent = async () => {

        if (!image) {
            Alert.alert("Please select image");
            return;
        }

        let emp = {
            empID: ID,
            Name: Name,
            Salary: salary,
            age: age
        };

        let formData = new FormData();

        // send object as string
        formData.append("emp", JSON.stringify(emp));

        // send image
        formData.append("file",
            {
                uri: image.uri,
                type: image.type,
                name: image.fileName || "photo.jpg"
            }
        );

        let finalURL = global.baseURL + 'addEmpData';

        try {
            let response = await fetch(finalURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                body: formData
            });

            if (response.status == 200)
                Alert.alert('Data Saved Successfully');
            else
                Alert.alert('Error Saving Data');

        } catch (error) {
            Alert.alert(error.message);
        }
    };

    return (
        <View style={{ paddingTop: 30 }}>
            <Text style={{ fontSize: 30 }}>Add Employee</Text>

            <TextInput style={{ fontSize: 20 }} placeholder="ID" onChangeText={setID} />
            <TextInput style={{ fontSize: 20 }} placeholder="Name" onChangeText={setName} />
            <TextInput style={{ fontSize: 20 }} placeholder="Age" onChangeText={setAge} />
            <TextInput style={{ fontSize: 20 }} placeholder="Salary" onChangeText={setSalary} />

            <Button title="Pick Image from Gallery" onPress={pickImage} />
            <Button title="Open Camera" onPress={openCamera} />

            {image && (
                <Image
                    source={{ uri: image.uri }}
                    style={{ width: 100, height: 100, marginTop: 10 }}
                />
            )}

            <Button title="Add Data" onPress={addStudent} />
        </View>
    );
}
