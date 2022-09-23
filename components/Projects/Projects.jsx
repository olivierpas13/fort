import StyledProjects from './StyledProject';
import Project from './SingleProject/Project';

const Projects = () => {
  return (
    <StyledProjects>
      <h1>Projects</h1>
      <section className='projects'>
        <Project/>
      </section>
    </StyledProjects>
  );
};

export default Projects;