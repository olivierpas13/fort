import styled from 'styled-components';

const StyledProject = styled.section`
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 1px solid #bbb;
    border-radius: 0.5em;
    box-shadow: 0px 0px 1px black;
    width: 100%;
    /* /* height: 100%; */
    height: 100%;
    .project-name{
        /* background-color: red; */
        padding: 1em;
        display: flex;
        flex-direction: row;
        /* align-items: center; */
        img{
            flex: 1;
        }
        h2{
            flex: 1;
            padding-left: 1em;
            font-size: 1.8em;
            font-weight: 500;
        }
    }
    .project-stats{
        box-shadow: 0px 0px solid black;
        border-top: 2px solid gray;
        border-bottom: 2px solid gray;
        display: flex;
        justify-content: center;
        height: 15em;
        width: 100%;
    }
    .project-buttons{
        display: flex;
        justify-content: center;
    }
`;
export default StyledProject;
