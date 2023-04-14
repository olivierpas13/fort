import { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import { DataGrid, GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';
import { useSession } from 'next-auth/react';
import { BsCheckCircleFill, BsFillPencilFill, BsEyeFill } from 'react-icons/bs';

import { BasicButton } from 'generalStyledComponents/Button';
import { getAllOrganizationIssues } from 'services/issues';
import { closeIssue } from 'services/issues';


const IssuesTable = ({ modalVisibility, currentFilter }) => {
  const { data: session } = useSession();

  // const [openIssues, setOpenIssues] = useState([]);
  // const [closedIssues, setClosedIssues] = useState([]);

  const [allIssues, setAllIssues] = useState([]);
  const [issues, setIssues] = useState([]);
  const [isOpenCloseIssueDialog, setIsOpenCloseIssueDialog] = useState(false);

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


  useEffect(() => {
    if(currentFilter !== 'all'){
      setIssues(allIssues.filter(issue => issue.ticketStatus === currentFilter));
    }
    if(currentFilter === 'all'){
      setIssues(allIssues);
    }
  }, [allIssues, currentFilter]);

  const columns = [
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
    {
      field: 'actions',
      type: 'actions',
      sortable: false,
      headerName: '',
      width: 100,
      renderCell: (params) => (
        <>{
          <div>
            <BsCheckCircleFill onClick={() => {setIsOpenCloseIssueDialog(true);}} />
            <BsFillPencilFill/>
            <BsEyeFill/>
            <Dialog open={isOpenCloseIssueDialog}  onClose={() => {setIsOpenCloseIssueDialog(false);}}>
              <DialogTitle><b>Close Issue Confirmation</b></DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Are you sure you want to close the issue <b>{params.row.title}</b>
                </DialogContentText>

                <Stack direction="row">
                  <Stack direction="row" spacing={1}>
                    <BasicButton onClick={() => {
                      closeIssue(params.row.id).then((res) => {
                        const issueIndex = allIssues.findIndex((issue) => issue.id === params.row.id);

                        if (issueIndex !== -1) {
                          const updatedIssues = [...allIssues];
                          updatedIssues[issueIndex] = {
                            ...updatedIssues[issueIndex],
                            ticketStatus: res.data.ticketStatus,
                          };

                          setAllIssues(updatedIssues);
                        }

                        setIsOpenCloseIssueDialog(false);                      });
                    }} >Confirm</BasicButton>
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <BasicButton onClick={() => { setIsOpenCloseIssueDialog(false); }} >Close</BasicButton>
                  </Stack>
                </Stack>
              </DialogContent>
            </Dialog>
          </div>
        }</>
      )
    },
  ];

  return (
    <DataGrid
      rows={issues}
      columns={columns}
      components={{ Toolbar: GridToolbar }}
      disableColumnSelector
      disableSelectionOnClick
      autoHeight
      pageSize={5}
      rowsPerPageOptions={[5]}
      getRowId={(row) => row.id}
    />
  );
};

export default IssuesTable;