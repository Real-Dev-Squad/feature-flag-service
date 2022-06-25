import TableHeader from "../TableHeader/TableHeader";
import TableItem from "../TableItem/TableItem";
import { featureFlags } from "./Mock";

export default function Table() {
  return (
    <div
      className='py-2 rounded shadow rounded-3xl max-w-5xl'
      tabIndex='0'
      aria-label='Feature Flags'
    >
      <table
        className='w-full text-sm text-left table-fixed'
      >
        <thead>
          <TableHeader />
        </thead>

        <tbody>
          {featureFlags.map(featureFlag =>
            <TableItem featureFlag={featureFlag} key={featureFlag.id} />
          )}
        </tbody>
      </table>
    </div>
  )
}