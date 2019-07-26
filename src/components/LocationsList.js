import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard'

export default function LocationsList() {
    const [locations, setLocations] = useState([]);
    useEffect(() => {
      // TODO: Add AJAX/API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        axios
          .get('https://rickandmortyapi.com/api/location/')
          .then(response => {
            setLocations(response.data.results);
            console.log('location API:', response.data.results)
            console.log('locations:', locations)
          })
          .catch(error => {
            console.error('Server Error', error);
          });
    }, [])
  
    return (
    <section className='character-list grid-view'>
      {locations.map(locations =>{
            return <LocationCard name={locations.name} 
                               type={locations.type}
                               residents={locations.residents.length}
                               dimension={locations.dimension}/> })}
    </section>
    )
  }
