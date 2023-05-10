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

export default function Home() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedTerm, setSelectedTerm] = React.useState('');
  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='flex w-screen bg-zinc-200 font-sans'>
      <div className='container mx-auto flex max-w-6xl flex-col'>
        {/* standardizing buttons */}
        <button className='button__primary'>Primary Button</button>
        <button className='button__secondary'>Secondary Button</button>
        <button className='button__tertiary'>Tertiary Button</button>
        {/* search box poc */}
        <div className='relative'>
          <pre>{selectedTerm}</pre>
          <input
            type='text'
            value={searchTerm}
            onChange={handleChange}
            className='w-80 rounded-lg border-2 p-2 shadow-inner outline-none placeholder:italic'
            placeholder='Search for an assigned member'></input>
          {searchTerm && (
            <ul
              className={`absolute mt-1 max-h-48 w-80 overflow-scroll overscroll-auto rounded-lg border-2 bg-zinc-100`}>
              {filteredOptions.map(option => (
                <li
                  key={option}
                  onClick={() => setSelectedTerm(option)}
                  className='border-b-2 p-2 first:rounded-t-lg last:rounded-b-lg last:border-b-0 hover:cursor-pointer hover:bg-zinc-300'>
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
