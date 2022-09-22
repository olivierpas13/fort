import { useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

import { createUser } from '../../services/users';
import StyledRegistration from './StyledRegistration';
import CreateOrganization from '../CreateOrganization/CreateOrganization';

import { setUser } from '../../store/userSlice';
import { postUserToLocal } from '../../utils/localStorage';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

const Registration = () => {

  const router = useRouter();
  const { data: session, status } = useSession();

  if(session && session.user.organization){
    router.push(`/organizations/${session.user.organization}`);
  }

  console.log(session);
  console.log(status);

  const dispatch = useDispatch();

  const onSubmit = async values => {
    const user = await createUser(values);
    console.log(user);
    if(user){
      dispatch(setUser(user.data));
      postUserToLocal(user);
      router.replace(`/organizations/${user.organization}`);
    }
  };

  return (
    <StyledRegistration>
      {session && !session.user.organization && <CreateOrganization/>}
      <Form
        onSubmit={onSubmit}
        initialValues={{ name: '', email: '', password: '', organization: '' }}
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
              <label>Organization</label>
              <Field
                name="organization"
                component="input"
                type="text"
                placeholder="Organization"
              />
            </div>
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