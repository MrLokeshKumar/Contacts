import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Icons() {
    const { leftRight, topDown, container } = styles;
    return (
        <View style={container}>
            <View style={leftRight}>
                <Icon name="left" size={30} color="black" onPress={() => { Alert.alert("Clicked on LEFT Arrow") }} />
            </View >

            <View style={leftRight}>
                <Icon name="right" size={30} color="black" onPress={() => { Alert.alert("Clicked on RIGHT Arrow") }} />
            </View>

            <View style={topDown}>
                <Icon name="up" size={35} color="black" onPress={() => { Alert.alert("Clicked on UP Arrow") }} />
            </View>

            <View style={topDown}>
                <Icon name="down" size={35} color="black" onPress={() => { Alert.alert("Clicked on Down Arrow") }} />
            </View>
        </View>
    )
}

styles = StyleSheet.create({

    leftRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    topDown: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        alignContent: 'center'
    }
});


