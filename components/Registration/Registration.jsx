import { Form, Field } from 'react-final-form';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

import { createUser } from '../../services/users';
import StyledRegistration from './StyledRegistration';
import { setUser } from '../../store/userSlice';

const Registration = () => {

  const dispatch = useDispatch();

  const onSubmit = async values => {
    const user = await createUser(values);
    dispatch(setUser(user));

    // await sleep(300);
    // window.alert(JSON.stringify(values, 0, 2));
  };
  return (
    <StyledRegistration>
      <Form
        onSubmit={onSubmit}
        initialValues={{ name: '', email: '', password: '' }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name</label>
              <Field
                name="name"
                component="input"
                type="text"
                placeholder="Name"
              />
            </div>
            <div>
              <label>Password</label>
              <Field
                name="password"
                component="input"
                type="text"
                placeholder="Password"
              />
            </div>
            <div>
              <label>Email</label>
              <Field
                name="email"
                component="input"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
              Create Your Account
              </button>
            </div>
            <h3>Do you have an account already?</h3>
            <Link href="/login" >
              <a>Log in</a>
            </Link>
            <h3>Sign in as a <Link href='/demo' ><a>Demo User</a></Link> </h3>
          </form>
        )}
      />
    </StyledRegistration>
  );
};

export default Registration;