import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import getPriorityColor from 'utils/getPriorityColor';
import { BiCodeAlt, BiPen } from 'react-icons/bi/';

import StyledDetailedIssueModal from './StyledDetailedIssueModal';

const DetailedIssueModal = ({ recentIssue, open, handleClose }) => {

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
            {recentIssue.title}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          ID {recentIssue.id}
          </Typography>
          <Chip className="status-chip" label={recentIssue.ticketStatus} size="small" variant="outlined" color={recentIssue.ticketStatus === 'open'? 'error': 'success'} />
          <Chip className="priority-chip" label={recentIssue.priority} size="small" variant="outlined" color={getPriorityColor(recentIssue.priority)}/>
          <br />
          <p className="description" >
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id necessitatibus modi similique dignissimos voluptatum eum optio saepe soluta sint accusamus enim odit aut aliquid nostrum, earum sequi dolorum pariatur libero. Error, nemo veniam enim, porro nisi provident, aspernatur voluptate nostrum accusamus ipsam quos magni tempore asperiores! Natus accusantium iste adipisci.
          </p>
          <Chip className="dev-chip" icon={<BiCodeAlt size={'1.8em'} />} label={recentIssue.assignedDev} variant="outlined" />
          <Chip icon={<BiPen size={'1.8em'}/>}  label={recentIssue.submitter} variant="outlined" />

        </Box>
      </StyledDetailedIssueModal>
    </Modal>
  );
};

export default DetailedIssueModal;