import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Modules/modulesReducer";
import assignmentsReducer from "../Assignments/assignmentsReducer";


const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer,
  }
});


export default store;