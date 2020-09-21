import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Storage from '../../asyncStorage/Storage';

const Item = ({ item }) => (
    <View style={styles.dataContainer}>
        <Text style={styles.text}>Nome: {item.nome}</Text>
        <Text style={styles.text}>Sobrenome: {item.jsobrenome}</Text>
        <Text style={styles.text}>Email: {item.email}</Text>
        <Text style={styles.text}>Cidade: {item.cidade}</Text>
    </View>
);

const Main = () => {
    const [keyObject, setKeyObject] = useState([]);
    const isFocused = useIsFocused();

    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
            />
        );
    }

    useEffect(() => {
        (async () => setKeyObject(await Storage.mountObject()))()
    }, []);

    return (
        <>
            <ScrollView>
                <FlatList
                    data={keyObject}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.sobrenome}
                />
            </ScrollView>
        </>
    );
};

export default Main;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    text: {
      fontSize: 22,
    },
    dataContainer: {
        margin: 20,
        backgroundColor: '#80cee1',
        borderRadius: 10,
        padding: 10,
    },
});