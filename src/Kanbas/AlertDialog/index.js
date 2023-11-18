import { useState}from 'react';
import  React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from "react-redux";
import {
  deleteAssignment,
} from "../Assignments/assignmentsReducer";
import * as client from '../Assignments/clients';

export default function AlertDialog({assignment_id}) {
  const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
  const handleDeleteAssignment = (assignment_id) => {
    client.deleteAssignment(assignment_id).then((status) => {
        setOpen(false);
        dispatch(deleteAssignment(assignment_id));
    });
    };

    const handleCancel = () => {
        setOpen(false);
        dispatch(deleteAssignment(assignment_id))
      };

  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button  onClick={handleClickOpen} className="btn btn-danger btn-sm me-3">
        Delete
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"are you sure you want to delete this assignment?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            once the assignment is deleted it cannot be recovered
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDeleteAssignment(assignment_id)}>Yes</Button>
          <Button onClick={handleClose} autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
