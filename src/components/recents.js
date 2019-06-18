
// Setting screen
import React, { Component } from 'react';
//import react in our code.
import { Text, View, AsyncStorage, FlatList, Image } from 'react-native';
//import all the components we are going to use.
import ContactDetails from './ContactDetails'
export default class Recents extends React.Component {
  state = {
    data: [],
    keys:[]
  }
  componentDidMount() {
    console.log('lokesh')
    this.fetchAllItems();
  }


  fetchAllItems = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys()
      const items = await AsyncStorage.multiGet(keys)
      this.setState(() => ({ data: items,keys:keys }))
      console.log('items:', this.state.data)
      console.log('keys:', this.state.keys)
    } catch (error) {
      console.log(error, "problemo")
    }
  }
  // dispData = async (obj) => {
  //   try {
  //     const keys = await AsyncStorage.getAllKeys()
  //     const items = await AsyncStorage.multiGet(keys)
  //     let user = await AsyncStorage.getItem(obj.key);
  //     let parsed = JSON.parse(user);
  //     this.setState(() => ({ data: parsed }))
  //     console.log('data retrieved successfully', this.state.data);
  //   }
  //   catch{
  //     console.log('error');
  //   }
  // }
  render() {
    return (
      <Text>lokesh</Text>
      // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      //   {/* <Text>{this.parsed.phone}</Text> */}
      //   <FlatList
      //     data={this.state.data}
      //     renderItem={({ item }) => {
      //       console.log('keyextractor', item)
      //       return (
      //         <View style={styles.containerStyle}>
      //           <View style={styles.thumbnailContainerStyle}>
      //             <Image
      //               style={styles.thumbnailStyle}
      //               source={{ uri: item.url }}
      //             />
      //           </View>
      //           <View style={styles.headerContentStyle}>
      //             <Text style={styles.headerTextStyle}>{item.name}</Text>
      //             <Text>{item.phone}</Text>
      //           </View>
      //         </View>
      //       )
      //     }}
      //     keyExtractor={item => {
      //       item.phone
      //     }
      //     }
      //   // ListHeaderComponent={()=>{}}
      //   />
      // </View>
    );
  }
}
const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    borderRadius: 15,
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }, containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};