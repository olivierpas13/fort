import { useState } from 'react';
import { updateUserOrganization } from 'services/users';
import StyledCreateOrganization from './StyledCreateOrganization';
import { BasicButton } from '../../generalStyledComponents/Button';
import { reloadSession } from 'utils/session';

import { useSession } from 'next-auth/react';
import { Form, Field } from 'react-final-form';


const CreateOrganization = () => {

  const { data: session } = useSession();
  const [invitationCodeVisibility, setInvitationCodeVisibility] = useState(false);

  const onSubmit = async values => {
    const obj ={
      userId: session.user?.id,
      organization: values.organization
    };
    await updateUserOrganization(obj);
    reloadSession();
  };


  return (
    <StyledCreateOrganization>
      <div className='modal-content'>
        <Form
          onSubmit={onSubmit}
          initialValues={{ organization: null , organizationCode: null }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <h2>{'We noticed that you don\'t have an organization associated with your account'}</h2>
              <h3>If you dont belong to an organization, write your own name please</h3>
              <h3><button onClick={() => setInvitationCodeVisibility(true)} >I have an organization invitation code</button></h3>
              {!invitationCodeVisibility &&
              <div>
                <label>Organization</label>
                <Field
                  name="organization"
                  component="input"
                  type="text"
                  placeholder="Organization"
                />
              </div>
              }
              {invitationCodeVisibility &&
              <div>
                <label>Organization Code</label>
                <Field
                  name="organizationCode"
                  component="input"
                  type="text"
                  placeholder="0bd844af-6294-4013-b5b8-b816c0d31d7e"
                />
              </div>
              }
              <BasicButton onClick={() => handleSubmit()} disabled={submitting || pristine}>
                Join
              </BasicButton>
            </form>)
          }/>
      </div>
    </StyledCreateOrganization>
  );
};

export default CreateOrganization;