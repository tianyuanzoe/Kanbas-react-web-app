import { Link } from "react-router-dom";
import "./index.css";
import { BsPencilSquare } from "react-icons/bs";
import {AiOutlineDelete}  from "react-icons/ai";
function Dashboard({ courses, course, setCourse, addCourse,
  deleteCourse, updateCourse,handleCourseChange }
) {
  return (
    <>
      <div>
        <div className="ms-5">
          <h1>Dashboard</h1>
          <hr />
          <h2>Published Courses</h2>
          <hr />
        </div>
      </div>
      {/* card */}
      <div className="ms-5 wd-dashboard mb-3">
       <input
        type="text"
        name="name"
        value={course.name}
        onChange={handleCourseChange}
        placeholder="name"
        className="me-3 form-control"
      />
      <input
        type="text"
        name="number"
        value={course.number}
        onChange={handleCourseChange}
        placeholder="number"
        className="me-3 form-control"
      />
      <input
        type="date"
        name="startDate"
        value={course.startDate}
        onChange={handleCourseChange}
        placeholder="startDate"
        className="me-3 form-control"
      />
      <input
        type="date"
        name="endDate"
        value={course.endDate}
        onChange={handleCourseChange}
        placeholder="endDate"
        className="me-3 form-control"
      />
      <button onClick={addCourse} className="me-3 btn btn-warning">Add Course</button>
      <button onClick={() => updateCourse(course)} className="btn btn-success">
            Update </button>
      </div>
        <div className="container-fluid ms-5">
        <div className="row ">
        {courses.map((course,index) => (
          <div className="col col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 " key = {index}>
          <div className="card h-100 ">
            <img src="/images/react.jpeg" className="card-img-top" alt="..."/>
            <div className="card-body">
            <Link
            key={course._id}
            to={`/Kanbas/Courses/${course._id}`}
          >
            {course.name} 
          </Link>              
          <p className="card-text">{course.number}  {course._id}</p>
              <i className="fa-solid fa-pen-to-square"></i>
              <button onClick={() => setCourse(course)} className="btn btn-primary me-3">
              <BsPencilSquare />
              Edit </button>
              <button onClick={() => deleteCourse(course)} className="btn btn-danger">
              <AiOutlineDelete/>
              Delete</button>
            </div>
          </div>
        </div>
        ))}
          </div>
        </div>
    </>
  );
}
export default Dashboard;
