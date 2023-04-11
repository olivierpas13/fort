import { useState } from 'react';
import { Form, Field } from 'react-final-form';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import { createUser } from '../../services/users';
import login from 'services/login';
import StyledRegistration from './StyledRegistration';
import CreateOrganization from '../CreateOrganization/CreateOrganization';
import { setUser } from '../../store/userSlice';
import { postUserToLocal } from '../../utils/localStorage';
import { BasicButton } from 'generalStyledComponents/Button';

const Registration = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [ organizationCreationVisibility, setOrganizationCreationVisibility ] = useState(false);

  if (session && session.user.organization) {
    router.push(`/organizations/${session.user.organization}/dashboard`);
  }

  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    const { data: user } = await createUser(values);
    if (user) {
      signIn('credentials', {
        email: values.email,
        password: values.password,
        callbackUrl: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/organizations/${user.organization}/dashboard`
      });
      // const loggedUser = await login({
      //   email: user.email,
      //   password: values.password
      // });

      // // dispatch(setUser(loggedUser));
      // // postUserToLocal(loggedUser);
      // // session = loggedUser;

      // router.replace(`/organizations/${loggedUser.organization}/dashboard`);
    }
  };


  return (
    <StyledRegistration>
      {session && !session.user.organization && <CreateOrganization />}
      <Form
        onSubmit={onSubmit}
        initialValues={{ name: '', email: '', password: '', organization: '' }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            {!organizationCreationVisibility && (
              <div>
                <label>Organization Code</label>
                <Field
                  name="organizationCode"
                  component="input"
                  type="text"
                  placeholder="0bd844af-6294-4013-b5b8-b816c0d31d7e"
                />
                <BasicButton onClick={() => setOrganizationCreationVisibility(true)} >{'I don\'t have an organization code'}</BasicButton>
              </div>
            )}

            {organizationCreationVisibility && (
              <div>
                <label>Organization</label>
                <Field
                  name="organization"
                  component="input"
                  type="text"
                  placeholder="Organization"
                />
                <BasicButton onClick={() => setOrganizationCreationVisibility(false)} >{'I have an organization code'}</BasicButton>
              </div>
            )}
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
            <Link href="/login">
              <a>Log in</a>
            </Link>
            <h3>
              Sign in as a{' '}
              <Link href="/demo">
                <a>Demo User</a>
              </Link>{' '}
            </h3>
          </form>
        )}
      />
    </StyledRegistration>
  );
};

export default Registration;
