import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { InputLabel, Select, MenuItem } from '@mui/material';
import isEmpty from 'lodash/isEmpty';

import { getSingleOrganization } from 'services/organizations';
import StyledDashboard from './StyledDashboard';
import DataPie from 'components/DataOrganization/DataPie';
import { getAllOrganizationStats } from 'services/issues';
import { organizeStats } from 'utils/organizeStats';
import { getProjectStats } from 'services/projects';

const Dashboard = () => {

  const session = useSession();
  const [organization, setOrganization] = useState({});
  const [project, setProject] = useState({});
  const [fetchedProject, setFetchedProject] = useState({});
  const [issuesStats, setIssuesStats] = useState({});

  const handleChange = (event) => {

    setProject(event.target.value);
    if(Object.entries(project) !== 0){
      getProjectStats(event.target.value.id).then(res => setFetchedProject( organizeStats( res.data ) ));
    }
  };

  useEffect(() => {
    if (session.status === 'authenticated' && Object.entries(organization).length === 0) {
      const { data: { user } } = session;
      if(user.role === 'administrator'){
        getSingleOrganization(user.organization).then((res) =>
          setOrganization(res.data)
        );
        getAllOrganizationStats(user.organization).then((res) =>
          setIssuesStats(organizeStats(res.data))
        );
      }
      if(Object.entries(project) !== 0 && user.project){

        setProject({
          organization: user.organization,
          name: user.organization,
        });

        getProjectStats(user.project).then(res => setFetchedProject( organizeStats( res.data ) ));
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  if (session.status === 'authenticated') {
    const { data: { user } } = session;
    console.log(issuesStats);
    return (
      <StyledDashboard>
        { !user?.project && <div className="select">
          <InputLabel id="project-label">Project</InputLabel>
          <Select
            labelId="project-label"
            id="project-select"
            value={project}
            label="Project"
            onChange={handleChange}
            fullWidth
          >
            <MenuItem  value={{}}>
                All Projects
            </MenuItem>
            {organization?.projects?.map((project) => (
              <MenuItem key={project.id} value={project}>
                {project.name}
              </MenuItem>
            ))}
          </Select>
        </div>}
        {(Object.entries(project).length !== 0 && Object.entries(fetchedProject).length !== 0) &&
         <>
           <section className="dashboard-title">
             <h2 className='organization-title' >{fetchedProject.name}</h2>
           </section>
           <section className="stats">
             <article className="issues">
               <div className="title">
                 <h3>Issues</h3>
               </div>
               <div className="stat">
                 <h3>{issuesStats.totalIssues}</h3>
               </div>
             </article>
             <article className="users">
               <div className="title">
                 <h3>Users</h3>
               </div>
               <div className="stat">
                 <h3>{fetchedProject.users}</h3>
               </div>
             </article>
           </section>
           {
             !isEmpty(fetchedProject.statusStats)?
               <section className='data-tables' >
                 <article className='priority-table' >
                   <div className='table-title' >
                     <h2>Issues by priority</h2>
                   </div>
                   <div className='table-graph'>
                     <DataPie data={fetchedProject.priorityStats} />
                   </div>          </article>
                 <article className='status-table' >
                   <div className='table-title' >
                     <h2>Issues by status</h2>
                   </div>
                   <div className='table-graph'>
                     <DataPie data={fetchedProject.statusStats} />
                   </div>
                 </article>
               </section>
               : Object.entries(project).length !== 0 && <h2 className='no-data-found-message' >Unable to show stats, no data found.</h2>
           }
         </>
        }
        {( Object.entries(project).length === 0 && Object.entries(issuesStats).length !== 0) &&
      <>
        <section className="dashboard-title">
          <h2 className='organization-title' >{user.organization}</h2>
        </section>
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
              {issuesStats.totalIssues}
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
              {/* here */}
              <DataPie data={issuesStats.projectsIssuesStats} />
            </div>
          </article>
        </section>
      </>
        }
      </StyledDashboard>
    );
  }
};

export default Dashboard;
