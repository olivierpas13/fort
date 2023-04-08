import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import { getSingularProject } from 'services/projects';
import StyledDetailedProject from './StyledDetailedProject';

const DetailedProject = () => {
  const { data: session } = useSession();

  const router = useRouter();

  const [project, setProject] = useState({});

  const projectId = router.asPath.split('/')[4];

  const projectUrl = `${router.basePath}/organizations/${session?.user?.organization}/projects`;

  useEffect(() => {
    if(projectId){
      getSingularProject(projectId).then((res) => {
        setProject(res.data);
      });
    }
  }, [projectId]);
  console.log(project);

  return (
    <StyledDetailedProject>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href={projectUrl}>
          Projects
        </Link>
        <Typography color="text.primary">Project Details</Typography>
      </Breadcrumbs>
      <div className='project-name'>
        <div className="project-logo">
          <Image width={30} height={30} src={project.logo} alt="Project Logo" />
        </div>
        <h1 className="projectName" >{project.name}</h1>
      </div>
      <div className="projectId" >
        <h3>ID {project.id}</h3>
      </div>
    </StyledDetailedProject>
  );
};

export default DetailedProject;
