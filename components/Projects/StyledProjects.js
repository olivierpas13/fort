import styled from 'styled-components';

const StyledProjects = styled.section`
    h1{
        font-size: 2.2em;
        font-weight: 500;
        margin-bottom: 0.2em;
    }
    .projects{
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 6em;
        row-gap: 1em;
}
`;

export default StyledProjects;