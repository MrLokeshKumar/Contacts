const INITIALSTATE = {List:null};
export default (state = INITIALSTATE, action) => {
    switch (action.type) {
      case 'CONTACTSLIST':
        return action.payload;
      default:
        return state;
    }
  }; 