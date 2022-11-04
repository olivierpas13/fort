import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';


const DataTable = ({ data, columns, pageSize, processRowUpdate, handleProcessRowUpdateError }) => {

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
      experimentalFeatures={{ newEditingApi: true }}
      processRowUpdate={processRowUpdate}
      onProcessRowUpdateError={handleProcessRowUpdateError}
      pageSize={pageSize}
      rowsPerPageOptions={[pageSize]}
      getRowId={(row) => {
        return row?.name;
      }}
    />
  );
};

export default DataTable;