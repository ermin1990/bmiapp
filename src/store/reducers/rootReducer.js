import authReducer from "./authReducer";
import listsReducer from "./listsReducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
  auth: authReducer,
  user: listsReducer,
});

export default rootReducer;