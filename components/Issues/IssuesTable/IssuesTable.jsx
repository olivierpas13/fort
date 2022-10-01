import { Checkbox } from '@mui/material';
import { DataGrid, GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { getAllOrganizationIssues } from 'services/issues';


const IssuesTable = ({ modalVisibility, currentFilter }) => {
  const { data: session } = useSession();

  // const [openIssues, setOpenIssues] = useState([]);
  // const [closedIssues, setClosedIssues] = useState([]);

  const [allIssues, setAllIssues] = useState([]);
  const [issues, setIssues] = useState([]);

  const fetchIssues = async () => {
    if(session?.user?.organization){
      const { data } = await getAllOrganizationIssues(session.user.organization);
      setAllIssues(data);
    }
  };

  useEffect(() => {
    if(
      allIssues.length < 1
      && session?.user?.organization
      || modalVisibility === false ){
      fetchIssues();
      // if(currentFilter !== 'all'){
      //   setIssues(allIssues.filter(issue => issue.ticketStatus === currentFilter));
      // }
      // if(currentFilter === 'all'){
      //   setIssues(allIssues);
      // }
    }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalVisibility, session?.user?.organization]);
  // }, []);


  useEffect(() => {
    if(currentFilter !== 'all'){
      setIssues(allIssues.filter(issue => issue.ticketStatus === currentFilter));
    }
    if(currentFilter === 'all'){
      setIssues(allIssues);
    }
  }, [allIssues, currentFilter]);

  const pageSize = 5;

  const colums = [
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
      field: 'title',
      headerName: 'Title',
      flex: 1,
      minWidth: 150,
      renderCell: (params) => <>{params.value}</>
    },
    {
      field: 'description',
      headerName: 'Description',
      flex: 1,
      minWidth: 200,
      renderCell: (params) => <>{params.value}</>
    },
    {
      field: 'priority',
      headerName: 'Priority',
      flex: 1,
      renderCell: (params) => <>{params.value}</>
    },
    {
      field: 'ticketStatus',
      headerName: 'Status',
      flex: 1,
      renderCell: (params) => <>{params.value}</>
    },
    {
      field: 'assignedDev',
      headerName: 'Assigned Developer',
      flex: 1,
      renderCell: (params) => <>{params.value}</>
    },
    {
      field: 'submitter',
      headerName: 'Submitter',
      flex: 1,
      renderCell: (params) => <>{params.value}</>
    },
    {
      field: 'project',
      headerName: 'Project',
      flex: 1,
      renderCell: (params) => <>{params.value}</>
    },
  ];

  return (
    <DataGrid
      rows={issues}
      columns={colums}
      components={{ Toolbar: GridToolbar }}
      disableColumnSelector
      disableSelectionOnClick
      autoHeight
      pageSize={pageSize}
      rowsPerPageOptions={[pageSize]}
      getRowId={(row) => row.id}
    />
  );
};

export default IssuesTable;