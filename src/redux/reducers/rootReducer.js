import {combineReducers} from "redux";
import categoriesReducer from "./categoriesReducer";
import imagesReducer from "./imagesReducer";

const rootReducer = combineReducers({
    categoriesReducer,
    imagesReducer
})

export default rootReducer