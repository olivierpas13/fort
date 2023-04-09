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
import { DataGrid, GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';
import isEmpty from 'lodash/isEmpty';

import DataPie from 'components/DataOrganization/DataPie';
import DataGraph from 'components/DataOrganization/DataGraph';
import { getSingularProject } from 'services/projects';
import StyledDetailedProject from './StyledDetailedProject';
import { BasicButton } from 'generalStyledComponents/Button';
import getPriorityColor from 'utils/getPriorityColor';
import DetailedIssueModal from 'components/Issues/DetailedIssueModal/DetailedIssueModal';
import countIssues from 'utils/countIssues';
import organizeIssuesByDay from 'utils/organizeIssuesByDay';

const DetailedProject = () => {
  const { data: session } = useSession();

  const router = useRouter();

  const [project, setProject] = useState({});
  const [recentIssue, setRecentIssue] = useState({});
  const [openRecentIssue, setOpenRecentIssue] = useState(false);

  const projectId = router.asPath.split('/')[4];

  const projectUrl = `${router.basePath}/organizations/${session?.user?.organization}/projects`;

  const getLatestIssue = (project) => {
    return project.issues.reduce((latestIssue, currentIssue) => {
      return latestIssue === undefined || new Date(currentIssue.createdOn) > new Date(latestIssue.createdOn)
        ? currentIssue
        : latestIssue;
    }, undefined);
  };

  const columns = [
    // {
    //   field: 'actions',
    //   type: 'actions',
    //   sortable: false,
    //   headerName: '',
    //   width: 50,
    //   // renderCell: (params) => (
    //   //   <>{<Checkbox size="small" checked={findPerson(params.row)} onChange={() => handleChange(params.row)} />}</>
    //   // )
    // },
    {
      field: 'id',
      headerName: 'ID',
      flex: 1,
      renderCell: (params) => <>{params.value}</>
    },
    {
      field: 'title',
      headerName: 'Title',
      flex: 1,
      minWidth: 150,
      renderCell: (params) => <>{params.value}</>
    },
    {
      field: 'description',
      headerName: 'Description',
      flex: 1,
      minWidth: 200,
      renderCell: (params) => <>{params.value}</>
    },
    {
      field: 'priority',
      headerName: 'Priority',
      flex: 1,
      renderCell: (params) => <>{params.value}</>
    },
    {
      field: 'ticketStatus',
      headerName: 'Status',
      flex: 1,
      renderCell: (params) => <>{params.value}</>
    },
    {
      field: 'assignedDev',
      headerName: 'Assigned Developer',
      flex: 1,
      renderCell: (params) => <>{params.value}</>
    },
    {
      field: 'submitter',
      headerName: 'Submitter',
      flex: 1,
      renderCell: (params) => <>{params.value}</>
    },
    {
      field: 'project',
      headerName: 'Project',
      flex: 1,
      renderCell: (params) => <>{params.value}</>
    },
  ];

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
    const { status, priority } = countIssues(project.issues);
    const weeklyIssues = organizeIssuesByDay(project.issues);
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
              <BasicButton>
            Manage users
              </BasicButton>
            </Card>
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

            <section className="graphs">
              <Card className='priority-pie' >
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Issues by priority
                  </Typography>

                  <DataPie data={priority} />
                </CardContent>
              </Card>
              <Card className='status-pie' >
                <CardContent>

                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Issues by status
                  </Typography>
                  <DataPie data={status} />
                </CardContent>
              </Card>
            </section>
          </section>
          <Card className="weekly-issues">
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Weekly issues
              </Typography>
              <DataGraph data={weeklyIssues} />
            </CardContent>
          </Card>
          <div classNAme="issues-table" >
          Issues-table

            <DataGrid
              rows={project.issues}
              columns={columns}
              components={{ Toolbar: GridToolbar }}
              disableColumnSelector
              disableSelectionOnClick
              autoHeight
              pageSize={5}
              rowsPerPageOptions={[5]}
              getRowId={(row) => row.id}
            />
          </div>
        </section>
      </StyledDetailedProject>
    );
  }
};

export default DetailedProject;
