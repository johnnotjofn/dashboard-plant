import React from "react"
import DataTable from "../../components/DataTable/DataTable"
import './History.scss'

class History extends React.Component {
   render() {
      return (
         <div className="history">
            <DataTable />
         </div>
      )
   }
}

export default History