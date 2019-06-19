import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native';

class ContactDetails extends React.Component {

  pressEvent = (item) => {
    //console.log('itemmmm:',item)
    obj = {
      name: item.name.first,
      cell: item.cell,
      url: item.picture.large,
      thumurl: item.picture.thumbnail,
      phone:item.phone
      
    }
    this.props.navigation.navigate("Details", { obj });
  }
  render() {
    const { item } = this.props;
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
            <Text>{item.cell}</Text>
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