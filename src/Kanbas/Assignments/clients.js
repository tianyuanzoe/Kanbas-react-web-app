import axios from "axios";
// const COURSES_URL = "http://localhost:4000/api/courses";
const COURSES_URL = "https://kanbas-node-server-app-zoe-ed75f73c8ceb.herokuapp.com/api/courses";
// const ASSIGNMENT_URL = "http://localhost:4000/api/assignments";
const ASSIGNMENT_URL = "https://kanbas-node-server-app-zoe-ed75f73c8ceb.herokuapp.com/api/assignments";
export const findAssignmentsForCourse = async(courseId) =>{
    const response = await axios.get(`${COURSES_URL}/${courseId}/assignments`);
    return response.data;
}
export const deleteAssignment = async(assignmentId) =>{
    const response = await axios.delete(`${ASSIGNMENT_URL}/${assignmentId}`);
    return response.data;
}
export const updateAssignment = async(assignment) =>{
    const response = await axios.put(`${ASSIGNMENT_URL}/${assignment._id}`,assignment);
    return response.data;
}

