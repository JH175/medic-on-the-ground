import Link from 'next/link';

const Header = () => {
  return (
    <div className='flex p-10'>
      <Link href='/'>
        <div>
          {/* <h1 className='text-stone-700 text-4xl'>M.O.T.G</h1> */}
          <p className='text-stone-700 text-xl uppercase'>the medic on the ground</p>
        </div>
      </Link>
    </div>
  );
};

export default Header;
