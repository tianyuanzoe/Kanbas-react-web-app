import React,{useEffect}from "react";
import { Link, useParams } from "react-router-dom";
import { FaEllipsisVertical, FaFilePen } from "react-icons/fa6";
import { AiFillCheckCircle } from "react-icons/ai";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import AlertDialog from "../AlertDialog";
import {
  setAssignment,setAssignments
} from "../Assignments/assignmentsReducer";
import * as client from './clients';
import "./index.css";
function Assignments() {
  const { courseId } = useParams();
  const courseAssignments = useSelector((state) => state.assignmentsReducer.assignments);

  useEffect(() => {
    client.findAssignmentsForCourse(courseId)
      .then((assignments) => 
        dispatch(setAssignments(assignments)
      ));
  }, [courseId]);



  const dispatch = useDispatch();
  return (
    <div className="wd-assignment">
      {/* assignments nav */}
      <div className="container-fluid">
        <div className="row ms-3">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search for Assignment"
              aria-label="assignment_name"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="col float-end">
            <button
              type="button"
              className="btn btn-secondary btn-sm float-end me-5"
            >
              <IoEllipsisVerticalSharp />
            </button>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments/addAssignment`}>
              {" "}
              <button
                type="button"
                className="btn btn-secondary btn-sm red-button float-end me-3"
              >
                + Assignments
              </button>
            </Link>
            <button
              type="button"
              className="btn btn-secondary btn-sm float-end me-3"
            >
              + Group
            </button>
          </div>
        </div>
      </div>
      <ul className="list-group mt-3 mb-5 me-5 wd-modulelist">
        <li className="list-group-item list-group-item-secondary">
          <IoEllipsisVerticalSharp />
          <IoEllipsisVerticalSharp />
          &emsp;
          <span className="fw-bold">Assignments for course {courseId}</span>
        </li>
        {courseAssignments.map((assignment, index) => (
          <li key={index} className="list-group-item">
            <IoEllipsisVerticalSharp />
            <IoEllipsisVerticalSharp />
            <FaFilePen className="ms-3 filepen" />
            <Link
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              onClick={() => dispatch(setAssignment(assignment))}
            >
              &emsp; &emsp;&emsp; {assignment.title}
            </Link>
            <span className="d-inline float-end">
            <AlertDialog assignment_id = {assignment._id}/>
              <AiFillCheckCircle className="checkcircle" />
              <FaEllipsisVertical />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Assignments;
