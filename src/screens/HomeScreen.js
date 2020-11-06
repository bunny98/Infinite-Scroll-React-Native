import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

import ListContext from '../context/ListContext'
import { SafeAreaView } from 'react-navigation';

const HomeScreen = () => {
    const { data, addListItem } = useContext(ListContext);
    console.log(data.length);
    return <View style={{ flex: 1 }}>
        <Button onPress={addListItem} title="Add item" />
        <SafeAreaView>
            <FlatList
                data={data}
                keyExtractor={item => item.title}
                renderItem={({ item }) => <Text>
                    {item.title}
                </Text>
                }
            />
        </SafeAreaView>
    </View>
}

const styles = StyleSheet.create({});

export default HomeScreen;