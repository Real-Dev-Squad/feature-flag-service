import { camelCaseToNormal } from "../../../Utils/helpers"

export default function TableHeader({ headers }) {
  return (
    <thead>
      <tr className='text-teal-700 text-xs'>
        {headers.map((heading, index) =>
          <th className='p-4' key={index}>{camelCaseToNormal(heading)}</th>
        )}

        <th className='p-4'>Enabled</th>
      </tr>
    </thead>
  )
}