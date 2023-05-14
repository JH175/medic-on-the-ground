import Link from 'next/link';

const navLink = 'uppercase hover:text-neutral-500 hover:underline underline-offset-8'

const Nav = () => {
    return (
        <nav className='flex px-5 justify-between items-center'>
            <div>
                <h1 className='text-xl'>Medic On The Ground</h1>
            </div>
            <div>
                <ul className='flex gap-5'>
                    <Link href='/'><li className={navLink}>Blog</li></Link>
                    <Link href='/'><li className={navLink}>Resources</li></Link>
                    <Link href='/'><li className={navLink}>Links</li></Link>
                    <Link href='/'><li className={navLink}>Community</li></Link>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;