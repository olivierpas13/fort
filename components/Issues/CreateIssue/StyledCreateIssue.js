import styled from 'styled-components';

const StyledCreateIssue = styled.div`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;

  .modal {
    width: 500px;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      h2 {
        font-size: 24px;
        font-weight: bold;
        margin: 0;
      }

      .close-btn {
        cursor: pointer;
        font-size: 24px;
        color: #888;
        border: none;
        background-color: transparent;
        outline: none;
      }
    }

    form {
      display: flex;
      flex-direction: column;

      div {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;

        label {
          font-size: 16px;
          margin-bottom: 10px;
        }

        input,
        select,
        textarea {
          padding: 10px;
          font-size: 16px;
          border: none;
          border-radius: 4px;
          background-color: #f4f4f4;
          resize: none;

        }
      }

      button {
        padding: 10px;
        font-size: 16px;
        color: #fff;
        background-color: #111;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: all 300ms;

        &:hover {
            background-color: #222;
        }

        &:active{
            background-color: #333;
        }

        &:first-child {
          margin-bottom: 0.5em;
        }
      }
    }
  }
`;


// import styled from 'styled-components';
// import { BasicModal } from 'generalStyledComponents/Modal';

// const StyledCreateIssue = styled(BasicModal)`
// `;

export default StyledCreateIssue;
