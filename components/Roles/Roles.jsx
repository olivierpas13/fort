import { Select } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useState, useEffect, useCallback } from 'react';
import { useGridApiContext } from '@mui/x-data-grid';

import StyledRoles from './StyledRoles';
import DataTable from 'components/DataOrganization/DataTable';
import { getSingleOrganization } from 'services/organizations';
import { getAllOrganizationUsers, updateUserRole } from 'services/users';

const Roles = () => {


  const useFakeMutation = () => {
    return useCallback(
      (user) => {
        updateUserRole({ id: user.id, value: user.role });
      }, []);
  };



  function SelectEditInputCell(props) {
    const { id, value, field } = props;
    const apiRef = useGridApiContext();

    const handleChange = async (event) => {
      // console.log(id, field, event.target.value);
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

  const rows = [

    {
      id: 2,
      name: 'Danail',
      role: 'UX Designer',
    },
    {
      id: 3,
      name: 'Matheus',
      role: 'Front-end Developer',
    },
  ];


  const columns = [
    // {
    //   field: 'actions',
    //   type: 'actions',
    //   sortable: false,
    //   headerName: '',
    //   width: 50,
    //   // renderCell: (params) => (
    //   //   <>{<Checkbox size="small" checked={findPerson(params.row)} onChange={() => handleChange(params.row)} />}</>
    //   // )
    // },
    {
      field: 'id',
      headerName: 'ID',
      flex: 1,
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
      // renderCell: (params) => <>{params.value}</>
    },
  ];

  const mutateRow = useFakeMutation();

  const [snackbar, setSnackbar] = useState(null);
  const handleCloseSnackbar = () => setSnackbar(null);

  const processRowUpdate = useCallback(
    async (newRow) => {
      // console.log(newRow);
      // Make the HTTP request to save in the backend
      const response = await mutateRow(newRow);
      // console.log({ backend: response });
      setSnackbar({ children: 'User successfully saved', severity: 'success' });
      // apiRef.current.stopCellEditMode({ id: newRow.id, field: 'role' });
      return response;
    },
    [],
  );
  const handleProcessRowUpdateError = useCallback((error) => {
    setSnackbar({ children: error.message, severity: 'error' });
  }, []);

  return (
    <StyledRoles>
      <h1>Roles</h1>
      <div className=''>
        <DataTable
          handleProcessRowUpdateError={handleProcessRowUpdateError}
          processRowUpdate={processRowUpdate}
          data={organizationUsers}
          columns={columns}
          pageSize={5}
        />
      </div>
    </StyledRoles>
  );
};

export default Roles;