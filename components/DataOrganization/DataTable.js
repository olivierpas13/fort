import { Checkbox } from '@mui/material';
import { DataGrid, GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { getAllOrganizationIssues } from 'services/issues';


const IssuesTable = ({ data, columns, pageSize }) => {

  const [rows, setRows] = useState([]);
  const [dataColumns, setDataColumns] = useState([]);

  useEffect(() => {
    setDataColumns(columns);
  }, [columns]);

  useEffect(() => {
    setRows(data);
  }, [data]);

  return (
    <DataGrid
      rows={rows}
      columns={dataColumns}
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