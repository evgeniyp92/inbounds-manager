import Link from 'next/link';

const LinkButton = ({ href, children }) => {
  return (
    <Link href={href} className='button__primary'>
      {children}
    </Link>
  );
};

export default LinkButton;
