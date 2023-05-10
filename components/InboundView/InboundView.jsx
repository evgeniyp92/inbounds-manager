import React from 'react';
import { SponsorInformation } from './SponsorInformation';
import { ProcessForm } from './ProcessForm';
import { CoreInfo } from './CoreInfo';

export function InboundView({ inbound }) {
  const [formState, setFormState] = React.useState({});

  return (
    <div className='mx-4 space-y-2 rounded-lg bg-zinc-100 p-4 md:space-y-20 md:p-12'>
      {/* Core Info */}
      <CoreInfo
        rank={inbound.rank}
        name={inbound.name}
        maritalStatus={inbound.maritalStatus}
        afsc={inbound.afsc}
        losingPas={inbound.losingPas || null}
      />
      {/* Separator */}
      <div className='w-full border-b-2 md:hidden' />
      {/* Checkboxes */}
      <ProcessForm
        inprocessingState={inbound.inprocessingState}
        setFormState={setFormState}
      />
      {/* Additional Information */}
      <div className='flex flex-col space-y-6 md:flex-row md:items-end md:justify-between md:space-y-0'>
        {/* Sponsor information */}
        <SponsorInformation
          sponsor={inbound.assignedSponsor}
          rnltd={inbound.rnltd}
        />
        {/* Controls */}
        <div className='flex flex-col space-y-2 md:flex-row md:items-end md:justify-end md:space-x-2 md:space-y-0'>
          <button className='button__tertiary'>Remove from inbounds</button>
          <button className='button__primary'>Update information</button>
        </div>
      </div>
      {/* <pre>{JSON.stringify(formState, 0, 2)}</pre>
      <pre>{JSON.stringify(inbound, 0, 2)}</pre> */}
    </div>
  );
}
