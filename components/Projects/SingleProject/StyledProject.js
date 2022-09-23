import styled from 'styled-components';

const StyledProject = styled.section`
    background-color: white;
    border: 1px solid #bbb;
    border-radius: 0.5em;
    box-shadow: 0px 0px 1px black;
    /* height: 100%;
    width: 100%; */
    .project-name{
        padding: 1em;
        display: flex;
        align-items: center;
        h2{
            padding-left: 1em;
            font-size: 1.8em;
            font-weight: 500;
        }
    }
    .project-stats{
        display: flex;
        justify-content: center;
        height: 20em;
        width: 100%;
    }
    .project-buttons{
        display: flex;
        justify-content: center;
    }
`;
export default StyledProject;
