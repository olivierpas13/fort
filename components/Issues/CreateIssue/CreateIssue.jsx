import { useEffect, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useSession } from 'next-auth/react';

import StyledCreateIssue from './StyledCreateIssue';
import { BasicButton } from 'generalStyledComponents/Button';
import { createIssue } from 'services/issues';
import { getSingleOrganization } from 'services/organizations';

const CreateIssue = ({ handleClose }) => {
  const { data: session } = useSession();
  const [organizationUsers, setOrganizationUsers] = useState([]);
  const [organizationProjects, setOrganizationProjects] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const { data: organization } = await getSingleOrganization(session?.user?.organization);
      setOrganizationProjects(organization.projects);
      setOrganizationUsers(organization.users);
    };
    fetchData();
  }, [session?.user?.organization]);


  const onSubmit = async (values) => {
    const issueObject = {
      ...values,
      submitter: session.user?.id,
      organization: session.user?.organization
    };

    const createdIssue = await createIssue(issueObject);
    if(createdIssue){
      handleClose();
    }
  };

  return (
    <StyledCreateIssue onClick={() => handleClose()}>
      <div
        className="modal-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Form
          onSubmit={onSubmit}
          initialValues={{ title: '', description: '', priority: 'low' }}
          render={({ handleSubmit, form, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
              <h2>{'New Issue Creation'}</h2>
              <div>
                <label>Title</label>
                <Field
                  name="title"
                  component="input"
                  type="text"
                  placeholder="Title"
                />
              </div>
              <div>
                <label>Description</label>
                <Field
                  name="description"
                  component="input"
                  type="text"
                  placeholder="Description"
                />
              </div>
              <div>
                <label>Priority</label>
                <Field
                  name="priority"
                  component="select"
                  type="text"
                  placeholder="Priority"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </Field>
              </div>
              <div>
                <label>Assigned Developer</label>
                <Field name="assignedDev" component="select">
                  <option/>
                  {organizationUsers.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
                </Field>
              </div>
              <div>
                <label>Project</label>
                <Field
                  name="project"
                  component="select"
                >
                  <option/>
                  {organizationProjects.map(project => <option key={project.id} value={project.id}>{project.name}</option>)}
                </Field>
              </div>
              <BasicButton
                onClick={() => handleSubmit()}
                disabled={submitting || pristine}
              >
                Create Issue
              </BasicButton>
              <BasicButton
                onClick={() => form.reset()}
                disabled={submitting || pristine}
              >
                Clear All
              </BasicButton>
            </form>
          )}
        />
      </div>{' '}
    </StyledCreateIssue>
  );
};

export default CreateIssue;
