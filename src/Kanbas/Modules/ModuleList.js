import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaEllipsisVertical } from "react-icons/fa6";
import { AiFillCheckCircle } from "react-icons/ai";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { findModulesForCourse,createModule,deleteModuleByModuleId,updateModuleByModuleId} from "./client";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules
} from "./modulesReducer";
function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);
  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    deleteModuleByModuleId(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await updateModuleByModuleId(module);
    dispatch(updateModule(module));
  };

  


  // using use state way
  // const [modules, setModules] = useState(
  //   db.modules.filter((module) => module.course === courseId)
  // );
  // const [module, setModule] = useState({
  //   _id: "",
  //   name: "",
  //   description: "",
  //   course: courseId,
  // });
  // const addModule = () => {
  //   if(module.name !== "" && module.description !== ""){
    
  //   setModules([...modules, module]);
  //   setModule({
  //     name: "",
  //     description: "",
  //   });
  // }
  // };
  // useEffect(() => {
  //   console.log("Updated module description:", module.description);
  // }, [module.description]);

  // const deleteModule = (index) => {
  //   setModules(modules.filter((item, i) => i !== index));
  // };
  // const updateModule = (module) => {
  //   const newModules = modules.map((item) =>
  //     item._id === module._id ? module : item
  //   );
  //   setModules(newModules);
  //   setModule({
  //     _id: "",
  //     name: "",
  //     description:"",
  //   });
  // };
  const handleModuleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setModule({
      ...module,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="float-end ms-5 me-5 module-list-nav">
        <button type="button" className="btn btn-secondary btn-sm ">
          Collapse All
        </button>
        <button type="button" className="btn btn-secondary btn-sm ">
          View progress
        </button>

        <DropdownButton
          id="dropdown-basic-button"
          title="Publish"
          className="btn btn-secondary btn-sm"
        >
          <Dropdown.Item href="#/action-1">
            Publish All items in Modules
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Unpublish</Dropdown.Item>
        </DropdownButton>

        <button type="button" className="btn red-button btn-sm">
          + Modules
        </button>
      </div>
      <div className="clearfix"></div>
      <div className="mt-3 me-5">
      <input
        value={module.name}
        name="name"
        onChange={handleModuleChange}
        className="me-3 form-control"
        placeholder="Module Name"
      />
      <textarea
        value={module.description}
        name="description"
        onChange={handleModuleChange}
        className="me-3 form-control mt-3"
        placeholder="Module Description"
      />
      </div>
      <div className="float-end me-5 mt-2">
      <button onClick={()=> handleAddModule()} className="me-3 btn btn-warning btn-sm">
        Add Module
      </button>
      <button onClick={() => handleUpdateModule()} className="btn btn-success btn-sm">
        Update
      </button>
      </div>
      <div className="clearfix"></div>
      <ul className="list-group mt-3 mb-5 me-5 wd-modulelist">
        {modules.map((module, index) => (
          <>
            <li key={index} className="list-group-item">
              <div>
                <IoEllipsisVerticalSharp />
                <IoEllipsisVerticalSharp />
                &emsp;<span className="fw-bold">{module.name}</span>
                <span className="d-inline float-end">
                  <button
                    onClick={() => dispatch(setModule(module))}
                    className="btn btn-primary me-3 btn-sm"
                  >
                    Edit
                  </button>
              <button onClick={() => handleDeleteModule(module._id)} className="btn btn-danger btn-sm me-3">Delete</button>
                  <AiFillCheckCircle className="checkcircle" />
                  <FaEllipsisVertical />
                </span>
              </div>
            </li>
            {
              <li className="list-group-item ">
                <IoEllipsisVerticalSharp />
                <IoEllipsisVerticalSharp />
                &emsp; &emsp;&emsp;{module.description}
                <span className="d-inline float-end">
                  <AiFillCheckCircle className="checkcircle" />
                  <FaEllipsisVertical />
                </span>
              </li>
            }
          </>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;
