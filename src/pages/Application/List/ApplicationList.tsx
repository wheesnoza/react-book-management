import { Box } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { alert } from '@/services';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'applicant',
    headerName: '申請者',
    width: 150,
    valueGetter: (params: GridValueGetterParams) => params.value.name,
  },
  { field: 'type', headerName: '申請種別', width: 90 },
  { field: 'applied_at', headerName: '申請日時', width: 200 },
];

export const ApplicationList = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch('/api/applications')
      .then((data) => data.json())
      .then(setApplications)
      .catch(() => {
        alert.display('Somethingw was wrong');
      });
  }, []);

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={applications}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </Box>
  );
};

export default ApplicationList;
