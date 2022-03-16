import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../services/countries';
import CountryCard from '../components/CountryCard/CountryCard';
import './Main.css';
import Dropdown from '../components/Dropdown/Dropdown';

export default function Main() {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState('All');
  // const [continents, setContinents] = useState([]);
  const options = ['All', 'Europe', 'North America', 'South America', 'Asia', 'Africa', 'Oceana', 'Antarctica'];
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchCountries();
      setCountries(resp);
    };
    fetchData();
  }, []);

  // get continents, send to dropdown component
  // loop through countries, if continent is not already in continents, then add it; add "all"
  const filterCountries = () => {
    return countries.filter((country) => country.continent === continent || continent === 'All');
  };

  return (
    <main>
      <Dropdown options={options} callback={setContinent} />
      {filterCountries().map((country) => (
        <CountryCard key={country.id} {...country} />
      ))}
    </main>
  );
}
