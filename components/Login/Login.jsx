import { Form, Field } from 'react-final-form';
import Link from 'next/link';
import StyledLogin from './StyledLogin';

const Login = () => {

  const onSubmit = async values => {
    console.log(values);
  };

  return (
    <StyledLogin>
      <Form
        onSubmit={onSubmit}
        initialValues={{ email: '', password: '' }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email</label>
              <Field
                name="email"
                component="input"
                type="text"
                placeholder="Email"
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
            <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
              Log in
              </button>
            </div>
            <h3>Sign in as a <Link href='/demo' ><a>Demo User</a></Link> </h3>
          </form>
        )}
      />
    </StyledLogin>
  );
};

export default Login;