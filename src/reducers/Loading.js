const INITIALSTATE = {loading:true};
export default (state = INITIALSTATE, action) => {
    switch (action.type) {
      case 'LOADING':
        return action.payload
      default:
        return state;
    }
  }; 