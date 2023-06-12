import React from 'react';

const options = [
  'apple',
  'banana',
  'orange',
  'pear',
  'grape',
  'mango',
  'ananas',
];

export function SponsorInformation({ sponsor, rnltd }) {
  const [updateSponsor, setUpdateSponsor] = React.useState(false);
  const [selectedTerm, setSelectedTerm] = React.useState({});
  const [searchTerm, setSearchTerm] = React.useState('');
  const [sponsors, setSponsors] = React.useState([]);

  React.useEffect(() => {
    // todo - convert this into a react query function and have the sponsor
    // changing be a mutation
    (async function () {
      if (sponsors.length) return;
      const res = await fetch('/api/sponsors');
      const data = await res.json();
      setSponsors([...data.sponsorsList]);
    })();
  }, [updateSponsor, sponsors.length]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const filteredOptions = sponsors.filter(sponsor =>
    sponsor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSetSponsor = sponsor => {
    // TODO - write this so it immediately updates the assigned sponsor in the
    // database
    console.log(sponsor);
    setSelectedTerm(sponsor);
    setUpdateSponsor(false);
  };

  return (
    <div className='flex flex-col space-y-6 md:space-y-0'>
      <div className='flex flex-col items-center justify-center space-y-6 md:flex-row md:items-center md:justify-start md:space-x-2 md:space-y-0'>
        <h4 className='text-center text-base font-semibold md:text-left md:text-2xl'>
          {`Sponsored by `}
          <span
            className='hover:cursor-pointer hover:underline'
            onClick={() => setUpdateSponsor(!updateSponsor)}>
            {sponsor || selectedTerm.name || ' nobody (Click to change)'}
          </span>
          {updateSponsor && (
            <div className='relative'>
              <input
                type='text'
                value={searchTerm}
                onChange={handleChange}
                className='w-80 rounded-lg border-2 p-2 text-sm shadow-inner outline-none placeholder:italic'
                placeholder='Search for an assigned member'></input>
              {searchTerm && (
                <ul
                  className={`absolute mt-1 max-h-48 w-80 overflow-scroll overscroll-auto rounded-lg border-2 bg-zinc-100 text-sm`}>
                  {filteredOptions.map(sponsor => (
                    <li
                      key={sponsor._id}
                      onClick={() => handleSetSponsor(sponsor)}
                      className='border-b-2 p-2 text-sm first:rounded-t-lg last:rounded-b-lg last:border-b-0 hover:cursor-pointer hover:bg-zinc-300'>
                      {sponsor.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </h4>
      </div>
      <p className='text-center md:text-left'>
        Should report no later than {rnltd.split('T')[0] || '--'}
      </p>
    </div>
  );
}
