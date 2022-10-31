import { Form, Field } from 'react-final-form';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

import StyledInvitation from './StyledInvitation';
import { BasicButton } from 'generalStyledComponents/Button';
import { getInvitationCode, getSingleOrganization } from 'services/organizations';

const Invitation = ({ handleClose }) => {

  const session = useSession();

  const [organization, setOrganization] = useState({});
  const [invitationCode, setInvitationCode] = useState('');

  useEffect(() => {
    if (session.status === 'authenticated' && Object.entries(organization).length === 0) {
      const {
        data: { user },
      } = session;
      getSingleOrganization(user.organization).then((res) =>
        setOrganization(res.data)
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  if(organization){
    console.log(organization);

    const onSubmit = async (values) => {

      const obj = {
        name: organization.name,
        orgCode: organization.orgInvitationCode,
        role: values.role
      };
      getInvitationCode(obj).then((res) => setInvitationCode(res.data));

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
            initialValues={{ role: 'submitter' }}
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
                      <option value="administrator">Administrator</option>
                    </Field>
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