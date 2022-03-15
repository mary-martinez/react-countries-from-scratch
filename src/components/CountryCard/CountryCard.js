import React from 'react';

export default function CountryCard({ name, iso2, continent }) {
  const iso2Label = iso2.toLowerCase();
  return (
    <div className="country-card">
      <h3 className='country-name'>{name}</h3>
      <img className='country-flag' src={`https://flagcdn.com/32x24/${iso2Label}.png`} />
      <p className='continent'>{`Continent: ${continent}`}</p>
    </div>
  );
}
