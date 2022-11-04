import  Select  from '@mui/material/Select';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useGridApiContext } from '@mui/x-data-grid';

import { useSession } from 'next-auth/react';
import { useState, useEffect, useCallback } from 'react';

import StyledRoles from './StyledRoles';
import DataTable from 'components/DataOrganization/DataTable';
import { getAllOrganizationUsers, updateUserRole } from 'services/users';

const Roles = () => {

  function SelectEditInputCell(props) {
    const { id, value, field } = props;
    const apiRef = useGridApiContext();

    const handleChange = async (event) => {
      await apiRef.current.setEditCellValue({ id, field, value: event.target.value });
      apiRef.current.stopCellEditMode({ id, field });
    };

    return (
      <Select
        value={value}
        onChange={handleChange}
        size="small"
        sx={{ height: 1 }}
        native
        autoFocus
      >
        <option>Developer</option>
        <option>Submitter</option>
        <option>Project Manager</option>
        <option>Admin</option>
      </Select>
    );
  }

  const renderSelectEditInputCell = (params) => {
    return <SelectEditInputCell {...params} />;
  };

  const { data: session } = useSession();

  const [organizationUsers, setOrganizationUsers] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      if(session?.user?.organization){
        const { data: users } = await getAllOrganizationUsers(session?.user?.organization);
        setOrganizationUsers(users);
      }
    };
    fetchData();
  }, [session?.user?.organization]);

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      flex: 1,
      disableColumnFilter: true,
      disableColumnMenu: true,
      renderCell: (params) => <>{params.value}</>
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      renderCell: (params) => <>{params.value}</>
    },
    {
      field: 'role',
      headerName: 'Role',
      flex: 1,
      renderEditCell: renderSelectEditInputCell,
      editable: true,
      renderCell: (params) => <>{params.value?.charAt(0).toUpperCase() + params.value?.slice(1)}</>
    },
  ];


  const [snackbar, setSnackbar] = useState(null);
  const handleCloseSnackbar = () => setSnackbar(null);

  const processRowUpdate = useCallback(
    async (newRow) => {
      const response = await updateUserRole({ id: newRow.id, value: newRow.role });
      setSnackbar({ children: 'Role successfully updated', severity: 'success' });
      return response.data;
    },
    [],
  );
  const handleProcessRowUpdateError = useCallback((error) => {
    setSnackbar({ children: error.message, severity: 'error' });
  }, []);

  return (
    <StyledRoles>
      <h1>Roles</h1>
      <h2>To change the role of an user double click the role cell or press enter
         while selecting it and select the new role</h2>
      <div className=''>
        <DataTable
          handleProcessRowUpdateError={handleProcessRowUpdateError}
          processRowUpdate={processRowUpdate}
          data={organizationUsers}
          columns={columns}
          pageSize={5}
        />
      </div>
      {!!snackbar && (
        <Snackbar
          open
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          onClose={handleCloseSnackbar}
          autoHideDuration={6000}
        >
          <Alert {...snackbar} onClose={handleCloseSnackbar} />
        </Snackbar>
      )}
    </StyledRoles>
  );
};

export default Roles;