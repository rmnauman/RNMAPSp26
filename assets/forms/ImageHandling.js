import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import {
    launchCamera,
    launchImageLibrary
} from 'react-native-image-picker';

export default function ImageHandling() {

    const [imageUri, setImageUri] = useState(null);

    const openGallery = () => {
        launchImageLibrary(
            {
                mediaType: 'photo',
                quality: 0.8,
            },
            (response) => {
                if (response.assets) {
                    setImageUri(response.assets[0].uri);
                }
            }
        );
    };

    const openCamera = () => {
        launchCamera(
            {
                mediaType: 'photo',
                quality: 0.8,
            },
            (response) => {
                if (response.assets) {
                    setImageUri(response.assets[0].uri);
                }
            }
        );
    };

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Upload Logo</Text>

            {/* <Image
                source={require('../Images/cute.jpg')}
                style={{ width: 200, height: 300, borderWidth: 2 }}
            /> */}

            {/* Image Box */}
            <View style={styles.imageBox}>
                {imageUri ? (
                    <Image source={{ uri: imageUri }} style={styles.image} />
                ) : (
                    <Text style={styles.placeholderText}>No Image Selected</Text>
                )}
            </View>

            {/* Buttons */}
            <TouchableOpacity style={styles.button} onPress={openGallery}>
                <Text style={styles.buttonText}>Launch Image Gallery</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={openCamera}>
                <Text style={styles.buttonText}>Launch Image Camera</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f4f6f9',
        padding: 20
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#1e293b'
    },

    imageBox: {
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: '#cbd5e1',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
    },

    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },

    placeholderText: {
        color: '#64748b'
    },

    button: {
        width: '80%',
        backgroundColor: '#2563eb',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 8
    },

    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600'
    }

});
