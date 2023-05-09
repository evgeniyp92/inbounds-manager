import Link from 'next/link';
import StatusPill from './StatusPill';
import MenuDropDownButton from './MenuDropDownButton';
import LinkButton from './LinkButton';

const ListItem = props => {
  return (
    // Container
    <div className='flex flex-col items-center justify-between space-y-2 border-b border-zinc-300 bg-zinc-50 p-8 first:rounded-t-lg last:rounded-b-lg last:border-b-0 md:flex-row md:space-y-0'>
      {/* Information */}
      <div className='flex w-full flex-col items-center space-y-4 md:items-start'>
        <h3 className='text-xl font-bold'>
          <span>ENL</span> <span className='uppercase'>[LastName]</span>, [AFSC]
        </h3>
        <div className='flex space-x-4'>
          {props.married && <StatusPill>Married</StatusPill>}
          {props.single && <StatusPill>Single</StatusPill>}
          {props.divorced && <StatusPill>Divorced</StatusPill>}
          {!props.priorService && <StatusPill>NPS</StatusPill>}
        </div>
      </div>
      {/* Buttons */}
      <div className='flex w-full justify-center md:w-auto md:min-w-fit md:space-x-2'>
        <MenuDropDownButton hideOnMobile>
          <span>Quick Actions</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='inline h-6 w-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z'
            />
          </svg>
        </MenuDropDownButton>
        <LinkButton href={'#'}>
          <span>See details</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='inline h-6 w-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </LinkButton>
      </div>
    </div>
  );
};

export default ListItem;
