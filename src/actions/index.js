
//async action using



export const ContactsList = () => {
  return (dispatch) => {
    fetch('https://randomuser.me/api/?results=5000', 'GET')
      .then((contacts) => contacts.json())
      .then((list) => {
        dispatch({ type: 'CONTACTSLIST', payload: list })
      }).then(() => {
        dispatch({ type: 'LOADING', payload: false })
      })
      .catch((error) => { console.log('getting error in actinos index') })
  }
}

