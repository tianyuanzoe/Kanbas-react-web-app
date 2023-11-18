import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useState,useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
function Kanbas() {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    _id: "",
    name: "",
    number: "",
    startDate: "",
    endDate: "",
  });
  const addCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      ...courses,
      response.data,
    ]);
    setCourse({  _id: "",
    name: "",
    number: "",
    startDate: "",
    endDate: "" });
  };
  const deleteCourse = async (course) => {
    const response = await axios.delete(
      `${URL}/${course._id}`
    );
    setCourses(courses.filter(
      (c) => c._id !== course._id));
  };
  const updateCourse = async (course) => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    const newCourses = courses.map((item) =>
    (item._id === course._id ? course : item));
    setCourses(newCourses);
    setCourse({
      _id: "",
      name: "",
      number: "",
      startDate: "",
      endDate: "",
      });
  };


  const handleCourseChange = (e) => {
    const { name, value } = e.target;
    setCourse({
      ...course,
      [name]: value,
    });
  };
  const URL = "http://localhost:4000/api/courses";
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  return (
    <Provider store={store}>
    <div className="d-flex">
      <KanbasNavigation />
      <div style={{ flex: 1 }}>
      <Routes>
      <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addCourse={addCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}
              handleCourseChange = {handleCourseChange}
              />
 } />
          <Route path = "Courses" element={<h1>Courses</h1>} />
          <Route path="Courses/:courseId/*" element={<Courses courses = {courses}/>} />
        </Routes>
      </div>
    </div>
    </Provider>
  );
}
export default Kanbas;