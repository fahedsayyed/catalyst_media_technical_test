// src/redux/reducers/colorsReducer.js
const initialState = [];

const colorsReducer = (state = initialState, action) => {
  console.log(action,"color action")

  switch (action.type) {
    case 'SET_COLORS':
      return action.payload; // Make sure action.payload is an array
    default:
      return state;
  }
};

export default colorsReducer;

