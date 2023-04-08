import styled from 'styled-components';

const StyledProjects = styled.section`
  h1 {
    font-size: 2.2em;
    font-weight: 500;
    margin-bottom: 0.2em;
  }

  .projects {
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5em;
    padding: 1em;
  }

  @media (max-width: 768px) {
    .projects {
      grid-template-columns: 1fr;
    }
  }
`;

export default StyledProjects;


// import styled from 'styled-components';

// const StyledProjects = styled.section`
//     h1{
//         font-size: 2.2em;
//         font-weight: 500;
//         margin-bottom: 0.2em;
//     }
//     .projects{
//         margin: auto;
//         display: grid;
//         grid-template-columns: 1fr 1fr;
//         column-gap: 6em;
//         row-gap: 1em;
// }
// `;

// export default StyledProjects;