import { useState } from 'react';

import IssuesTable from './IssuesTable/IssuesTable';
import StyledIssues from './StyledIssues';
import CreateIssue from './CreateIssue/CreateIssue';
import { BasicButton } from 'generalStyledComponents/Button';

const Issues = () => {

  const [currentFilter, setCurrentFilter] = useState('unresolved');
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  console.log(handleClose);

  return (
    <StyledIssues>
      <h1>Issues</h1>
      <div className='filter-options'>
        <ul>
          <li>
            <button
              style={{ borderBottom: currentFilter === 'unresolved'? '2px solid #aaa' : '' }}
              onClick={() => (setCurrentFilter('unresolved'))}
            >
              All Unresolved
            </button>
          </li>
          <li>
            <button
              style={{ borderBottom: currentFilter === 'review'? '2px solid #aaa' : '' }}
              onClick={() => (setCurrentFilter('review'))}
            >
              For Review
            </button>
          </li>
          <li>
            <button
              style={{ borderBottom: currentFilter === 'ignored'? '2px solid #aaa' : '' }}
              onClick={() => (setCurrentFilter('ignored'))}
            >
              Ignored
            </button>
          </li>
        </ul>
        <hr className='separator'/>
      </div>
      <div className='issues-table' >
        <IssuesTable/>
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