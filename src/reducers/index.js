import { combineReducers } from 'redux';
import ItemsReducer from "./reducer_items";
import PagesReducer from "./reducer_pages";

const storeReducers = combineReducers({
    items: ItemsReducer,
    pages: PagesReducer
  });

  export default storeReducers;