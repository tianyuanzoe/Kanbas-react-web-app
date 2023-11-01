import { createSlice } from "@reduxjs/toolkit";
import db from "../Database";
import { ConstructionOutlined } from "@mui/icons-material";


const initialState = {
  modules: db.modules,
  module: {
    _id: "",
    name: "",
    description: "",
  },
};


const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state,action) => {
      state.modules = [
        ...state.modules,{ ...action.payload, _id: new Date().getTime().toString() }
      ];
      state.module={
        _id: "",
        name: "",
        description: "",
      }
    },
    deleteModule: (state, action) => {
      state.modules = state.modules.filter(
        (module,i) => module._id !== action.payload
      );
    },
    updateModule: (state, action) => {
      state.modules = state.modules.map((module) => {
        if (module._id === action.payload._id) {
          return action.payload;
        } else {
          return module;
        }
      });
      state.module = {
        _id: "",
        name: "",
        description:"",
      }
    },
    setModule: (state, action) => {
      state.module = action.payload;
    },
  },
});


export const { addModule, deleteModule,
  updateModule, setModule } = modulesSlice.actions;
export default modulesSlice.reducer;

