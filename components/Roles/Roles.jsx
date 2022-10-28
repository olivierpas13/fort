import StyledRoles from './StyledRoles';
import DataTable from 'components/DataOrganization/DataTable';

const Roles = () => {

  const data = [
    {
      id: 1,
    }
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
      renderCell: (params) => <>{params.value}</>
    },
  ];

  return (
    <StyledRoles>
      <h1>Roles</h1>
      <div className=''>
        <DataTable data={data} columns={columns} pageSize={5}/>
      </div>
    </StyledRoles>
  );
};

export default Roles;