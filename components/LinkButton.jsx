import Link from 'next/link';

const LinkButton = ({ href, children }) => {
  return (
    <Link
      href={href}
      className='flex w-full max-w-xs items-center justify-center space-x-2 rounded-lg border-2 border-zinc-500 bg-zinc-500 p-2 px-4 text-white duration-150 hover:border-zinc-700 hover:bg-zinc-700 md:w-auto'>
      {children}
    </Link>
  );
};

export default LinkButton;
