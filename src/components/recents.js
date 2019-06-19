
import React from 'react';
import { Text, View, AsyncStorage, FlatList, Image } from 'react-native';
import { NavigationEvents } from 'react-navigation'
export default class Recents extends React.PureComponent {
 constructor(props){
   super(props)
  this.state = {
    data: [],
    keys: [],
    fdata: '',
    rerender: '',
    recents:false
  }
  console.log('in constructor');
 }
  
  componentDidUpdate(){
    console.log('in did update',this.props.navigation)
  }
  
  componentDidMount() {
    console.log('in did mount',this.props.navigation)
     this.fetchAllItems();
    console.log('rerendering recents');
  }
  // componentWillUnmount() {
  //   // Remove the event listener
  //   this.focusListener.remove();
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
        data.push(JSON.parse(val[1]));
      })
      this.setState(() => ({ fdata: data }))
      console.log('pushed data', data)
      console.log('state fdata', this.state.fdata)
      if(data.length!==0)
      {
        this.setState(()=>({recents:true}))
      }
    } catch (error) {
      console.log(error, "problemo")
    }
  }
  condition = () => {
    if (this.state.recents ===true) {
      return (

        //<Text>lokesh</Text>
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.state.fdata}
            renderItem={({ item }) => {
              //console.log('urllll', item.url)
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
    else {
      return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text  style={{fontSize:20,alignSelf:'center'}}>No Recents Found</Text>
        </View>
      )
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