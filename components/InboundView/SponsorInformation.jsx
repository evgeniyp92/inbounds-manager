import React from 'react';
import { faker } from '@faker-js/faker';

export function SponsorInformation({}) {
  return (
    <div className='flex flex-col space-y-6 md:space-y-0'>
      <div className='flex flex-col items-center justify-center space-y-6 md:flex-row md:items-center md:justify-start md:space-x-2 md:space-y-0'>
        <h4 className='text-center text-base font-semibold md:text-left md:text-2xl'>
          Sponsored by MSG{' '}
          <span className='text-center capitalize'>
            {'WOOTEN, DANIEL'.toLowerCase()}
          </span>
        </h4>
        <button className='button__secondary md:button__tertiary flex p-2'>
          <span className='pl-2 md:hidden md:pl-0'>Options</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-6 w-6'>
            <path
              className='secondary'
              fillRule='evenodd'
              d='M12 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z'
            />
          </svg>
        </button>
      </div>
      <p className='text-center md:text-left'>
        Should report no later than 12/31/2023
      </p>
    </div>
  );
}
