import axios from "axios";
// const COURSES_URL = "http://localhost:4000/api/courses";
const COURSES_URL = "https://kanbas-node-server-app-zoe-a6-e1978b226346.herokuapp.com/api/courses";
export const createAssignments = async (courseId, assignment) => {
    const response = await axios.post(
      `${COURSES_URL}/${courseId}/assignments`,
      assignment
    );
    return response.data;
  };