// import { BasicModal } from '../../generalStyledComponents/Modal';
import { updateUserOrganization } from 'services/users';
import StyledCreateOrganization from './StyledCreateOrganization';
import { BasicButton } from '../../generalStyledComponents/Button';
import { reloadSession } from 'utils/session';

import { useSession } from 'next-auth/react';
import { Form, Field } from 'react-final-form';


const CreateOrganization = () => {

  //   const dispatch = useDispatch();

  const { data: session } = useSession();

  const onSubmit = async values => {
    // const user = await createUser(values);
    // console.log(user);
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
          initialValues={{ organization: '' }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <h2>{'We noticed that you don\'t have an organization associated with your account'}</h2>
              <h3>If you dont belong to an organization, write your own name please</h3>
              <div>
                <label>Organization</label>
                <Field
                  name="organization"
                  component="input"
                  type="text"
                  placeholder="Organization"
                />
              </div>
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