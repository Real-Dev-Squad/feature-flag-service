import {useState} from "react"


import TableHeader from "./TableHeader/TableHeader"
import TableRow from "./TableRow/TableRow"
import { compareValues } from "../../../Utils/helpers"

export default function Table({ featureFlags, headers }) {

const [rowData,setRowData] = useState(featureFlags)

const handleSorting = (type,onColumn) => {

  let rows = rowData;
  rows.sort(compareValues(onColumn,type))
  setRowData([...rows])

}

  return (
    
    <table
      className='shadow text-sm text-left table-fixed w-3/4 max-w-screen-md'
    >
      <TableHeader
        headers={headers}
        handleSorting={handleSorting}
      />

      <tbody>
        {rowData.map(featureFlag => 
          <TableRow
            featureFlag={featureFlag}
            headers={headers}
            key={featureFlag.id}
          /> 
        )}
      </tbody>
    </table>
  )
}