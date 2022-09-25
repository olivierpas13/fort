import { useState } from 'react';

import IssuesTable from './IssuesTable/IssuesTable';
import StyledIssues from './StyledIssues';

const Issues = () => {

  const [currentFilter, setCurrentFilter] = useState('unresolved');

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
    </StyledIssues>
  );
};

export default Issues;