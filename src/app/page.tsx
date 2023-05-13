
import Link from 'next/link';
import getPostMetadata from '@/components/getPostMetadata';


const Home = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post)=> (
    <div key={post.date}>
      <Link href={`posts/${post.slug}`}>
      <h2>{post.title}</h2>
      </Link>
    </div>
  ))
  return (
    <div>{postPreviews}</div>
  )
}

export default Home