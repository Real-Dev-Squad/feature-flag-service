import Image from '../Global/Image/Image';
import Button from '../Global/Button/Button';

export default function Header({ user }) {
  return (
    <header
      className='py-2 px-8 h-20 flex items-center bg-rds-primary text-slate-100'
    >
      <Image
        src={user.picture.url}
      />

      <h1 className='text-lg'>
        {user.github_display_name}
      </h1>

      <Button
        className={'ml-auto bg-white text-rds-primary hover:bg-slate-400'}
        text={'Logout'}
      />
    </header>
  )
}