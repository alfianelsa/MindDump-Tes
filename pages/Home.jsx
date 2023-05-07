import { StyleSheet, Text, View, Image, SafeAreaView, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Card, Searchbar, Button, TextInput } from 'react-native-paper';

const endpoint = "https://api.giphy.com/v1/gifs/trending?api_key=nv15wsVWexilDJYvXcWj7z3T2fQgEUyP&limit=25&rating=g"

const search = "https://api.giphy.com/v1/gifs/search?api_key=nv15wsVWexilDJYvXcWj7z3T2fQgEUyP"

const Home = () => {
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
            <Button style={{ width: 200, height: 60, padding: 10, marginLeft: 100, marginTop: 10, marginBottom: 10 }} buttonColor="orange" textColor='black' mode="contained" onPress={() => navigation.navigate("Create")}>
                + MindDump
            </Button>
            <FlatList data={searchText ? searchResults : data}
                numColumns={2}
                style={styles.list}
                keyExtractor={({ id }, index) => id}
                contentContainerStyle={{ paddingBottom: 150 }}
                renderItem={({ item }) => (
                    <Card style={{
                        flex: 1, flexWrap: "wrap", flexDirection: "row", width: "100%", justifyContent: "space-between",
                    }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Detail", { data: item })}>
                            <Card style={styles.item}>
                                <View style={{ alignItems: "center" }} >
                                    <Card.Cover source={{ uri: item.images.fixed_width_small_still.url }} style={{ width: "93%", marginTop: 7 }} />
                                    <Card.Content>
                                        <Text style={{ marginTop: 6, fontSize: 14, fontWeight: "bold" }}>{item.title}</Text>
                                    </Card.Content>
                                </View>
                            </Card>
                        </TouchableOpacity>
                    </Card>
                )}
            />
        </SafeAreaView>
    );
}

export default Home
const styles = StyleSheet.create({
    list: {
        paddingHorizontal: 10,
    },
    item: {
        flex: 1,
        margin: 5,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 100,
    },
});