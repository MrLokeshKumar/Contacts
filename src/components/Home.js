import React, { PureComponent } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { ContactsList, TIME, DATE } from '../actions'
import Timer from './Timer'
import Search from './SearchBar'
import Icons from './Icons'

class HomeScreen extends PureComponent {
  componentDidMount() {
    this.props.ContactsList();
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', backgroundColor: 'white' }}>
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
