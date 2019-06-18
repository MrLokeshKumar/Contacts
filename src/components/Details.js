import React from 'react'
import { View, TextInput, Button, Image, Text ,TouchableOpacity,AsyncStorage,ScrollView} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
class Details extends React.Component {
    state={
        name:'',
        phone:'',
        url:''
    }
    componentDidMount(){
        let obj= this.props.navigation.getParam('obj', 'NO-ID')
        console.log('didmount obj',obj)
        let name=obj.name;
        let phone=obj.phone;
        let url=obj.url;
        console.log('name phone',name,phone)
        this.setState(()=>({name:name,phone:phone,url:url}))
    }
    static navigationOptions = () => {
        return {
            title: obj ? obj.name + ' ' + 'Contact Info' : 'no name found',
        };
    };
    dispData = async (obj)=>{
        try{
          let user=await AsyncStorage.getItem(obj.phone);
          let parsed=JSON.parse(user);
          console.log('parsed data retrieved successfully',parsed);
        }
        catch{
          console.log('error');
        }
      }  
    AsyncFunction=()=>{
        let object ={
            name:this.state.name,
            phone:this.state.phone,
            url:this.state.url
        }
          AsyncStorage.setItem(this.state.phone,JSON.stringify(object));
          this.dispData(object);
    }

    render() {
       // const obj = this.props.navigation.getParam('obj', 'NO-ID');
       
        return (
            <ScrollView>
            <View style={{ flex: 1, flexDirection: 'column' }}>
             
                <View style={{ flex: 1 }}>
                    <Image
                        style={styles.imageStyle}
                        source={{ uri: this.state.url }}
                    />
                </View>
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <View style={{flex:1}}>
                        <Ionicons name='md-contact' size={25} color='black' />
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                            editable={true}
                            placeholderTextColor={'black'}
                            onChangeText={(text)=>this.setState({name:text})}
                            value={this.state.name}
                        >
                        </TextInput>
                    </View>
                    <View style={{flex:1}}>
                        <Ionicons name='ios-call' size={25} color='black' />
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                            editable={true}
                            placeholderTextColor={'black'}
                            onChangeText={(text)=>this.setState({phone:text})}
                            value={this.state.phone}
                        ></TextInput>
                    </View>
                   <View style={{flex:2,paddingTop:5}}>
                   <Button 
                   color='#663399'
                   title='Save'
                   onPress={()=>{this.AsyncFunction()}}
                   > 
                   </Button>
                   </View>
                </View>
                
            </View>
            </ScrollView>
         
        )
    }

}

export default Details;
const styles = {
    imageStyle: {
        height: 250,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
    }

};