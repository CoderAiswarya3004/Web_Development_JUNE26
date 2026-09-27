import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import "./CountryDetail.css";
import Header from "./Header";

export default function CountryDetail() {

  const [countryData, setCountryData] = useState(null);
  const[countryNotFound , setCountryNotFound ] = useState(false)
  const params = useParams();
  // console.log(".....",country)
  const navigate = useNavigate("/")
  const { country } = params;


  useEffect(() => {

    fetch(`http://localhost:3000/countries?names.common=${country}`)
      .then(resp => resp.json())
      .then(res => {
        console.log("Country data:", res);
        // console.log("Country data:", res[0]);
        setCountryData(res[0]);

        if(!res.length)
        {
          setCountryNotFound(true)
          return 
        }
        // res[0].borders.map(border=>
        //   fetch("Http://localhost:3000/countries?codes.alpha_3="+border)
        //   .then(resp=>resp.json())
        //   .then(res1=>{
        //     console.log(",,,,",res1);
            
        //   })
        // )

        Promise.all(res[0].borders.map(border => 
          fetch("http://localhost:3000/countries?codes.alpha_3="+ border)
          .then(resp => resp.json())
          .then(res1 => ({border:res1[0].codes.alpha_3, c_name:res1[0].names.common}))
        ))
        .then(borders =>{
          // console.log("###",borders)
          // console.log("1111111",res[0])
          // setCountryData({"222222222",{...res[0],borders:[...borders]}})

          setCountryData({...res[0],borders : [...borders]})
        })
      });

  }, [country]);

  if(countryNotFound)
    return <h2 style={{textAlign:'center'}}>No Country Found </h2>

  return (
    <>
    {/* <Header/> */}
     <main>
      {
       countryData === null ? (
          <p>Loading</p>
        ) : (
          <div className="country-details-container">
            <div className="navigation-container">
             <span className="back-button" onClick={() => navigate(-1)}>
              <i className="fa-solid fa-arrow-left"></i>
              &nbsp; Back
            </span>
             <span className="back-button" onClick={() => navigate(1)}>
              Forward  &nbsp; <i className="fa-solid fa-arrow-right"></i>
            </span>
            </div>
           
            
            

            <div className="country-details">

              <img
                src={countryData.flag.url_svg}
                alt={countryData.names.common}
              />

              <div className="details-text-container">

                <h1>
                  Country Name: {countryData.names.common}
                </h1>

                <div className="details-text">

                  <p>
                    <b>Native Name: </b>
                    <span className="native-name">
                      {
                        Object.values(countryData.names.native)[0]?.common || "N/A"
                      }
                    </span>
                  </p>

                  <p>
                    <b>Population: </b>
                    <span className="population">
                      {countryData.population}
                    </span>
                  </p>

                  <p>
                    <b>Region: </b>
                    <span className="region">
                      {countryData.region}
                    </span>
                  </p>

                  <p>
                    <b>Sub Region: </b>
                    <span className="sub-region">
                      {countryData.subregion}
                    </span>
                  </p>

                  <p>
                    <b>Capital: </b>
                    <span className="capital">
                      {
                        countryData.capitals
                          .map(cap => cap.name)
                          .join(", ")
                      }
                    </span>
                  </p>

                  <p>
                    <b>Top Level Domain: </b>
                    <span className="top-level-domain">
                      {countryData.tlds.join(", ")}
                    </span>
                  </p>

                  <p>
                    <b>Currencies: </b>
                    <span className="currencies">
                      {
                        Object.values(countryData.currencies)
                          .map(curr => curr.name)
                          .join(", ")
                      }
                    </span>
                  </p>

                  <p>
                    <b>Languages: </b>
                    <span className="languages">
                      {
                        countryData.languages
                          .map(lan => lan.name)
                          .join(", ")
                      }
                    </span>
                  </p>

                </div>

                <div className="border-countries">
                  <b>Border Countries: 
                  {countryData.borders.map(b => <Link key={b.border} to ={`/${b.c_name}`}>{b.border}</Link> ) || "N/A"}</b>
                </div>

              </div>

            </div>

          </div>
        )
      }
    </main>
    </>
  );
}