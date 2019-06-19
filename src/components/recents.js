
import React from 'react';
import { Text, View, AsyncStorage, FlatList, Image } from 'react-native';
import { NavigationEvents } from 'react-navigation'
export default class Recents extends React.Component {
  state = {
    data: [],
    keys: [],
    fdata: [],
    rerender: []
  }

  componentDidMount() {
    this.fetchAllItems();
    }
  // componentDidMount() {
  //   // console.log('lokesh')

  //   this.fetchAllItems();
  // }


  fetchAllItems = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys()
      const items = await AsyncStorage.multiGet(keys)
      this.setState(() => ({ data: items, keys: keys }))
      console.log('items:', this.state.data)
      console.log('keys:', this.state.keys)
      var data = []
      this.state.data.map((val) => {
        console.log(val[1]);
        data.push(JSON.parse(val[1]));
      })
      this.setState(() => ({ fdata: data }))
      console.log('pushed data', data)
      console.log('state fdata', this.state.fdata)
    } catch (error) {
      console.log(error, "problemo")
    }
  }
  condition = () => {
    if (this.state.fdata === []) {
      return (
        <Text>No Recents FAound</Text>
      )
    }
    else {
      return (

        //<Text>lokesh</Text>
        <View style={{ flex: 1 }}>
          <NavigationEvents
            onWillFocus={() => {
              let rerender = this.props.navigation.getParam('rerender', 'no-render')
              this.setState(() => ({ rerender: rerender }))
            }}
          />
          <FlatList
            data={this.state.fdata}
            renderItem={({ item }) => {
              console.log('urllll', item.url)
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
                    <Text>{item.cell}</Text>
                  </View>
                </View>
              )
            }}
            keyExtractor={item => item.cell}
          // ListHeaderComponent={()=>{}}
          />
        </View>
      );
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.condition()}
      </View>
    )
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
  }
};