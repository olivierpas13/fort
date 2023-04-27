import { useState } from 'react';
import { useSession } from 'next-auth/react';
import isEmpty from 'lodash/isEmpty';

import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Switch from '@mui/material/Switch';

import { reloadSession } from 'utils/session';
import { addUserFromGithub, updateUserOrganization } from 'services/users';


const OrganizationFieldDialog = ({ open }) => {

  const { data: session } = useSession();


  const [hasOrganizationCode, setHasOrganizationCode] = useState(true);
  const [organizationCode, setOrganizationCode] = useState('');
  const [organization, setOrganization] = useState('');

  const handleGitHubSignIn = async () => {
    if (!isEmpty(organizationCode)) {
      await addUserFromGithub({
        userId: session.user.id,
        code: organizationCode
      });
      reloadSession();
      return;
    }
    if (!isEmpty(organization)) {
      await updateUserOrganization({
        userId: session.user.id,
        organization,
      });
      reloadSession();
      return;
    }

    alert('Please enter an organization code or organization name');
    return;
  };

  return (
    <Dialog open={open}>
      <DialogTitle>Organization needed</DialogTitle>
      <DialogContent>
        <DialogContentText>
            It is necessary to have an organization, you can use an organization code if you already belong to one or create a new one.
            If you don&apos;t have an organization you can use your name or your project&apos;s name
        </DialogContentText>
        {hasOrganizationCode ? (
          <TextField
            margin="normal"
            required
            fullWidth
            id="organizationCode"
            value={organizationCode}
            onChange={(e) => setOrganizationCode(e.target.value)}
            label="Organization code"
            name="organizationCode"
            autoComplete="organizationCode"
            autoFocus
          />
        ) : (
          <TextField
            margin="normal"
            required
            fullWidth
            id="organization"
            label="Organization"
            value={organization}
            onChange={(e) => {
              console.log(e.target.value);
              setOrganization(e.target.value);}}
            name="organization"
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
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleGitHubSignIn()}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrganizationFieldDialog;