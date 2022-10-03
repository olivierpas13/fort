import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

import { getSingleOrganization } from 'services/organizations';
import StyledDashboard from './StyledDashboard';
import DataPie from 'components/DataOrganization/DataPie';
import { getAllOrganizationStats } from 'services/issues';
import { organizeStats } from 'utils/organizeStats';

const Dashboard = () => {
  const session = useSession();
  const [organization, setOrganization] = useState({});
  const [project, setProject] = useState({});
  const [issuesStats, setIssuesStats] = useState({});

  const handleChange = (event) => {
    setProject(event.target.value);
  };

  useEffect(() => {
    if (session.status === 'authenticated' && Object.entries(organization).length === 0) {
      const {
        data: { user },
      } = session;
      getSingleOrganization(user.organization).then((res) =>
        setOrganization(res.data)
      );
      getAllOrganizationStats(user.organization).then((res) =>
        setIssuesStats(organizeStats(res.data))
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  if (session.status === 'authenticated') {
    const { data: { user } } = session;

    return (
      Object.entries(issuesStats).length !== 0 && Object.entries(issuesStats).length !== 0 && <StyledDashboard>
        <section className="dashboard-title">
          <h2 className='organization-title' >{user.organization}</h2>
        </section>
        <div className="select">
          {/* <FormControl width={100}> */}
          <InputLabel id="project-label">Project</InputLabel>
          <Select
            labelId="project-label"
            id="project-select"
            value={project}
            label="Project"
            onChange={handleChange}
            fullWidth
          >
            {organization?.projects?.map((project) => (
              <MenuItem key={project.id} value={project}>
                {project.name}
              </MenuItem>
            ))}
            {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
        </div>
        <section className="stats">
          <article className="projects">
            <div className="title">
              <h3>Projects</h3>
            </div>
            <div className="stat">
              <h3>{organization?.projects?.length}</h3>
            </div>
          </article>
          <article className="issues">
            <div className="title">
              <h3>Issues</h3>
            </div>
            <div className="stat">
              <h3>{issuesStats?.statusStats[0]?.value + issuesStats?.statusStats[1]?.value}</h3>
            </div>
          </article>
          <article className="users">
            <div className="title">
              <h3>Users</h3>
            </div>
            <div className="stat">
              <h3>{organization.users.length}</h3>
            </div>
          </article>
        </section>
        <section className='data-tables' >
          <article className='priority-table' >
            <div className='table-title' >
              <h2>Issues by priority</h2>
            </div>
            <div className='table-graph'>
              <DataPie data={issuesStats.priorityStats} />
            </div>          </article>
          <article className='status-table' >
            <div className='table-title' >
              <h2>Issues by status</h2>
            </div>
            <div className='table-graph'>
              <DataPie data={issuesStats.statusStats} />
            </div>
          </article>
          <article className='project-issues-table' >
            <div className='table-title' >
              <h2>Issues by project</h2>
            </div>
            <div className='table-graph'>
              <DataPie data={issuesStats.projectsIssuesStats} />
            </div>
          </article>
        </section>
      </StyledDashboard>
    );
  }
};

export default Dashboard;
