// StyledLogoSelectionModal.js
import styled from 'styled-components';

const StyledLogoSelectionModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  .modal-content {
    background-color: white;
    border-radius: 8px;
    padding: 24px;
    position: relative;
    max-width: 80%;
    max-height: 80%;
    overflow-y: auto;
  }

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

export default StyledLogoSelectionModal;
