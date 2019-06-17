
// Setting screen
import React, { Component } from 'react';
//import react in our code.
import { Text, View,AsyncStorage} from 'react-native';
//import all the components we are going to use.
 
export default class Recents extends React.Component {
  state={
    data:''
  }
  componentWillMount(){
    console.log('lokesh')
   //this.dispData();
  }
  dispData = async ()=>{
    try{
      // let user=await AsyncStorage.getItem('user');
      // let parsed=JSON.parse(user);
      
      // this.setState({data:parsed})
      // console.log('parsed data in recents',this.state.data);
      getAllKeys()
    }
    catch{
      console.log('error');
    }
  } 

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <Text>{this.parsed.phone}</Text> */}
        <Text>Test</Text>
      </View>
    );
  }
}