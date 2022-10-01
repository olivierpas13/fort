import { useState } from 'react';

import IssuesTable from './IssuesTable/IssuesTable';
import StyledIssues from './StyledIssues';
import CreateIssue from './CreateIssue/CreateIssue';
import { BasicButton } from 'generalStyledComponents/Button';

const Issues = () => {

  const [currentFilter, setCurrentFilter] = useState('all');
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  console.log(open);

  return (
    <StyledIssues>
      <h1>Issues</h1>
      <div className='filter-options'>
        <ul>
          <li>
            <button
              style={{ borderBottom: currentFilter === 'all'? '2px solid #aaa' : 'none' }}
              onClick={() => (setCurrentFilter('all'))}
            >
              All Issues
            </button>
          </li>
          <li>
            <button
              style={{ borderBottom: currentFilter === 'open'? '2px solid #aaa' : 'none' }}
              onClick={() => (setCurrentFilter('open'))}
            >
              All Open Issues
            </button>
          </li>
          <li>
            <button
              style={{ borderBottom: currentFilter === 'closed'? '2px solid #aaa' : 'none' }}
              onClick={() => (setCurrentFilter('closed'))}
            >
              All Closed Issues
            </button>
          </li>
        </ul>
        <hr className='separator'/>
      </div>
      <div className='issues-table' >
        <IssuesTable modalVisibility={open} currentFilter={currentFilter} />
      </div>
      <div className='issues-creation'>
        {open && <CreateIssue open={open} handleClose={handleClose}/>}
        <BasicButton onClick={() => handleOpen()} >
        Create New Issue
        </BasicButton>
      </div>
    </StyledIssues>
  );
};

export default Issues;