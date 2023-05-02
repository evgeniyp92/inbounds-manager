import React from 'react';
import { SponsorInformation } from './SponsorInformation';
import { ProcessForm } from './ProcessForm';
import { CoreInfo } from './CoreInfo';

export function InboundView({}) {
  return (
    <div className='mx-4 space-y-2 rounded-lg bg-zinc-100 p-4 md:space-y-20 md:p-12'>
      {/* Core Info */}
      <CoreInfo />
      {/* Separator */}
      <div className='w-full border-b-2 md:hidden' />
      {/* Checkboxes */}
      <ProcessForm />
      {/* Additional Information */}
      <div className='flex flex-col space-y-6 md:flex-row md:justify-between md:space-y-0'>
        {/* Sponsor information */}
        <SponsorInformation />
        {/* Controls */}
        <div className='flex flex-col space-y-2 md:flex-row md:items-end md:justify-end md:space-x-2 md:space-y-0'>
          <button className='button__secondary'>Remove from inbounds</button>
          <button className='button__primary'>Update information</button>
        </div>
      </div>
    </div>
  );
}
