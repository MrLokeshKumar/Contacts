import React, { Component } from 'react'
import { View,StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { ContactsList} from '../actions'
import Timer from './Timer'
import Search from './SearchBar'
import Icons from './Icons'

class HomeScreen extends Component {
  componentDidMount() {
    this.props.ContactsList();
  }
  render() {
    return (
      <View style={styles.container}>
        <Timer />
        <Search />
        <Icons />
      </View>
    )
  }
}
const mapStateToProps = (state) => {
  return (
    {
      data: state.List
    }
  )
}
export default connect(mapStateToProps, { ContactsList })(HomeScreen);

const styles=StyleSheet.create({
  container:{
    flex: 1, 
    flexDirection: 'column', 
    justifyContent: 'flex-start', 
    backgroundColor: 'white' 
  }
})