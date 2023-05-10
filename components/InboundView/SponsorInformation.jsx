import React from 'react';
import { faker } from '@faker-js/faker';

export function SponsorInformation({ sponsor, rnltd }) {
  return (
    <div className='flex flex-col space-y-6 md:space-y-0'>
      <div className='flex flex-col items-center justify-center space-y-6 md:flex-row md:items-center md:justify-start md:space-x-2 md:space-y-0'>
        <h4 className='text-center text-base font-semibold md:text-left md:text-2xl'>
          Sponsored by {sponsor || 'nobody'}
        </h4>
      </div>
      <p className='text-center md:text-left'>
        Should report no later than {rnltd.split('T')[0] || '--'}
      </p>
    </div>
  );
}
