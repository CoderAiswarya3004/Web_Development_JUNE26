import { useEffect, useState } from "react";
import countriesData from "../countriesData";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";

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

    // const filteredCountries = countriesData.filter(country =>
    //   country.names.common.includes(query))
     
    useEffect(() =>{
      console.log("useEffect called")
  //      fetch(
  //   'https://api.restcountries.com/countries/v5?response_fields=names.common,capitals,flag.url_svg,region,population&limit=100',
  //   { headers: { 'Authorization': 'Bearer rc_live_573a559059e64c118f53b86c981c7ff3' } }
  // )
  fetch("http://localhost:3000/countries")
  .then((response)=> response.json())
  .then((result) =>{ 
    console.log("results is",result)
    // setcountriesData(result.data.objects)
    setcountriesData(result)
  })
  },[])


  // console.log("/////////",countriesData)
   console.log("countriesList Component",countriesData)

   /*
      useEffect => 
        - to perform something on the mount (first render) of the component
        - to perform something when state is changed
        - to perform something when the component is unmount (removed) from the webpage 

        syntax :-
        useEffect(callback fn , dependency array )

        dependency array:-
        is not available -> useEffect will be only every render & re-render
        [] -> useEffect is called only once 
        is [state] -> useEffect will only be called on render and on the state change
   */
  return (
    <>

      {/* <input type="text" name="Search" onChange={handleChange}/> */}

      <div className="countries-container">
      

      {
      !countriesData.length?<CountriesListShimmer/>:
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
        ))) : <h2>Unable to find country with name:-{query}</h2>
      }

    </div>
  
    </> 
  )
}
