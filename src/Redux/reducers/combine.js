import { combineReducers } from "redux";
import { homeReducer } from "./homeReducer";
import { productReducer } from "./productsReducer";

import { userReducer } from "./usersReducer";

export const reducer = combineReducers({
    user: userReducer,
    product: productReducer,
    total: homeReducer
})