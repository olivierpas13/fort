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
    .content-container{
        display: grid;
        grid-template-columns: 1.2fr 1.7fr;
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 40px;
        grid-row-gap: 30px;
        padding: 0;
        .recent-issue{
            .priority-chip, .status-chip{
                margin: 0.2em;
            }
            .issue-date{
                padding: 0.2em;
            }
            .card-actions{
                margin-top: -1em;
            }
        }
        .graphs{
            display: flex;
            justify-content: space-evenly;
            .priority-pie, .status-pie{
                height: 15em;
                width: 15em;
            }
        }
        .total-users{
            .recent-issue{
                margin-top: 1em;
            }
        }
    }

`;

export default StyledDetailedProject;
