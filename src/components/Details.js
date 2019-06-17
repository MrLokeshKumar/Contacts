import React from 'react'
import { View, TextInput, Button,Image,Text } from 'react-native'
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import Card from './common/Card';
import CardSection from './common/CardSection';
import { TouchableOpacity } from 'react-native-gesture-handler';
class Details extends React.Component {
    static navigationOptions
    render() {
        const obj = this.props.navigation.getParam('obj', 'NO-ID');
        console.log('objectttttttttt',obj)
        return (
            <View style={{flex:1,flexDirection:'column'}}>
            <View  style={{flex:1}}>
            <Image
              style={styles.imageStyle}
              source={{ uri: obj.url }}
            />
            </View>
            <View  style={{flex:1}}>
                <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                editable={true}
                placeholderTextColor={'black'}
                value={obj.name}
                >
                </TextInput>
                <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                editable={true}
                placeholderTextColor={'black'}
                value={obj.phone}
                ></TextInput>
             <TouchableOpacity
             
             >
                 <Text>Save</Text>
             </TouchableOpacity>
         </View>
         </View>

        )
    }

}
const mapStateToProps = (state) => {
    console.log('in Details::', state);
    return (
        {
            data: state
        }
    )
}
export default connect(mapStateToProps)(Details);
const styles = {
    imageStyle: {
        height: 100,
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        width: null,
      },
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
      },
      headerTextStyle: {
        fontSize: 18
      },
      thumbnailStyle: {
        height: 50,
        width: 50
      },
      thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
      }
   
  };