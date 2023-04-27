import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { BsGithub } from 'react-icons/bs';

import { mainTheme } from 'generalStyledComponents/Pallete';
import OrganizationFieldDialog from './OrganizationFieldDialog';
import { createUser } from 'services/users';
import { reloadSession } from 'utils/session';

const Registration = () => {

  const session = useSession();

  const router = useRouter();


  useEffect(() => {
    if((session.status === 'authenticated') && !session?.data?.user?.organization){
      return setOrganizationFieldDialogVisibility(true);
    }
    if((session.status === 'authenticated') && session?.data?.user?.organization){
      router.push(`/organizations/${session?.data?.user?.organization}/dashboard`);
    }

  }, [session, session?.user]);

  const [organizationCode, setOrganizationCode] = useState('');
  const [organizationName, setOrganizationName] = useState('');

  const [hasOrganizationCode, setHasOrganizationCode] = useState(true);
  const [organizationFieldDialogVisibility, setOrganizationFieldDialogVisibility] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = await createUser({
      email: data.get('email'),
      name: data.get('name'),
      password: data.get('password'),
      organization: data.get('organization'),
      organizationCode: data.get('organizationCode'),
    });
    console.log(user);
    if (user) {
      signIn('credentials', {
        email: data.get('email'),
        password: data.get('password'),
        callbackUrl: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/registration`
      });
      return;
    }
    alert('Unable to create the account');
  };

  const handleGitHubSignIn = async () => {
    // if (!organizationCode && !organizationName) {
    //   alert('Please enter your organization ID or organization name');
    //   return;
    // }

    // Pass the organizationId and organizationName as state parameters
    await signIn('github');
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <Box
        style={{
          height: '100%',
        }}
      >
        <Box
          sx={{
            height: '100%',
            width: '100wh',
          }}
        >
          <Grid container>
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                height: '105vh',
                backgroundImage: 'url(/bg1.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                  t.palette.mode === 'light'
                    ? t.palette.grey[50]
                    : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
            >
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography component="h1" variant="h5">
                  Create your account
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 1 }}
                >
                  {hasOrganizationCode ? (
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="organizationCode"
                      label="Organization code"
                      name="organizationCode"
                      autoComplete="organizationCode"
                      value={organizationCode}
                      onChange={(e) => setOrganizationCode(e.target.value)}
                      autoFocus
                    />
                  ) : (
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      value={organizationName}
                      onChange={(e) => setOrganizationName(e.target.value)}
                      id="organization"
                      label="Organization"
                      name="organization"
                      autoComplete="organization"
                      autoFocus
                    />
                  )}
                  <FormControlLabel
                    control={
                      <Switch
                        label="I have an organization code"
                        defaultChecked
                        checked={hasOrganizationCode}
                        onChange={(event) => {
                          setHasOrganizationCode(event.target.checked);
                        }}
                        inputProps={{ 'aria-label': 'controlled' }}
                      />
                    }
                    label="I have an organization code"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Create your account
                  </Button>

                  <Button
                    fullWidth
                    onClick={() => {
                      handleGitHubSignIn();
                      // signIn('github');
                    }}
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    <BsGithub size="1.5em" style={{ marginRight: '0.5em' }} />
                    Create your account with Github
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <OrganizationFieldDialog
          open={organizationFieldDialogVisibility}
          handleClose={() => setOrganizationFieldDialogVisibility(false)}
        />
      </Box>
    </ThemeProvider>
  );
};

export default Registration;

// import { useState } from 'react';
// import { Form, Field } from 'react-final-form';
// import Link from 'next/link';
// import { useDispatch } from 'react-redux';
// import { signIn, useSession } from 'next-auth/react';
// import { useRouter } from 'next/router';

// import { createUser } from '../../services/users';
// import login from 'services/login';
// import StyledRegistration from './StyledRegistration';
// import CreateOrganization from '../CreateOrganization/CreateOrganization';
// import { setUser } from '../../store/userSlice';
// import { postUserToLocal } from '../../utils/localStorage';
// import { BasicButton } from 'generalStyledComponents/Button';

// const Registration = () => {
//   const router = useRouter();
//   const { data: session, status } = useSession();
//   const [ organizationCreationVisibility, setOrganizationCreationVisibility ] = useState(false);

//   if (session && session.user.organization) {
//     router.push(`/organizations/${session.user.organization}/dashboard`);
//   }

//   const dispatch = useDispatch();

//   const onSubmit = async (values) => {
//     const { data: user } = await createUser(values);
//     if (user) {
//       signIn('credentials', {
//         email: values.email,
//         password: values.password,
//         callbackUrl: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/organizations/${user.organization}/dashboard`
//       });
//       // const loggedUser = await login({
//       //   email: user.email,
//       //   password: values.password
//       // });

//       // // dispatch(setUser(loggedUser));
//       // // postUserToLocal(loggedUser);
//       // // session = loggedUser;

//       // router.replace(`/organizations/${loggedUser.organization}/dashboard`);
//     }
//   };

//   return (
//     <StyledRegistration>
//       {session && !session.user.organization && <CreateOrganization />}
//       <Form
//         onSubmit={onSubmit}
//         initialValues={{ name: '', email: '', password: '', organization: '' }}
//         render={({ handleSubmit, form, submitting, pristine, values }) => (
//           <form onSubmit={handleSubmit}>
//             {!organizationCreationVisibility && (
//               <div>
//                 <label>Organization Code</label>
//                 <Field
//                   name="organizationCode"
//                   component="input"
//                   type="text"
//                   placeholder="0bd844af-6294-4013-b5b8-b816c0d31d7e"
//                 />
//                 <BasicButton onClick={() => setOrganizationCreationVisibility(true)} >{'I don\'t have an organization code'}</BasicButton>
//               </div>
//             )}

//             {organizationCreationVisibility && (
//               <div>
//                 <label>Organization</label>
//                 <Field
//                   name="organization"
//                   component="input"
//                   type="text"
//                   placeholder="Organization"
//                 />
//                 <BasicButton onClick={() => setOrganizationCreationVisibility(false)} >{'I have an organization code'}</BasicButton>
//               </div>
//             )}
//             <div>
//               <label>Email</label>
//               <Field
//                 name="email"
//                 component="input"
//                 type="text"
//                 placeholder="Email"
//               />
//             </div>



//             <h3>Do you have an account already?</h3>
//             <Link href="/login">
//               <a>Log in</a>
//             </Link>
//             <h3>
//               Create your account as a{' '}
//               <Link href="/demo">
//                 <a>Demo User</a>
//               </Link>{' '}
//             </h3>
//           </form>
//         )}
//       />
//     </StyledRegistration>
//   );
// };

// export default Registration;
