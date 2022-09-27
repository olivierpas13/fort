import { useState } from 'react';
// import { Button, Modal, Typography, Box } from '@mui/material';
import { BasicButton } from 'generalStyledComponents/Button';
import AppLayout from 'layouts/app';
import IssuesComponent from 'components/Issues/Issues.jsx';
import CreateIssue from 'components/Issues/CreateIssue/CreateIssue';

const Issues = () => {
  return (
    <AppLayout>
      <IssuesComponent/>
      {/* <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal> */}
    </AppLayout>
  );
};

export default Issues;