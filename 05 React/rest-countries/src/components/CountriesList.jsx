import { useState } from "react";
import countriesData from "../countriesData";
import CountryCard from "./CountryCard";

// export default function CountriesList() {

  // const [query,setQuery] = useState("") 

  // const filteredCountries = countriesData.filter((country) => country.name.common.toLowerCase().includes(query))
  //   console.log("filteredCountries",filteredCountries)
  
  //   const handleChange = e =>{
  //     setQuery(e.target.value)
  //   } 

  export default function CountriesList({query}){
    
    // let countriesData =[]
    const [countriesData, setcountriesData] = useState([])

    const filteredCountries = countriesData.filter(country =>
      country.names.common.toLowerCase().includes(query.toLowerCase()))
      
    fetch(
    'https://api.restcountries.com/countries/v5?response_fields=names.common,capitals,flags.url_svg,region,population&limit=100',
    { headers: { 'Authorization': 'Bearer rc_live_573a559059e64c118f53b86c981c7ff3' } }
  )
  .then((response)=> response.json())
  .then((result) =>{ 
    console.log("results is",result)
    setcountriesData(result.data.objects)
  })

  console.log("/////////",countriesData)

  return (
    <>

      {/* <input type="text" name="Search" onChange={handleChange}/> */}

      <div className="countries-container">

      {
        
       filteredCountries.length !=0 ?
        (filteredCountries.map((country,idx) => (
          <CountryCard
          key={idx}
           flag ={country.flag.url_svg || "www.google.com"}
           name ={country.names.common}
           population ={country.population}
           capital = {country.capitals}
           region={country.region}
           />
        ))) : <p>Unable to find country with name:-{query}</p>
      }

    </div>
  
    </> 
  )
}
