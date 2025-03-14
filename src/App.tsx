// App.tsx
'use client'
import { useState, useEffect } from "react";

import { Country } from "./models";
import Card from "./component/Card";
import CountryModal from "./component/CountryModal";
import Navbar from "./component/Navbar";
import Search from "./component/Search";
import Selection from "./component/Selection";

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data: Country[] = await response.json();
        setCountries(data.sort());
        setFilteredCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filterCountries = () => {
      let filtered = countries;

      // Apply region filter
      if (selectedRegion) {
        filtered = filtered.filter(country => 
          country.region === selectedRegion
        );
      }

      // Apply search filter
      if (searchTerm) {
        const lowerCaseTerm = searchTerm.toLowerCase();
        filtered = filtered.filter(country => 
          country.name.common.toLowerCase().includes(lowerCaseTerm) ||
          country.name.official.toLowerCase().includes(lowerCaseTerm)
        );
      }

      setFilteredCountries(filtered);
    };

    filterCountries();
  }, [countries, searchTerm, selectedRegion]);

  // const handleSearch = (term: string) => {
  //   setSearchTerm(term);
  //   if (!term) {
  //     setFilteredCountries(countries);
  //     return;
  //   }
    
  //   const lowerCaseTerm = term.toLowerCase();
  //   const filtered = countries.filter(country => 
  //     country.name.common.toLowerCase().includes(lowerCaseTerm) ||
  //     country.name.official.toLowerCase().includes(lowerCaseTerm)
  //   );
    
  //   setFilteredCountries(filtered);
  // };

  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <div className="flex justify-around items-center w-11/12 mx-auto h-16">
        <Search onChange={setSearchTerm} />
        <Selection 
          value={selectedRegion}
          onChange={setSelectedRegion}
        />
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {/* {countries.map((country) => (
          <Card
            key={country.cca3}
            country={country}
            onClick={() => setSelectedCountry(country)}
          />
        ))} */}

{filteredCountries.length === 0 ? (
          <p className="text-center text-red-500">No countries found matching "{searchTerm}"</p>
        ) : (
          filteredCountries.map((country) => (
            <Card 
              key={country.cca3} 
              country={country}
              onClick={() => setSelectedCountry(country)}
            />
          ))
        )}


      </div>

      {selectedCountry && (
        <CountryModal
          country={selectedCountry}
          onClose={() => setSelectedCountry(null)}
        />
      )}
    </div>
  );
}

export default App;