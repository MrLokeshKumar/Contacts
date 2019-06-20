import React from 'react'
import {
    View,
    TextInput,
    Image,
    Text,
    TouchableOpacity,
    AsyncStorage,
    ScrollView,
    StyleSheet
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
//import AsyncStorage from '@react-native-community/async-storage';

class Details extends React.Component {
    constructor(props){
        super(props)
        let obj = this.props.navigation.getParam('obj', 'NO-ID')
        console.log('params in details',obj)
        this.state = {
            name: obj.name.first,
            phone: obj.phone,
            url: obj.picture.large,
            cell: obj.call,
            thumburl:obj.picture.thumbnail
        }
    }
  

    static navigationOptions = () => {

        return {
            headerStyle: {
                height: 45,
                backgroundColor: 'white'
            },
            title: obj ? obj.name.first + ' ' + 'Contact Info' : 'no name found',
        };
    };

    dispData = async (obj) => {
        try {
            let user = await AsyncStorage.getItem(obj.phone);
            let parsed = JSON.parse(user);
            console.log('parsed data retrieved successfully', parsed);
        }
        catch{
            console.log('error');
        }
    }
    AsyncFunction = () => {
        console.log('state in details',this.state)
        let object = {
            name: this.state.name,
            phone: this.state.phone,
            url: this.state.url,
            cell: this.state.cell
        }
        AsyncStorage.setItem(this.state.phone, JSON.stringify(object));
        console.log('stringify data', JSON.stringify(object))
        this.dispData(object);
        // this.props.navigation.replace('Home',{rerender:'rerender'});
        this.props.navigation.navigate('Recents');
    }


    render() {
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={styles.parentStyle}>

                    <View style={{ flex: 1 }}>
                        <Image
                            style={styles.imageStyle}
                            source={{ uri:this.state.url }}
                        />
                    </View>

                    <View style={styles.inputContainerStyle}>

                        <View style={styles.iconImageContainerOne}>

                            <View style={styles.iconStyle}>
                                <Ionicons name='md-contact' size={35} color='black' />
                            </View>

                            <View style={styles.inputContainerStyle}>
                                <TextInput
                                    style={styles.textInputStyle}
                                    editable={true}
                                    placeholderTextColor={'black'}
                                    onChangeText={(text) => this.setState({ name: text })}
                                    value={this.state.name}
                                >
                                </TextInput>
                            </View>

                        </View>

                        <View style={styles.iconImageContainerTwo}>

                            <View style={styles.iconStyle}>
                                <Ionicons name='ios-call' size={35} color='black' />
                            </View>

                            <View style={styles.inputContainerStyle}>
                                <TextInput
                                    style={styles.textInputStyle}
                                    editable={true}
                                    placeholderTextColor={'black'}
                                    onChangeText={(text) => this.setState({ phone: text })}
                                    value={this.state.phone}
                                ></TextInput>
                            </View>

                        </View>

                        <View style={styles.buttonParent}>
                            <TouchableOpacity
                                onPress={this.AsyncFunction}
                                style={styles.buttonStyle}>
                                <Text style={styles.textStyle}>
                                    Save
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>
            </ScrollView>

        )
    }

}

export default Details;

const styles=StyleSheet.create({
    imageStyle: {
        height: 270,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        borderRadius: 0
    },
    textStyle: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#663399',
        marginLeft: 5,
        marginRight: 5
    },
    parentStyle: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    inputContainerStyle: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: 'white'
    },
    iconStyle: {
        justifyContent: 'flex-start',
        paddingLeft: 10
    },
    inputContainerStyle: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    textInputStyle: {
        fontSize: 16,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#663399',
        marginRight: 12,
        marginLeft: 10
    },
    buttonParent: {
        flex: 2,
        paddingTop: 20,
        backgroundColor: 'white'
    },
    iconImageContainerTwo: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 20,
        backgroundColor: 'white'
    },
    iconImageContainerOne: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 20,
    }


})