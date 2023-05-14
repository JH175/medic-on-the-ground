import Link from 'next/link';
import Logo from '../app/MOTG.svg'
import Image from 'next/image';
import HeaderBg from '../app/headerbg.jpg'

const Header = () => {
  return (
    <div className='flex justify-center h-[50vh] items-center'>
      <Link href='/'>
        <div className='w-52'>
          <Image src={Logo} alt='MOTG Logo' />
        </div>
      </Link>
    </div>
  );
};

export default Header;
