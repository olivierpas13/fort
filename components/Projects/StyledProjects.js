import styled from 'styled-components';

const StyledProjects = styled.section`
    /* width: 80vw; */
    h1{
        font-size: 2.2em;
        font-weight: 500;
        margin-bottom: 0.2em;
    }
    .projects{
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 1em;
        row-gap: 1em;
        /* padding-bottom: 10em; */
}
`;

export default StyledProjects;