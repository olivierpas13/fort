import styled from 'styled-components';

export const BasicModal = styled.div`
    position: fixed; 
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4);
  .modal-content{
        display: flex;
        min-height: 50vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        & form{
            background-color: #eee;
            font-size: 100%;
            width: 70vh;
            display: flex;
            align-items: center;
            text-align: center;
            display: flex;
            flex-direction: column;
            border: 1px solid black;
            border-radius: 15px;
            height: 90%;
            margin-top: 5%;
            padding: 1% 5%;
    }
    }
`;