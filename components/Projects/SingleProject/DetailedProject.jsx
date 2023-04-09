import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import isEmpty from 'lodash/isEmpty';

import { getSingularProject } from 'services/projects';
import StyledDetailedProject from './StyledDetailedProject';
import { BasicButton } from 'generalStyledComponents/Button';
import getPriorityColor from 'utils/getPriorityColor';
import DetailedIssueModal from 'components/Issues/DetailedIssueModal/DetailedIssueModal';

const DetailedProject = () => {
  const { data: session } = useSession();

  const router = useRouter();

  const [project, setProject] = useState({});
  const [recentIssue, setRecentIssue] = useState({});
  const [openRecentIssue, setOpenRecentIssue] = useState(false);

  const projectId = router.asPath.split('/')[4];

  const projectUrl = `${router.basePath}/organizations/${session?.user?.organization}/projects`;

  function getLatestIssue(project) {
    return project.issues.reduce((latestIssue, currentIssue) => {
      return latestIssue === undefined || new Date(currentIssue.createdOn) > new Date(latestIssue.createdOn)
        ? currentIssue
        : latestIssue;
    }, undefined);
  }

  useEffect(() => {
    if(projectId){
      getSingularProject(projectId).then((res) => {
        setProject(res.data);
      });
    }
  }, [projectId]);

  useEffect(() => {
    if(!isEmpty(project)){
      setRecentIssue(getLatestIssue(project));
    }
  }, [project]);

  if(!isEmpty(project)){
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
        <section className="content-container" >
          <section className="total-users" >
            <Card>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Users
                </Typography>
                <Typography variant="h4" component="div">
                  {project.users.length}
                </Typography>
              </CardContent>
            </Card>
            <BasicButton>
            Manage users
            </BasicButton>
          </section>
          <section className="total-issues">
            <Card>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Total Issues
                </Typography>
                <Typography variant="h4" component="div">
                  {project.issues.length}
                </Typography>
              </CardContent>
            </Card>
            <div className="issues-stat" >
              <h3>
              </h3>
              <h4>
              </h4>
            </div>
            <Card className="recent-issue">
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Most recent issue
                </Typography>
                <Typography variant="h5" component="div">
                  {recentIssue.title}
                </Typography>
                <Chip className="status-chip" label={recentIssue.ticketStatus} size="small" variant="outlined" color={recentIssue.ticketStatus === 'open'? 'error': 'success'} />
                <Chip className="priority-chip" label={recentIssue.priority} size="small" variant="outlined" color={getPriorityColor(recentIssue.priority)
                } />
                <Typography className="issue-date" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {recentIssue.createdOn}
                </Typography>
              </CardContent>
              <CardActions className="card-actions" >
                <BasicButton className="details-button" onClick={() => {setOpenRecentIssue(true);}}>More details</BasicButton>
                <DetailedIssueModal open={openRecentIssue} handleClose={() => setOpenRecentIssue(false)} recentIssue={recentIssue} />
              </CardActions>
            </Card>
            <section className="graphs">
              <div className='priority-pie' >
              Priority pie
              </div>
              <div className='status-pie' >
              Status pie
              </div>
            </section>
          </section>
          <div className="weekly-issues">
          Weekly-issues graph
          </div>
          <div classNAme="issues-table" >
          Issues-table
          </div>
        </section>
      </StyledDetailedProject>
    );
  }
};

export default DetailedProject;
