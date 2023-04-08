import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';

import { getSingularProject } from 'services/projects';
import StyledDetailedProject from './StyledDetailedProject';

const DetailedProject = () => {

  const { data: session } = useSession();

  const router = useRouter();

  const [project, setProject] = useState({});

  const projectId = router.asPath.split('/')[4];

  const projectUrl = `${router.basePath}/organizations/${session?.user?.organization}/projects`;

  useEffect(() => {
    getSingularProject(projectId).then(res => {setProject(res.data);});

  }, [projectId]);

  return (
    <StyledDetailedProject>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          color="inherit"
          href={projectUrl}
        >
    Projects
        </Link>
        <Typography color="text.primary">Project Details</Typography>
      </Breadcrumbs>
      <h1>{project.name}</h1>
    </StyledDetailedProject>
  );
};

export default DetailedProject;