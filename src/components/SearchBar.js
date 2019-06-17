import React from 'react'
import { View,TextInput } from 'react-native'
import { Searchbar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Search() {
    return (
        <View style={{ flex: 1,justifyContent:'flex-end'}}>
             {/* <Ionicons name="ios-search" size={40} color="#000"/> */}
            {/* <TextInput
                placeholder={'google search...'}
                style={{ height: 40, borderColor: 'gray', borderWidth: 1,borderRadius:10 }}
               
            /> */}

            <Searchbar
              placeholder="google search"
              style={{borderColor:'grey'}}
              // onChangeText={query => { this.setState({ firstQuery: query }); }}
              // value={firstQuery}
            />  
        </View>
    )
}
