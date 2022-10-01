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
    </AppLayout>
  );
};

export default Issues;