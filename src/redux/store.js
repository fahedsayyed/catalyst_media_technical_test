// src/redux/store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import colorsReducer from '../redux/reducer/colorReducer';
import materialsReducer from '../redux/reducer/materialReducer';
import productReducer from './reducer/productReducer';
import cartReducer from './reducer/cartReducer';

const rootReducer = combineReducers({
  colors: colorsReducer,
  materials: materialsReducer,
  products: productReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
