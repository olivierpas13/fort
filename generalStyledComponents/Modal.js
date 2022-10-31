import styled from 'styled-components';

export const BasicModal = styled.div`
    position: fixed; 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4);
  .modal-content{
        width: fit-content;
        display: flex;
        overflow: hidden;
        /* height: 100%; */
        min-height: 50vh;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        background-color: #eee;
        font-size: 100%;
        border: 1px solid black;
        border-radius: 15px;
        padding: 1% 5%;
        & form{
            width: 100%;
            display: flex;
            align-items: center;
            text-align: center;
            flex-direction: column;
            height: 90%;  
            input{
                padding: 0.2em;
            }
            & select{
              flex: 1;
              padding: 3px 5px;
              font-size: 1em;
              margin-left: 15px;
              border: 1px solid #bbb;
              border-radius: 3px;
            }
    }
    }
`;