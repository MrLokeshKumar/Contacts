
import React from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { Searchbar } from 'react-native-paper';

import ContactDetails from './ContactDetails'
import Spinner from './common/Spinner';

class Contacts extends React.Component {


  state = {
    searchText: '',
    data: '',
    filteredData: [],
    fdata: ''
  };

  searchFilterFunction = text => {
    this.setState({ searchText: text });
    const array = this.props.data.List.results
    const newData = array.filter(item => {
      const itemData = `${item.name.first.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.includes(textData);
    });
    this.setState({ data: newData });
  };

  Condition = () => {
    if (this.props.data.loading === false) {
      return (
        <View style={{ flex: 1 }}>
          {/* <SearchBar
            style={{ backgroundColor: 'white' }}
            round={true}
            lightTheme={true}
            placeholder="Search..."
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={this.search}
            value={this.state.searchText}
          /> */}


          <Searchbar
            placeholder="Search Contacts"
            style={{ borderColor: 'white', borderWidth: 1 }}
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={this.searchFilterFunction}
            round={true}
            value={this.state.searchText}
          />
          <FlatList
            data={this.state.searchText !== '' ? this.state.data : this.props.data.List.results}
            renderItem={({ item }) => {
              console.log('new filter data', this.state.data);
              console.log('search text', this.state.searchText)
              return (
                <ContactDetails item={item} navigation={this.props.navigation} />
              )
            }}
            keyExtractor={item =>
              item.phone
            }
          // ListHeaderComponent={()=>{}}
          />
        </View>
      );

    }
    else {
      return <Spinner />
    }
  }
  render() {
    return (
      this.Condition()
    )
  }
}
const mapStateToProps = (state) => {
  console.log('in contactsssss::', state);
  return (
    {
      data: state
    }
  )
}

export default connect(mapStateToProps)(Contacts);
