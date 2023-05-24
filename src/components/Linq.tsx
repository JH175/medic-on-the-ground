import Link from 'next/link';

type LinqProps = {
  title: string;
  description: string;
  category: string;
  link: string;
};

const Linq = (props: LinqProps) => {
  return (
    <Link href={props.link} target='_blank'>
      <div className='flex w-[20rem] flex-col rounded-md border bg-white p-2'>
        <h2 className='font-bold'>{props.title}</h2>
        <p className='italic text-red-600'>{props.category}</p>
        <p>{props.description}</p>
      </div>
    </Link>
  );
};

export default Linq;
