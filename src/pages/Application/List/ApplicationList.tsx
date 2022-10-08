import { Box } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useState } from 'react';
import useSWR from 'swr';

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

const PAGE_SIZE = 5;
export const ApplicationList = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const { data: applications } = useSWR(
    `/api/applications?page=${pageIndex + 1}&limit=${PAGE_SIZE}`,
    {
      suspense: false,
    }
  );

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        loading={!applications}
        rows={applications ?? []}
        columns={columns}
        pageSize={PAGE_SIZE}
        paginationMode="server"
        rowCount={15}
        onPageChange={setPageIndex}
        page={pageIndex}
      />
    </Box>
  );
};

export default ApplicationList;
