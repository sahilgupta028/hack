// "use client";
// import { faMagnifyingGlass, faSearch } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React, { useState } from 'react';

// const SearchBar = ({ value }) => {
//   const [query, setQuery] = useState('');


//   return (
//     <div>
//     <div className='flex items-center flex-row relative text-xs'>
//   <input
//     type="text"
//     placeholder={`${value}...`}
//     className='w-full border-2 border-gray-800 rounded-xl px-5 py-3 text-black pl-10'
//   />
//   <FontAwesomeIcon icon={faSearch} className='absolute left-2 top-1/2 transform -translate-y-1/2 p-3 object-cover text-gray-500' />
//   </div>
//   <div>
//   </div>
//   </div>
//   );
// };

// export default SearchBar;

// function onSearch(value: any) {
//     throw new Error('Function not implemented.');
// }

"use client";
import { faMagnifyingGlass, faSearch, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const SearchBar = ({ value }) => {
  const [query, setQuery] = useState('');

  const handleVoiceSearch = () => {
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setQuery(transcript);
    };
    recognition.start();
  };

  return (
    <div>
      <div className="flex items-center flex-row relative text-xs">
        <input
          type="text"
          placeholder={`${value}...`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border-2 border-gray-800 rounded-xl px-5 py-3 text-black pl-10"
        />
        <FontAwesomeIcon icon={faSearch} className="absolute left-2 top-1/2 transform -translate-y-1/2 p-3 object-cover text-gray-500" />
        <button 
          onClick={handleVoiceSearch}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-3 text-gray-500"
        >
          <FontAwesomeIcon icon={faMicrophone} className='hover:text-green-400' />
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default SearchBar;

function onSearch(value: any) {
  throw new Error('Function not implemented.');
}

