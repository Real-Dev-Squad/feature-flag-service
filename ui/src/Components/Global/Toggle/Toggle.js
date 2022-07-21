export default function Toggle({ onClick, active }) {
  return (
    <label
      className={`w-14 h-7 rounded-3xl block relative p-1 ease-in-out duration-300 ${active ? 'bg-sky-500' : 'bg-slate-300'}`}
    >
      <input
        type='checkbox'
        className='hidden'
        defaultChecked={active}
        onClick={onClick}
      />
      <span
        className={`w-6 h-full block rounded-3xl bg-white relative ease-in-out duration-300 ${!active && 'translate-x-full'}`}
      />
    </label>
  )
}