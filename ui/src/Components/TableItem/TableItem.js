export default function TableItem({ featureFlag }) {
  return (
    <tr 
      className='border-t'
      tabIndex='0'
    >
      <td className='px-4 py-2'>{featureFlag.name}</td>
      <td className='px-4 py-2'>{featureFlag.repo}</td>
      <td 
        className='px-4 py-2' 
        tabIndex='0'
      >
        {featureFlag.enabled ? 'True' : 'False'}
      </td>
    </tr>
  )
}