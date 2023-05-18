import Image from 'next/image';
import Link from 'next/link';
import { PostMetadata } from './PostMetadata';

const PostPreview = (props: PostMetadata) => {
  return (
    <Link href={`posts/${props.slug}`} key={props.date}>
      <div className='flex gap-2 rounded-md border border-stone-700 p-2 drop-shadow-lg'>
        <Image
          src={props.image}
          alt=''
          width={150}
          height={150}
          className='rounded-md'
        />
        <div className='flex flex-col items-center p-2'>
          <h2 className='text-lg font-bold'>{props.title}</h2>
          <p>{props.date},</p>
          <p>{props.subtitle}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostPreview;
