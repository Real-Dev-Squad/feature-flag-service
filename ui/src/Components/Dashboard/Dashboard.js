import TableHeader from "./TableHeader/TableHeader";
import TableRow from "./TableRow/TableRow";

export default function Dashboard({ featureFlags, headers }) {
  return (
    <table
      className='shadow text-sm text-left table-fixed w-3/4 max-w-screen-md'
    >
      <TableHeader
        headers={headers}
      />

      <tbody>
        {featureFlags.map(featureFlag => 
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