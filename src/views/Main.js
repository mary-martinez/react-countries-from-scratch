import React, { useEffect, useState, setErrorMessage } from 'react';
import { fetchCountries } from '../services/countries';
import CountryCard from '../components/CountryCard/CountryCard';
import './Main.css';
import Dropdown from '../components/Dropdown/Dropdown';


export default function Main() {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState('All');
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const options = ['All', 'Europe', 'North America', 'South America', 'Asia', 'Africa', 'Oceania', 'Antarctica'];

  useEffect(() => {

    const fetchData = async () => {
      try {
        const resp = await fetchCountries();
        setCountries(resp);
        setLoading(false);
      } catch (e) {
        setErrorMessage('We are experiencing technical difficulties. Please try reloading the page.');
      }
    };
    fetchData();
  }, []);

  const filterCountries = () => {
    return countries.filter((country) => country.continent === continent || continent === 'All');
  };

  if (loading) return <span className="loader">Load&nbsp;ng</span>;

  return (
    <main >
      <p>{errorMessage}</p>
      <Dropdown options={options} callback={setContinent} />
      <div className='contain-country-cards'>
        {filterCountries().map((country) => (
          <CountryCard key={country.id} {...country} />
        ))}
      </div>
    </main>
  );
}
