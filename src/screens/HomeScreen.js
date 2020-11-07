import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

import ListContext from '../context/ListContext'
import { SafeAreaView } from 'react-navigation';

const HomeScreen = () => {
    const { data, addListItem } = useContext(ListContext);
    // console.log(data.length);
    useEffect(() => addListItem(), []);
    return <View style={{ flex: 1 }}>
        <SafeAreaView>
            <FlatList
                showsVerticalScrollIndicator={false}
                onEndReached={addListItem}
                onEndReachedThreshold={0.5}
                data={data}
                keyExtractor={item => item.title}
                renderItem={({ item }) => {
                    return <View>
                        <Image
                            style={styles.image}
                            source={item.imageSrc} />
                        <View style={styles.horizontalView}>
                            <Text style={styles.boldText}>
                                {item.title}
                            </Text>
                            <Text>
                                Constant Text
                            </Text>
                        </View>
                    </View>
                }
                }
            />
        </SafeAreaView>
    </View>
}

const styles = StyleSheet.create({
    image: {
        height:200, 
        width:340,
        margin: 10,
        alignSelf : 'center',
        borderRadius: 10,
    },
    horizontalView: {
        flexDirection: "row",
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingBottom: 5,
    },
    boldText: {
        fontWeight: 'bold',
    }
});

export default HomeScreen;