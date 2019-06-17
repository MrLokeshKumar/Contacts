
import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import ContactDetails from './ContactDetails'
import Spinner from './common/Spinner';
import { Searchbar } from 'react-native-paper';
class Contacts extends React.Component {

  state = {
    searchText: "",
    data: this.props.data.List.results,
    filteredData: []
  };

  search = (searchText) => {
    this.setState({ searchText: searchText });

    let filteredData = this.props.data.List.results.filter(function (item) {
      return item.name.first.includes(searchText);
    });

    this.setState({ filteredData: filteredData });
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
              placeholder="Search"
              style={{borderColor:'lavender',borderWidth:1}}
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={this.search}
              round={true}
              value={this.state.searchText}
            />
          <FlatList
            data={this.state.filteredData && this.state.filteredData.length > 0 ? this.state.filteredData : this.props.data.List.results}
            renderItem={({ item }) => {
              return (
                <ContactDetails item={item} navigation={this.props.navigation}/>
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
