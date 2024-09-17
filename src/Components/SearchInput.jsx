import React, { useState, useEffect } from 'react';
import Search from './core/Search';

const SearchInput = ({ value: initialValue, debounce = 500, onChange, ...props }) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value, debounce, onChange]);

  return (
    <div className='w-full  border-[0.3px] rounded-3xl px-[1rem] py-[1rem] flex items-center'>
           <Search />
      <input
        className='outline-none bg-main text-sm font-sans text-red-600-placeholder'
        onChange={(e) => setValue(e.target.value)}
        {...props}
        placeholder='Search'
        type='text'
        value={value}
      />
    </div>
  );
};

export default SearchInput;
