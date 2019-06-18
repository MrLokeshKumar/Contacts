
import React, { Component } from 'react';
import { Text, View, AsyncStorage, FlatList, Image } from 'react-native';
import ContactDetails from './ContactDetails'
export default class Recents extends React.Component {
  state = {
    data: [],
    keys:[],
    fdata:[]
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
      var data=[]
      this.state.data.map((val)=>{
        console.log(val[1]);

        data.push(JSON.parse(val[1]));
      })
      this.setState(() => ({ fdata: data }))
      console.log('fruits',data)
      console.log('state fdata',this.state.fdata)
    } catch (error) {
      console.log(error, "problemo")
    }
  }
  render() {
    return (
      //<Text>lokesh</Text>
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.fdata}
          renderItem={({ item }) => {
           // console.log('keyextractor', this.item.phone)
            return (
              <View style={styles.containerStyle}>
                <View style={styles.thumbnailContainerStyle}>
                  <Image
                    style={styles.thumbnailStyle}
                    source={{ uri: item.url }}
                  />
                </View>
                <View style={styles.headerContentStyle}>
                  <Text style={styles.headerTextStyle}>{item.name}</Text>
                  <Text>{item.phone}</Text>
                </View>
              </View>
            )
          }}
          keyExtractor={item => {
            item.name
          }
          }
        // ListHeaderComponent={()=>{}}
        />
      </View>
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