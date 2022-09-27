import StyledCreateIssue from './StyledCreateIssue';
import { BasicButton } from 'generalStyledComponents/Button';

import { Form, Field } from 'react-final-form';

const CreateIssue = ({ handleClose }) => {

  // const [modalVisibility, setModalVisibility] = useState('');

  // const closeModal = (event) => {
  //   handleClose();
  // };

  const onSubmit = async values => {
    const user = await createUser(values);
    console.log(user);
    if(user){
      dispatch(setUser(user.data));
      postUserToLocal(user);
      router.replace(`/organizations/${user.organization}/dashboard`);
    }
  };

  return (
    <StyledCreateIssue
      onClick={() => handleClose()}>
      <div className='modal-content' onClick={e => {e.stopPropagation();}}>
        <Form
          onSubmit={onSubmit}
          initialValues={{ organization: '' }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
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
                <Field
                  name="organization"
                  component="input"
                  type="text"
                  placeholder="Organization"
                />
              </div>
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
      </div>    </StyledCreateIssue>
  );
};

export default CreateIssue;