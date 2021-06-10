import { combineReducers } from  "redux";
import { products } from "./products"
import { cartItems } from "./cartItems"


export const rootReducer = combineReducers({products, cartItems})