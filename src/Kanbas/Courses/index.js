import { Navigate, Route, Routes, useParams,useLocation } from "react-router-dom";
import CourseNavigation from "../CourseNavigation";
import CourseName from "../CourseName";
import Modules from "../Modules";
import Home from "../Home"
import Assignments from "../Assignments";
import AssignmentEditor from "../AssignmentEditor";
import Grades from "../Grades";
import AddAssignment from "../AddAssignment";

function Courses({courses}) {
  const {  "*": module,courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div className="row">
      <div className = 'row d-none d-sm-none d-md-none d-lg-block ms-3'>
        <CourseName id = {course._id} module = {module} />
        </div>
        <div className="row">
          <div className = 'd-none d-sm-none d-md-none d-lg-block col-lg-1  p-0 ms-3'>
      <CourseNavigation />
      </div>
      <div className="col p-0 ms-5">
        <div
          className="overflow-y-scroll col bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId"
                   element={<AssignmentEditor/>}/>
            <Route path="Assignments/addAssignment"
                   element={<AddAssignment/>}/>
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Courses;