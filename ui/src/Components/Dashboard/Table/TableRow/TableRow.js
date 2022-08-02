import Toggle from "../../../Global/Toggle/Toggle"

export default function TableRow({ featureFlag, headers }) {
  return (
    <tr
      className='border-t'
    >
      {headers.map((heading, index) =>
        <td className='px-4 py-2' key={index}>
          <span>{featureFlag[heading.headerName]}</span>
        </td>
      )}
      <td className='px-4 py-2'>
        <Toggle
          active={featureFlag.enabled}
          
        />
      </td>
    </tr>
  )
}

