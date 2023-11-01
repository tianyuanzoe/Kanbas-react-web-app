import { createSlice } from "@reduxjs/toolkit";
import db from "../Database";


const initialState = {
  assignments: db.assignments,
  assignment: {
    _id: "",
    title: "",
    course: "",
  },
};


const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state,action) => {
      state.assignments = [
        ...state.assignments,{ ...action.payload, _id: new Date().getTime().toString() }
      ];
      state.assignment={
        _id: "",
        title: "",
         course: "",
      }
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment,i) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
      state.assignment = {
        _id: "",
        title: "",
        course: "",
      }
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});


export const { addAssignment, deleteAssignment,
    updateAssignment, setAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;

