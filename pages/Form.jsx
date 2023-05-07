import { StyleSheet, Text, View, Image } from 'react-native'
import { Card, IconButton, Tooltip, TextInput, Button } from 'react-native-paper';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const createGif = "https://upload.giphy.com/v1/gifs?api_key=nv15wsVWexilDJYvXcWj7z3T2fQgEUyP"

const Form = ({ route, navigation }) => {
    const [formData, setFormData] = useState({
        source_image_url: route.params.data.images.original.url,
        username: "Alfian",
        title: "lokomotiv"
    });

    const navigations = useNavigation()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(createGif, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        // console.log(data.data.id. "");
        console.log(data);
        navigations.navigate("Home")
    };

    return (
        <View>
            {/* <Text>{route.params.data.url}</Text> */}
            <Card>
                <Card.Content>
                    <Card.Cover
                        source={{
                            uri: route.params.data.images.original.url
                        }}
                    />
                </Card.Content>
                <TextInput
                    label="Description"
                    value={formData}
                    onChangeText={formData => setFormData(formData)}
                />
            </Card>
            <Button style={{ width: 200, height: 60, padding: 10, marginLeft: 100, marginTop: 50 }} buttonColor="orange" textColor='black' mode="contained" onPress={handleSubmit}>
                simpan
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    centerContainer: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        margin: 50
    },
    headers: {
        // padding: 8.0,
        // paddingHorizontal: 16.0,
        fontSize: 30.0,
        fontStyle: "Bold"
    },
    container: {
        paddingHorizontal: 16.0,
    },
    tinyLogo: {
        width: 300,
        height: 400,
        borderRadius: 50
    },
});

export default Form

