import styled from 'styled-components';

const StyledDetailedIssueModal = styled.section`
    .modal-content{
    position: absolute;
    background-color: #fff;
    top: 50%;
    left: 50%;
    width: 40%;
    transform: translate(-50%, -50%);    
    border-radius: 0.5em;
    border: 1px solid #000;
    padding: 1em;
    .description{
      font-size: 1em;
    }
    .status-chip{
      margin-right: 0.5em;
    }
    .dev-chip{
      margin-right: 0.5em;
    }
  }
`;

export default StyledDetailedIssueModal;