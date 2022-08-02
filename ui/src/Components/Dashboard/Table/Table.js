import {useState,useEffect} from "react"


import TableHeader from "./TableHeader/TableHeader"
import TableRow from "./TableRow/TableRow"

export default function Table({ featureFlags, headers }) {

const [rowData,setRowData] = useState(featureFlags)

useEffect(()=>{
  console.log("called")
})


const handleSorting = (type) => {

  if(type==="ascending")
  {
    let rows = rowData
    rowData.sort((a,b)=>{
      if(a.createdAt > b.createdAt) return 1

      if(a.createdAt < b.createdAt) return -1

      return 0;
    })

    setRowData([...rows]);
  }

  else if(type=="descending")
  {
    let rows = rowData
    rows.sort((a,b)=>{
      if(a.createdAt > b.createdAt) return -1

      if(a.createdAt < b.createdAt) return 1

      return 0;
    })
    setRowData([...rows]);
  }

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