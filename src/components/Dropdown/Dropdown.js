import React from 'react';

export default function Dropdown({ options, callback }) {
  return (
    <div>
      <select data-testid='select' className='dropdown' onChange={(e) => callback(e.target.value)}>
        {options.map((item) => (
          <option data-testid='option' key={item} value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
