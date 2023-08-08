const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_FROM_CART':
      const updatedCartItems = state.cartItems.filter((item) => item.id !== action.payload);
      return {
        ...state,
        cartItems: updatedCartItems,
      };

    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    default:
      return state;
  }
};

export default cartReducer;

  