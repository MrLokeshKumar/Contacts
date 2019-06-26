import React from 'react';
import { Text, View, AsyncStorage, FlatList, Image, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
export default class Recents extends React.Component {
  constructor(props) {
    super(props)
    this.fetchAllItems();
    this.state = {
      data: [],
      keys: [],
      fdata: '',
      rerender: '',
      recents: false
    }
  }

  componentDidMount() {
    this.fetchAllItems();
  }
  fetchAllItems = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys()
      const items = await AsyncStorage.multiGet(keys)
      this.setState(() => ({ data: items, keys: keys }))
      console.log('items:', this.state.data)
      console.log('keys:', this.state.keys)
      var data = []
      this.state.data.map((val) => {
        data.push(JSON.parse(val[1]));
      })
      this.setState(() => ({ fdata: data }))
      console.log('pushed data', data)
      console.log('state fdata', this.state.fdata)
      if (data.length !== 0) {
        this.setState(() => ({ recents: true }))
      }
    } catch (error) {
      console.log(error, "problemo")
    }
  }
  condition = () => {
    if (this.state.recents === true) {
      return (
        <View style={{ flex: 1 }}>
          <NavigationEvents
            onDidFocus={() => this.componentDidMount()}
          />
          <FlatList
            data={this.state.fdata}
            renderItem={({ item }) => {
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
            keyExtractor={item => item.phone}
          // ListHeaderComponent={()=>{}}
          />
        
        </View>
      );

    }
    return (
      <View style={styles.plainTextContainerStyle}>
        <Text style={styles.plainTextStyle}>No Recents Found</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.condition()}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    borderRadius: 30,
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
  },
  plainTextStyle: {
    fontSize: 20,
    alignSelf: 'center'
  },
  plainTextContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})