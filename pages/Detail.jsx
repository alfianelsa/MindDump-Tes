import { StyleSheet, Text, View, Image } from 'react-native'
import { Card } from 'react-native-paper';
import React from 'react'

const Detail = ({ route, navigation }) => {
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
                    <Text style={styles.headers}>{route.params.data.title}</Text>
                    <Text style={{ marginTop: 10 }}>Import Date time: {route.params.data.import_datetime}</Text>
                    <Text style={{ marginTop: 10 }}>
                        description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </Card.Content>
            </Card>

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

export default Detail

