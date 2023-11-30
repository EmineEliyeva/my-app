import React from 'react'
import './Country.css'
import {useState, useEffect} from 'react'

const Con = () => {
    
const [countries, setCountries]=useState([]) 

useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data =>{
        setCountries(data)
    })
}, [])
  return (
    <div className='country'>
{
    countries.map(country=>(
        <div className='main'>
        <img src={country.flags.svg}/>
        <h1>{country.name.official}</h1>
        <p className='capital'>{country.capital}</p>
        <p className='region'>{country.region}</p>
        </div>
    ))
}
    </div>
  )
}

export default Con