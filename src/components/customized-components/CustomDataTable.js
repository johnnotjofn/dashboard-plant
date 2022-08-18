import React from "react";
import { styled } from '@mui/material/styles'
import { DataGrid } from "@mui/x-data-grid/DataGrid";

const theme = {
   backgroundColor: 'white'
}

const NewDataGrid = styled(DataGrid)(theme)

export default function CustomDataTable(props) {
   return <NewDataGrid {...props} />
}