import { BasicModal } from '../../generalStyledComponents/Modal';
import StyledCreateOrganization from './StyledCreateOrganization';
import { BasicButton } from '../../generalStyledComponents/Button';

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
    // if(user){
    //   dispatch(setUser(user.data));
    //   postUserToLocal(user);
    //   router.replace(`/organizations/${user.organization}`);
    // }
    console.log(obj);
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