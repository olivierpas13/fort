import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Form, Field, FormSpy } from 'react-final-form';

import { getSingularProject } from 'services/projects';
import { getSingleOrganization } from 'services/organizations';
import { createIssue } from 'services/issues';
import StyledCreateIssue from './StyledCreateIssue';


const CreateIssue = ({
  isOpen,
  onClose,
  // onSubmit,
  // organizationProjects,
  // projectUsers,
}) => {
  const { data: session } = useSession();
  const [selectedProject, setSelectedProject] = useState(null);
  const [fetchedProject, setFetchedProject] = useState(null);
  const [organizationProjects, setOrganizationProjects] = useState(null);
  const [projectDevelopers, setProjectDevelopers] = useState([]);


  useEffect(() => {
    const fetchData = async() => {
      const { data: organization } = await getSingleOrganization(session?.user?.organization);
      setOrganizationProjects(organization.projects);
    };
    fetchData();
  }, [session?.user?.organization]);

  useEffect(() => {
    if (selectedProject) {
      const fetchProject = async() => {
        const { data: project } = await getSingularProject(selectedProject);
        console.log(project);
        setFetchedProject(project);
        setProjectDevelopers(project.users);
      };
      fetchProject();
    }
  }, [ selectedProject]);

  const onSubmit = async (values) => {
    const issueObject = {
      ...values,
      projectTitle: fetchedProject.name,
      assignedDev: values.developer,
      submitter: session.user?.id,
      organization: session.user?.organization
    };


    const createdIssue = await createIssue(issueObject);
    if(createdIssue){
      onClose();
    }
  };

  const handleProjectChange = (e) => {
    setSelectedProject(
      organizationProjects?.filter((project) => {
        return project.id === e.target.value;
      })[0]);
  };

  const handleReset = (form) => {
    form.reset();
    setSelectedProject(null);
  };

  return (
    <StyledCreateIssue onClick={() => onClose()} isOpen={isOpen}>
      {isOpen && (
        <div className="modal" onClick={(e) => {
          e.stopPropagation();
        }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h2>Create Issue</h2>
              <button className="close-btn" onClick={onClose}>
            &times;
              </button>
            </div>
            <Form
              onSubmit={onSubmit}
              render={({ handleSubmit, form }) => (
                <form onSubmit={handleSubmit}>
                  <FormSpy
                    subscription={ { values: true } }
                    onChange={props => {
                      const { values } = props;
                      if(values.project){
                        setSelectedProject(values.project);

                      }}}
                  />
                  <div>
                    <label>Title</label>
                    <Field name="title" component="input" type="text" />
                  </div>
                  <div>
                    <label>Description</label>
                    <Field name="description" component="textarea" />
                  </div>
                  <div>
                    <label>Priority</label>
                    <Field name="priority" component="select">
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </Field>
                  </div>
                  <div>
                    <label>Project</label>
                    <Field name="project" component="select"
                    >
                      <option value="">Select project</option>
                      {organizationProjects?.map((project) => (
                        <option key={project.id} value={project.id}>
                          {project.name}
                        </option>
                      ))}
                    </Field>
                  </div>
                  {selectedProject && (
                    <div>
                      <label>Assigned developer</label>
                      <Field name="developer" component="select">
                        <option value="">Select developer</option>
                        {projectDevelopers?.map((developer) => (
                          <option key={developer.id} value={developer.id}>
                            {developer.name}
                          </option>
                        ))}
                      </Field>
                    </div>
                  )}
                  <div>
                    <button type="submit">Save</button>
                    <button type="button" onClick={() => handleReset(form)}>
                      Reset
                    </button>
                  </div>
                </form>
              )}
            />
          </div>
        </div>
      )}
    </StyledCreateIssue>
  );
};

export default CreateIssue;