import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../services/countries';
import CountryCard from '../components/CountryCard/CountryCard';
import './Main.css';

export default function Main() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchCountries();
      // console.log(resp);
      setCountries(resp);
    };
    fetchData();
  }, []);
  // console.log('countries', countries);
  return (
    <main>
      {countries.map((country) => (
        <CountryCard key={country.id} {...country} />
      ))}
      {/* <CountryCard name='Andorra' iso2='AD' continent='Europe' /> */}
    </main>
  );
}
