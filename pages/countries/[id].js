import { useEffect, useState } from "react";

export default function Country() {


    const [country, setCountry] = useState();

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountry(data))
    }, [])

  return (
    <div>
        <h1>Single Country :</h1>
    </div>
  )
}
