import { Checkbox } from '@mui/material';
import { DataGrid, GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { getAllOrganizationIssues } from 'services/issues';


const DataTable = ({ data, columns, pageSize, processRowUpdate, handleProcessRowUpdateError }) => {

  console.log(data);

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
      rows={data}
      columns={dataColumns}
      components={{ Toolbar: GridToolbar }}
      disableColumnSelector
      disableSelectionOnClick
      autoHeight
      experimentalFeatures={{ newEditingApi: true }}
      processRowUpdate={processRowUpdate}
      onProcessRowUpdateError={handleProcessRowUpdateError}
      pageSize={pageSize}
      rowsPerPageOptions={[pageSize]}
      getRowId={(row) => {
        console.log(row);
        return row?.name;
      }}
    />
  );
};

export default DataTable;