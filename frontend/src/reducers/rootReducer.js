import {combineReducers} from "redux";

import ContactsReducer from "./contactReducer";
import CounterReducer from "./counterReducer";

const rootReducer = combineReducers({contactsData:ContactsReducer,counterData:CounterReducer})

export default rootReducer