import PreviousMap from "postcss/lib/previous-map"
import {camelCaseToNormal} from "../../../../Utils/helpers"
import SortCursor from "./SortCursor"

export default function TableHeader({headers,handleSorting}) {
  return (
    <thead>
      <tr className='text-teal-700 text-xs'>

        {headers.map((heading, index) =>
          <th>
          <tr>
          <th className='p-4' key={index} >
            
            {camelCaseToNormal(heading.headerName)}
           
            </th>
            <th>
            {heading.sortable  ?
             <SortCursor handleSorting={handleSorting}/>
             :""
             }
            </th>
            </tr>
            </th>
        )}

        <th className='p-4'>Enabled</th>
      </tr>
    </thead>
  )
}