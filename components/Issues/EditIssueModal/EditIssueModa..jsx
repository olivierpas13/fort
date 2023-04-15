import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  MenuItem,
} from '@mui/material';

const EditIssueModal = ({ issue, editIssue, open, setOpen, onIssueUpdated, allIssues, setAllIssues }) => {
  const [fields, setFields] = useState({
    title: '',
    priority: '',
    assignedDev: '',
    description: '',
  });
  const [initialFields, setInitialFields] = useState({});

  useEffect(() => {
    if (open) {
      const currentFields = {
        title: issue.title,
        priority: issue.priority,
        assignedDev: issue.assignedDev,
        description: issue.description,
      };
      setFields(currentFields);
      setInitialFields(currentFields);
    }
  }, [open, issue]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    const modifiedFields = Object.entries(fields).reduce((acc, [key, value]) => {
      if (value !== initialFields[key]) {
        acc[key] = value;
      }
      return acc;
    }, {});


    try {
      const { data: editedIssue } = await editIssue({
        id:issue.id,
        fields: modifiedFields,
      });

      onIssueUpdated({
        allIssues,
        setAllIssues,
        updatedIssue: editedIssue,
      });

    } catch (error) {
      throw new Error('Error while editing the issue');
    }

    handleClose();
  };

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const priorities = ['low', 'medium', 'high'];

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Issue</DialogTitle>
        <DialogContent>
          <DialogContentText>Edit the issue details below:</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            name="title"
            type="text"
            fullWidth
            value={fields.title}
            onChange={handleChange}
          />
          <TextField
            select
            margin="dense"
            label="Priority"
            name="priority"
            value={fields.priority}
            onChange={handleChange}
            fullWidth
          >
            {priorities.map((option) => (
              <MenuItem key={option} value={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            margin="dense"
            label="Assigned Developer"
            name="assignedDev"
            type="text"
            fullWidth
            value={fields.assignedDev}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Description"
            name="description"
            type="text"
            fullWidth
            multiline
            rows={4}
            value={fields.description}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditIssueModal;
