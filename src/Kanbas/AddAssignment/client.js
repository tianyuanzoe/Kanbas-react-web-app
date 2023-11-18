import axios from "axios";
const COURSES_URL = "http://localhost:4000/api/courses";
export const createAssignments = async (courseId, assignment) => {
    const response = await axios.post(
      `${COURSES_URL}/${courseId}/assignments`,
      assignment
    );
    return response.data;
  };