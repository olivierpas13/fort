import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

import { getSingleOrganization } from 'services/organizations';
import StyledDashboard from './StyledDashboard';
import DataPie from 'components/DataOrganization/DataPie';

const Dashboard = () => {
  const session = useSession();
  const [organization, setOrganization] = useState({});
  const [project, setProject] = useState({});
  const [age, setAge] = useState('10');

  const handleChange = (event) => {
    setProject(event.target.value);
  };

  useEffect(() => {
    if (session.status === 'authenticated') {
      const {
        data: { user },
      } = session;
      getSingleOrganization(user.organization).then((res) =>
        setOrganization(res.data)
      );
    }
  }, [session]);

  if (session.status === 'authenticated') {
    const { data: { user } } = session;

    const data = [
      { title: 'One', value: 10, color: '#1A933B', key: 'Test' },
      { title: 'Two', value: 15, color: '#666' },
      { title: 'Three', value: 20, color: '#888' },
    ];

    return (
      <StyledDashboard>
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
              <h3>5</h3>
            </div>
          </article>
          <article className="issues">
            <div className="title">
              <h3>Issues</h3>
            </div>
            <div className="stat">
              <h3>15</h3>
            </div>
          </article>
          <article className="users">
            <div className="title">
              <h3>Users</h3>
            </div>
            <div className="stat">
              <h3>3</h3>
            </div>
          </article>
        </section>
        <section className='data-tables' >
          <article className='priority-table' >
            <div className='table-title' >
              <h2>Issues by priority</h2>
            </div>
            <div className='table-graph'>
              <DataPie data={data} />
            </div>          </article>
          <article className='type-table' >
            <div className='table-title' >
              <h2>Issues by type</h2>
            </div>
            <div className='table-graph'>
              <DataPie data={data} />
            </div>
          </article>
          <article className='status-table' >
            <div className='table-title' >
              <h2>Issues by status</h2>
            </div>
            <div className='table-graph'>
              <DataPie data={data} />
            </div>
          </article>
        </section>
      </StyledDashboard>
    );
  }
};

export default Dashboard;
