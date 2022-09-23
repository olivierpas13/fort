import styled from 'styled-components';

const StyledProjects = styled.section`
    /* width: 80vw; */
    h1{
        font-size: 2.2em;
        font-weight: 500;
        margin-bottom: 1em;
    }
    .projects{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;

export default StyledProjects;