import React,{Component} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator,
  createAppContainer ,
  createMaterialTopTabNavigator,
  createStackNavigator
 } from 'react-navigation';
import HomeScreen from './components/Home';
import Contacts from './components/Contacts';
import Recents from './components/recents';
import Details from './components/Details';
import ContactDetails from './components/ContactDetails'
class Routes extends Component{
    render()
    {
        return(
             <Router />
        )
    }
}
const StackNavigator = createStackNavigator({
    Contacts:{
       screen:Contacts,
       navigationOptions: {
        header:null,
        headerTintColor: '#FFFFFF',
      }
    },
     Details:{
       screen:Details,
     },
   
   });

//createMaterialTopTabNavigator

const TabScreen = createMaterialTopTabNavigator(
  { 
    Recents: { screen: Recents },
    Contacts: { screen: StackNavigator },
  
  },
  {
    
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      initialRouteName:Recents,
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#663399',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: 'tomato',
        borderBottomWidth: 2,
      },
    },
  }
);



//createBottomTabNavigator
const TabNavigator = createBottomTabNavigator(
    {
  Home:HomeScreen,
  Phone:TabScreen
},
{  
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          return <Ionicons name='ios-home' size={25} color={tintColor} />; 
        } else if (routeName === 'Phone') {
          iconName = 'ios-call';
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        }
      },
    }),
    tabBarOptions: {
      style: { 
        backgroundColor: '#663399',
      },
      activeTintColor: 'tomato',
      inactiveTintColor: 'white',
    },
  }
);

//createStackNavigator


const Router=createAppContainer(TabNavigator);

export default Router;

