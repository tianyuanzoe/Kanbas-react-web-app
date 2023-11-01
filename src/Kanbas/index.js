import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    _id: "",
    name: "",
    number: "",
    startDate: "",
    endDate: "",
  });
  const addCourse = () => {
    setCourses([...courses, {...course,_id: new Date().getTime().toString()}]);
    setCourse({
    _id: "",
    name: "",
    number: "",
    startDate: "",
    endDate: "",
    })
  };
  const deleteCourse = (index) => {
    setCourses(courses.filter((item, i) => i !== index));
  };
  const updateCourse = (course) => {
    const newCourses = courses.map((item) =>
      (item._id === course._id ? course : item));
      setCourses(newCourses);
      setCourse({
        _id: "",
        name: "",
        number: "",
        startDate: "",
        endDate: "",
        })
  };
  const handleCourseChange = (e) => {
    const { name, value } = e.target;
    setCourse({
      ...course,
      [name]: value,
    });
  };
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