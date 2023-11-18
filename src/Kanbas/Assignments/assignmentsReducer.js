import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  assignments: [],
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
    setAssignments:(state,action) =>{
        state.assignments = action.payload;
    }
  },
});


export const { addAssignment, deleteAssignment,
    updateAssignment, setAssignment,setAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;

