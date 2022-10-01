import { useEffect, useState } from 'react';

import Project from './SingleProject/Project';
import { getSingleOrganization } from 'services/organizations';

import StyledProjects from './StyledProjects';
import { BasicButton } from 'generalStyledComponents/Button';
import CreateProject from './CreateProject/CreateProject';
import { useSession } from 'next-auth/react';

const Projects = () => {

  const { data: session } = useSession();

  const [projects, setProjects] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);

  const handleClose = () => {
    setModalVisibility(false);
  };

  useEffect(() => {
    const fetchProjects = async () => {

      const { data: organization } = await getSingleOrganization(session?.user?.organization);
      console.log(organization);
      if(organization?.projects){
        setProjects(organization.projects);
      }
    };
    fetchProjects();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalVisibility, session?.user?.organization]);

  return (
    <StyledProjects>
      <h1>Projects</h1>
      <BasicButton onClick={() => setModalVisibility(true)} >
        Create New Project
      </BasicButton>
      {modalVisibility && <CreateProject handleClose={handleClose} />}
      <section className='projects'>
        {projects.map(project =>
          <Project project={project} key={project.id} />
        )}
      </section>
    </StyledProjects>
  );
};

export default Projects;