# Countries From Scratch Deliverable Plan

### Components

Main -- with countries / continent state
CountryCard -- will take in country info as props and display
Dropdown - will take list of continents, and continent state, setter as props

### To Dos

1. Get all the countries showing up with no dropdown

- Setup your Main component with countries state
- Get the supabase call working - don't worry about displaying - validate with console.log
- Create your CountryCard component with hard coded data
  `<CountryCard name="Scotland" continent="Europe" iso3="BES" />`
- Map through your countries state and display all the countries

2. Build the dropdown (don't worry about filtering at this point) -- make sure that when you change the dropdown, the state in Main.js gets updated -- use React dev tools to validate this step

3. Instead of displaying the countries -- display the FILTERED COUNTRIES

4. Add your loading state

country object 
continent: "Europe"
id: 15
iso2: "AD"
iso3: "AND"
local_name: "Andorra"
name: "Andorra"