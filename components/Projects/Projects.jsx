import { useEffect, useState } from 'react';

import Project from './SingleProject/Project';
import {
  getAllProjectsWeeklyStats,
} from 'services/organizations';

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
      if (
        session?.user?.organization &&
        session?.user?.role === 'administrator'
      ) {
        const { data: projects } = await getAllProjectsWeeklyStats(
          session.user.organization
        );

        setProjects(projects);
      }
    };
    fetchProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ session?.user?.organization]);

  return (
    <StyledProjects>
      {projects.length !== 0 ? (
        <div>
          <h1>Projects</h1>
          <BasicButton onClick={() => setModalVisibility(true)}>
            Create New Project
          </BasicButton>
          {modalVisibility && <CreateProject projects={projects} setProjects={setProjects} handleClose={handleClose} />}
          <section className="projects">
            {projects.map((project) => (
              <Project project={project} key={project.id} />
            ))}
          </section>
        </div>
      ) : (
        <div>
          <h1>No projects created</h1>
          <BasicButton onClick={() => setModalVisibility(true)}>
            Create New Project
          </BasicButton>
          {modalVisibility && <CreateProject handleClose={handleClose} />}
        </div>
      )}
    </StyledProjects>
  );
};

export default Projects;
