import Link from 'next/link';
import SOL from '../app/MOTG-SOL2.svg';
import Image from 'next/image';

const navLink =
  'uppercase hover:text-neutral-500 hover:underline underline-offset-8';

const Header = () => {
  return (
    <header className='flex flex-col items-center p-5 md:flex-row md:justify-between'>
      <Link href='/'>
        <div className='flex items-center gap-2 text-xl'>
          <Image src={SOL} alt='' width={70} />
          <h1 className='uppercase'>Medic On The Ground</h1>
        </div>
      </Link>
      <nav>
        <ul className='flex flex-col items-center gap-2 md:flex-row'>
          <Link href='/'>
            <li className={navLink}>Blog</li>
          </Link>
          <Link href='/resources'>
            <li className={navLink}>Resources</li>
          </Link>
          <Link href='/links'>
            <li className={navLink}>Links</li>
          </Link>
          <Link href='/community'>
            <li className={navLink}>Community</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
