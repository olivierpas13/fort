import styled from 'styled-components';

const StyledDetailedProject = styled.section`
    .project-name{
        display: flex;
        flex-direction: row;
        align-items: center;
        width:: 100%;
        .project-logo{
            margin-right: 0.5em;
        }
        .projectName{
            font-weight: 500;
        }
    }
    .projectId{
        h3{
            font-weight: 300;
            font-size: 1em;
        }
        margin-top: -1em;
        width: fit-content;
    }
`;

export default StyledDetailedProject;
