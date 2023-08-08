// src/redux/reducers/materialsReducer.js
const initialState = [];

const materialsReducer = (state = initialState, action) => {
    console.log(action,"materialAction")
  switch (action.type) {
    case 'SET_MATERIALS':
      return action.payload; // Make sure action.payload is an array
    default:
      return state;
  }
};

export default materialsReducer;

