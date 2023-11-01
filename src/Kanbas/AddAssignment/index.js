import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../Database";
import { Link } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./index.css";
import { addAssignment, setAssignment } from "../Assignments/assignmentsReducer";
import { useSelector, useDispatch } from "react-redux";
function AddAssignment() {
  const assignment = useSelector((state)=>state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    dispatch(addAssignment({...assignment, course: courseId}));
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="wd-assignmentEditor">
      <div className="d-flex align-items-center float-end">
        <AiFillCheckCircle className="checkcircle" />
        <p5 className="text-success">Published</p5>
      </div>
      <div className="clearfix"></div>
      <hr></hr>
      <h3>Assignment Name</h3>
      <input  className="form-control mb-2" placeholder="New Assignment" onChange={(e)=>dispatch(setAssignment({...assignment,title:e.target.value}))}/>
      <textarea className="form-control mb-2" placeholder="New Assignment Description" />

      {/* <!-- rows and cols  --> */}
      <div className="container text-center mt-3">
        <div className="row mb-3">
          <div className="col">
            <label for="points" className="form-label">
              Points
            </label>
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              id="points"
              placeholder="100"
              max="100"
              min="0"
              step="5"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label for="assignemnt_group" className="form-label">
              Assignment Group
            </label>
          </div>
          <DropdownButton
            id="assignemnt_group"
            title="Assignment Group"
            className="btn btn-secondary btn-sm col"
          >
            <Dropdown.Item href="#/action-1">
            Action            
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label for="grades_display" className="form-label">
              Display Grade as
            </label>
          </div>
          <DropdownButton
            id="grades_display"
            title="Percentage"
            className="btn btn-secondary btn-sm col"
          >
            <Dropdown.Item href="#/action-1">
            Action            
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          </DropdownButton>
         
        </div>
        <div className="row mb-3">
          <div claclassNamess="col"></div>
          <div className="col">
            <input type="checkbox" id="countOrNot" />
            <label for="countOrNot">
              Do not count this assignment towards the final grade
            </label>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label for="submission_type" className="form-label">
              Submission type
            </label>
          </div>
          <DropdownButton
            id="submission_type"
            title="Online"
            className="btn btn-secondary btn-sm col"
          >
            <Dropdown.Item href="#/action-1">
            Action            
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label for="assign" className="form-label">
              Assign
            </label>
          </div>
          <div className="container col">
            {/* <!-- assign to --> */}
            <label for="assign_to" className="form-label row">
              Assign to
            </label>
          
            <DropdownButton
            id="assign_to"
            title="Everyone"
            className="btn btn-secondary btn-sm row"
          >
            <Dropdown.Item href="#/action-1">
            Action            
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          </DropdownButton>

            {/* <!-- due date --> */}
            <label for="due" className="form-label row">
              Due
            </label>
            <input
              type="date"
              className="form-control"
              id="due"
              value="2023-09-01"
            />
        </div>
        </div>
      </div>
      <div className = 'float-end'>
      <Link
        to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn  me-3"
      >
        Cancel
      </Link>
      <button onClick={handleSave} className="btn  me-2 red-button">
       Save
      </button>
      </div>

       
   
   </div>
  );
}

export default AddAssignment;
