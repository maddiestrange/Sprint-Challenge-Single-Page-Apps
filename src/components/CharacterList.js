import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          setCharacters(response.data.results);
          console.log('character API:', response.data.results)
          console.log('characters:', characters)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
  }, [])

  return (
  <section className='character-list grid-view'>
    {characters.map(characters =>{
            return <CharacterCard name={characters.name} 
                               species={characters.species}
                               episodes={characters.episode.length}
                               img={characters.image}/> })}
  </section>
  )
}
