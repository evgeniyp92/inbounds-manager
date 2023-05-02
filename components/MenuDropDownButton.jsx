import { useState, useRef, useEffect } from 'react';

const MenuDropDownButton = ({ hideOnMobile, children }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef();

  const handleClickOutside = event => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, true);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
    };
  }, []);

  return (
    <div
      className={`relative ${hideOnMobile && 'hidden md:block'}`}
      ref={menuRef}>
      <button
        onClick={() => {
          if (dropdownOpen) {
            setDropdownOpen(false);
          } else {
            setDropdownOpen(true);
          }
        }}
        className={`items-center rounded-lg border-2 border-zinc-500 p-2 px-4 text-zinc-900 duration-150 hover:bg-zinc-200 md:flex md:space-x-2 ${
          dropdownOpen && 'bg-zinc-200'
        }`}>
        {children}
      </button>
      <div
        className={`absolute right-0 z-10 mt-2 flex w-56 origin-top-right flex-col rounded-lg 
        bg-white shadow-xl ring-2 ring-black ring-opacity-5 transition-all duration-300 ease-in-out focus:outline-none ${
          dropdownOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}>
        <button
          className='border-b p-2 hover:bg-zinc-200'
          onClick={() => setDropdownOpen(false)}>
          Assign Sponsor
        </button>
        <button
          className='border-b p-2 hover:bg-zinc-200'
          onClick={() => setDropdownOpen(false)}>
          Remove
        </button>
        <button
          className='border-b p-2 hover:bg-zinc-200'
          onClick={() => setDropdownOpen(false)}>
          Call
        </button>
        <button
          className='border-b p-2 hover:bg-zinc-200'
          onClick={() => setDropdownOpen(false)}>
          Draft LOC
        </button>
        <button
          className='p-2 hover:bg-zinc-200'
          onClick={() => setDropdownOpen(false)}>
          Retrain to 9J000
        </button>
      </div>
    </div>
  );
};

export default MenuDropDownButton;

function undefined({ dropdownOpen, setDropdownOpen }) {
  return (
    <div
      className={`absolute right-0 z-10 mt-2 flex w-56 origin-top-right flex-col rounded-lg 
        bg-white shadow-xl ring-2 ring-black ring-opacity-5 transition-all duration-300 ease-in-out focus:outline-none ${
          dropdownOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}>
      <button
        className='border-b p-2 hover:bg-zinc-200'
        onClick={() => setDropdownOpen(false)}>
        Assign Sponsor
      </button>
      <button
        className='border-b p-2 hover:bg-zinc-200'
        onClick={() => setDropdownOpen(false)}>
        Remove
      </button>
      <button
        className='border-b p-2 hover:bg-zinc-200'
        onClick={() => setDropdownOpen(false)}>
        Call
      </button>
      <button
        className='border-b p-2 hover:bg-zinc-200'
        onClick={() => setDropdownOpen(false)}>
        Draft LOC
      </button>
      <button
        className='p-2 hover:bg-zinc-200'
        onClick={() => setDropdownOpen(false)}>
        Retrain to 9J000
      </button>
    </div>
  );
}
