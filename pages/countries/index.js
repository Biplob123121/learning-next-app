import { useEffect, useState } from "react";
import Link from "next/link";

export default function Countries() {

    const [countries, setCountries] = useState();

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    //console.log(countries);

  return (
    <div>
        <h1>All Countries : {countries?.length}</h1>
        {countries?.map((country, index) =>
            <div key={index}>
                <Link href={`/countries/${index+1}`}>
                   <h3>{country.name.common}</h3>
                </Link>
                
            </div>)}
    </div>
  )
}
