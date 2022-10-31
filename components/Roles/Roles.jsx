import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';

import StyledRoles from './StyledRoles';
import DataTable from 'components/DataOrganization/DataTable';
import { getSingleOrganization } from 'services/organizations';

const Roles = () => {

  const { data: session } = useSession();
  const [organizationUsers, setOrganizationUsers] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const { data: organization } = await getSingleOrganization(session?.user?.organization);
      setOrganizationUsers(organization?.users);
    };
    fetchData();
  }, [session?.user?.organization]);
  // const data = [
  //   {
  //     id: 1,
  //   }
  // ];

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
        <DataTable data={organizationUsers} columns={columns} pageSize={5}/>
      </div>
    </StyledRoles>
  );
};

export default Roles;