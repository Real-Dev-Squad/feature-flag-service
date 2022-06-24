import { user } from './Mock';

export default function Header() {
  return (
    <header
      className='py-2 px-8 h-20 flex items-center bg-rds-primary text-slate-100'
    >
      <img
        src={user.picture.url}
        className='rounded-full h-12 block mx-2'
        alt='User Picture'
      />
      <div
        className='text-lg'
        tabindex='0'
      >
        {user.github_display_name}
      </div>

      <button 
        className='ml-auto bg-white py-2 px-4 rounded-lg text-rds-primary hover:bg-slate-400'
      >
        Logout
      </button>
    </header>
  )
}