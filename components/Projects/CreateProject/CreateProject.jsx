import { Form, Field } from 'react-final-form';


import StyledCreateProject from './StyledCreateProject';
import { BasicButton } from 'generalStyledComponents/Button';
import { useSession } from 'next-auth/react';
import { createProject } from 'services/projects';

const CreateProject = ({ handleClose }) => {

  const { data: session } = useSession();
  const onSubmit = async (values) => {

    const issueObject = {
      ...values,
      organization: session.user?.organization
    };

    await createProject(issueObject);
    handleClose();
    // console.log(issueObject);
    // const user = await createUser(values);
    // console.log(user);
    // if (user) {
    //   dispatch(setUser(user.data));
    //   postUserToLocal(user);
    //   router.replace(`/organizations/${user.organization}/dashboard`);
    // }
  };

  return (
    <StyledCreateProject onClick={() => handleClose()}>
      <div
        className='modal-content'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Form
          onSubmit={onSubmit}
          initialValues={{ name: '' }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <h2>Create New Projcet</h2>
              <div>
                <label>{'Project\'s name'}</label>
                <Field
                  name="name"
                  component="input"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <BasicButton onClick={() => handleSubmit()} disabled={submitting || pristine}>
                Create
              </BasicButton>
            </form>)
          }/>
      </div>
    </StyledCreateProject>
  );
};

export default CreateProject;