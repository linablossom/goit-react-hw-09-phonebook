import { combineReducers } from "redux";
import contacts from "./contactsReducer";
import filter from "./filterReducer";
import user from "./userReducer";

export default combineReducers({
  contacts,
  filter,
  user,
});
