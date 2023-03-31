import { BasicModal } from 'generalStyledComponents/Modal';
import styled from 'styled-components';

const StyledCreateProject = styled(BasicModal)`
.logo-selection {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.logo-selection img {
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 4px;
}

.logo-selection img.selected {
  border-color: #0070f3;
}

`;

export default StyledCreateProject;