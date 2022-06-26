export default function TableItem({ featureFlag, toggle }) {
  const lowerCaseNoSpaceName = (featureFlag.name).toLowerCase().replaceAll(' ', '_');
  function handleKeyPress(event) {
    if(event.key === 'Enter'){
      toggle();
    }
  }

  return (
    <tr
      className='border-t'
      tabIndex='0'
    >
      <td className='px-4 py-2'>{featureFlag.name}</td>
      <td className='px-4 py-2'>{featureFlag.repo}</td>
      <td
        className='px-4 py-2'
      >
        <label 
          className={`w-14 h-7 rounded-3xl block relative p-1 ease-in-out duration-300 ${featureFlag.enabled ? 'bg-sky-500': 'bg-slate-300'}`}
          tabIndex='0'
          htmlFor={lowerCaseNoSpaceName}
          onKeyPress={handleKeyPress}
        >
          <input
            type='checkbox' 
            className='hidden' 
            onClick={toggle}
            name={lowerCaseNoSpaceName}
            id={lowerCaseNoSpaceName}
          />
          <span 
            className={`w-6 h-full block rounded-3xl bg-white relative ease-in-out duration-300 ${!featureFlag.enabled && 'translate-x-full'}`}
          />
        </label>
      </td>
    </tr>
  )
}