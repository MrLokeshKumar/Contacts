import { combineReducers } from 'redux';
import Contacts from './ContactData';
import Loading from './Loading';

export default combineReducers({ 
  List: Contacts,
  loading:Loading
}); 