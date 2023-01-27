import React, { useState, useEffect } from 'react';
import Card from '../ComponentsCard/Card';
import urlCardimg from '../../assets/img/CoderHouse.jpg';



export default function UseFetch() {
  const [poke, setPoke] = useState([]);
  
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    
    // Update the document title using the browser API
    fetch('https://pokeapi.co/api/v2/ability/?limit=10')
      .then((response) => response.json())
      .then((pokemon) => setPoke(pokemon.results));
  },[]);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <div className='w-8/12 m-auto flex flex-wrap'>
        { 
          poke.map(pok =>
            <Card
              key={pok.key}
              id={pok.id}
              imageSource={pok.str}
              title={pok.name}
            />
        )}
      </div>
    </div>
  );
}



