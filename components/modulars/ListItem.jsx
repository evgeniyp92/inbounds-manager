import Link from 'next/link';
import StatusPill from './StatusPill';
import MenuDropDownButton from './MenuDropDownButton';
import LinkButton from './LinkButton';

const ListItem = ({ inbound }) => {
  return (
    // Container
    <div className='flex flex-col items-center justify-between space-y-2 border-b border-zinc-300 bg-zinc-100 p-8 first:rounded-t-lg last:rounded-b-lg last:border-b-0 md:flex-row md:space-y-0'>
      {/* Information */}
      <div className='flex w-full flex-col items-center space-y-4 md:items-start'>
        <h3 className='text-xl font-bold'>
          {inbound.rank} <span>{inbound.name.split(',')[0]}</span>
          {', '}
          <span className='capitalize'>
            {inbound.name.split(',')[1].toLowerCase()}
          </span>
        </h3>
        <div className='flex space-x-4'>
          {inbound.maritalStatus === 'M' && <StatusPill>Married</StatusPill>}
          {inbound.maritalStatus === 'S' && <StatusPill>Single</StatusPill>}
          {inbound.maritalStatus === 'D' && <StatusPill>Divorced</StatusPill>}
          {inbound.afsc === '-9T000' && <StatusPill>NPS</StatusPill>}
        </div>
      </div>
      {/* Buttons */}
      <div className='flex w-full justify-center md:w-auto md:min-w-fit md:space-x-2'>
        <LinkButton href={'/inbounds/' + inbound._id}>
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
        <MenuDropDownButton hideOnMobile>
          <span>Quick Actions</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-6 w-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z'
            />
          </svg>
        </MenuDropDownButton>
      </div>
    </div>
  );
};

export default ListItem;
