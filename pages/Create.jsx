import { StyleSheet, Text, View, Image, SafeAreaView, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Card, Searchbar, Button, TextInput } from 'react-native-paper';

const endpoint = "https://api.giphy.com/v1/gifs/trending?api_key=nv15wsVWexilDJYvXcWj7z3T2fQgEUyP&limit=25&rating=g"
const search = "https://api.giphy.com/v1/gifs/search?api_key=nv15wsVWexilDJYvXcWj7z3T2fQgEUyP"

const Create = () => {
    const [data, setData] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (text) => {
        setSearchText(text);
        try {
            const response = await fetch(`${search}&q=${text}`);
            const data = await response.json();
            setSearchResults(data.data);
        } catch (error) {
            console.error(error);
        }
    };

    async function fetchData() {
        try {
            const response = await fetch(endpoint);
            const data = await response.json();
            // console.log(data.data[0].embed_url)
            setData(data.data);
        } catch (error) {
            console.error(error);
        }
    }
    const navigation = useNavigation()

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={handleSearch}
                value={searchText}
                placeholder="Search Giphy..."
            />
            <Button style={{ width: 200, height: 60, padding: 10, marginLeft: 100 }} buttonColor="orange" textColor='black' mode="contained">
                Select GIF
            </Button>
            <FlatList data={searchText ? searchResults : data}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <Card style={{
                        flex: 1,
                        flexDirection: "row",
                        flexWrap: "wrap",
                        padding: 20,
                        justifyContent: "space-between",
                    }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Form", { data: item })}>
                            <Card.Cover source={{ uri: item.images.fixed_width_small_still.url }} />
                            <Text>                                            </Text>
                        </TouchableOpacity>
                    </Card>
                )}
            />
        </SafeAreaView>
    )
}

export default Create

const styles = StyleSheet.create({})