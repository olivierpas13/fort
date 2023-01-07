import { Form, Field } from 'react-final-form';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

import StyledInvitation from './StyledInvitation';
import { BasicButton } from 'generalStyledComponents/Button';
import { getInvitationCode, getSingleOrganization } from 'services/organizations';
import { getAllOrganizationProjects } from 'services/projects';

const Invitation = ({ handleClose }) => {

  const session = useSession();

  const [organization, setOrganization] = useState({});
  const [projects, setProjects] = useState([]);
  const [invitationCode, setInvitationCode] = useState('');

  useEffect(() => {
    if (session.status === 'authenticated' && Object.entries(organization).length === 0) {
      const {
        data: { user },
      } = session;
      console.log(user);
      getSingleOrganization(user.organization).then((res) =>
        setOrganization(res.data)
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  if(Object.entries(organization).length !== 0){
    if(projects.length === 0){
      getAllOrganizationProjects(organization.id).then(res => setProjects(res.data));
    }

    const onSubmit = async (values) => {

      const user = {
        name: organization.name,
        orgCode: organization.orgInvitationCode,
        role: values.role,
        project: values.project
      };

      getInvitationCode(user).then((res) => setInvitationCode(res.data));

    };
    return (
      <StyledInvitation onClick={() => handleClose(false)} >
        <div
          className='modal-content'
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Form
            onSubmit={onSubmit}
            initialValues={{ role: 'developer', project: '' }}
            render={({ handleSubmit, submitting, values }) => (
              <div>
                <form onSubmit={handleSubmit}>
                  <h2> Invitation Code </h2>
                  <div>
                    <label>Role</label>
                    <Field
                      name="role"
                      component="select"
                    >
                      <option value="submitter">Submitter</option>
                      <option value="developer">Developer</option>
                      <option value="project-manager">Project Manager</option>
                      { session?.data?.user?.role === 'administrator' && <option value="administrator">Administrator</option>}
                    </Field>
                    {(values.role !== 'administrator' && values.role !== 'submitter') &&
                      <>
                        <br />
                        <label>Project</label>
                        <Field
                          className='project-field'
                          name='project'
                          component='select'
                        >
                          <option></option>
                          {projects.map(
                            project => <option key={project.id} value={project.id} >{project.name}</option>)}
                        </Field>
                      </>
                    }
                  </div>
                  <BasicButton
                    onClick={() => handleSubmit()}
                    disabled={submitting}
                  >
                Generate Invitation Code
                  </BasicButton>
                </form>
                <div className='code-generated' >
                        Invitation Code
                  <div className='invitation' >
                    {invitationCode}
                  </div>
                  <BasicButton onClick={() => navigator.clipboard.writeText(invitationCode)} >
                           Copy it
                  </BasicButton>
                </div>
              </div>

            )}
          />

        </div>
      </StyledInvitation>
    );
  }
};

export default Invitation;