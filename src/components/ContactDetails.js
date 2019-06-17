import React from 'react'
import {View,Image,TouchableOpacity,Text,AsyncStorage} from 'react-native';
// import {AsyncStorage} from 'AsyncStorage'
import {withNavigation} from 'react-navigation';
class ContactDetails extends React.Component{
   dispData = async ()=>{
    try{
      let user=await AsyncStorage.getItem('(274)-912-5136');
      let parsed=JSON.parse(user);
      console.log('parsed data in async',parsed);
    }
    catch{
      console.log('error');
    }
  }  
  pressEvent=(item)=>{
       //console.log('itemmmm:',item)
      obj={
        name:item.name.first,
        phone:item.phone,
        url:item.picture.large
      }
      AsyncStorage.setItem(obj.phone,JSON.stringify(obj));
      //console.log('objj',obj)
      this.dispData(obj);
      this.props.navigation.navigate("Details",{obj});
      }
    render(){
      const {item} = this.props;
      return (
        <TouchableOpacity
          onPress={() => this.pressEvent(item)}
         >
           {/* <Text>lok</Text> */}
          <View style={styles.containerStyle}>
              <View style={styles.thumbnailContainerStyle}>
                  <Image
                      style={styles.thumbnailStyle}
                      source={{ uri: item.picture.thumbnail }}
                  />
              </View>
                  <View style={styles.headerContentStyle}>
                      <Text style={styles.headerTextStyle}>{item.name.first}</Text>
                      <Text>{item.phone}</Text>
                  </View>
          </View>
         </TouchableOpacity>
      )

    }
    
}
export default ContactDetails

const styles = {
    headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    headerTextStyle: {
      fontSize: 18
    },
    thumbnailStyle: {
      borderRadius:15,
      height: 50,
      width: 50
    },
    thumbnailContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
    },containerStyle: {
      borderBottomWidth: 1,
      padding: 5,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      borderColor: '#ddd',
      position: 'relative'
    }
  };