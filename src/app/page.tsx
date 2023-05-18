import Link from 'next/link';
import getPostMetadata from '@/components/getPostMetadata';
import HeroImage from '../app/headerbg.jpg';
import SiteLogo from '../app/MOTG-SOL2.svg';
import Image from 'next/image';
import PostPreview from '@/components/PostPreview';

const Home = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <main>
      <div className='flex items-center justify-center'>
        <div className='relative w-screen py-5'>
          <div className='absolute left-0 top-0 -z-10 h-[100%] w-screen'>
            <Image src={HeroImage} alt='' fill={true} />
          </div>
          <div className='flex flex-col items-center justify-center gap-2 bg-[#ffffffaa] p-5'>
            <h2 className='text-4xl'>MOTG</h2>
            <Image src={SiteLogo} alt='' width={200} />
            <h2 className='text-xl uppercase'>
              a resource for the austere medical practitioner
            </h2>
          </div>
        </div>
      </div>
      <div className='flex justify-evenly p-2'>{postPreviews}</div>
    </main>
  );
};

export default Home;
