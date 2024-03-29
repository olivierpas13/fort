import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import getPriorityColor from 'utils/getPriorityColor';
import { BiCodeAlt, BiPen } from 'react-icons/bi/';

import StyledDetailedIssueModal from './StyledDetailedIssueModal';

const DetailedIssueModal = ({ selectedIssue, open, handleClose }) => {

  return (
    <Modal
      open={open}
      onClose={() => {handleClose();}}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledDetailedIssueModal>
        <Box className="modal-content">
          <Typography variant="h4" component="div">
            {selectedIssue.title}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          ID {selectedIssue.id}
          </Typography>
          <Chip className="status-chip" label={selectedIssue.ticketStatus} size="small" variant="outlined" color={selectedIssue.ticketStatus === 'open'? 'error': 'success'} />
          <Chip className="priority-chip" label={selectedIssue.priority} size="small" variant="outlined" color={getPriorityColor(selectedIssue.priority)}/>
          <br />
          <p className="description" >
            {selectedIssue.description}
          </p>
          <Chip className="dev-chip" icon={<BiCodeAlt size={'1.8em'} />} label={selectedIssue.assignedDev} variant="outlined" />
          <Chip icon={<BiPen size={'1.8em'}/>}  label={selectedIssue.submitter} variant="outlined" />

        </Box>
      </StyledDetailedIssueModal>
    </Modal>
  );
};

export default DetailedIssueModal;