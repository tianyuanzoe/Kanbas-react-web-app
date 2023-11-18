import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modules: [],
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
    setModules: (state, action) => {
        state.modules = action.payload;
      },  
    addModule: (state,action) => {
      state.modules = [
        ...state.modules, action.payload
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
  updateModule, setModule,setModules } = modulesSlice.actions;
export default modulesSlice.reducer;

