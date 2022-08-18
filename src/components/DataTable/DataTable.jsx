import React, { useEffect, useState } from 'react';
import { getData } from '../../services/thingspeakService';
import CustomDataTable from '../customized-components/CustomDataTable';
import { InsertedData } from './InsertedData';

const columns = InsertedData['columns']

export default function DataTable() {
   const [rows, setRows] = useState([])
   const [pageSize, setPageSize] = useState(5);

   useEffect(() => {
      let abortController
      (async () => {
         abortController = new AbortController()
         let signal = abortController.signal
         let obj = {
            signal: signal
         }
         const response = await getData(obj)
         setRows(response.data)
      })()

      return () => abortController.abort()
   }, [])
   return (
      <div style={{ height: 400, width: '100%' }}>
         <CustomDataTable
            rows={rows}
            columns={columns}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 20]}
            checkboxSelection
            disableColumnMenu
            pagination
         />
      </div>
   );
}
