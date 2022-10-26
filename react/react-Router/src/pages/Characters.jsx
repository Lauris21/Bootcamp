import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import CharacterDetail from "../components/CharacterDetail"
import { getCharacters } from "./../data/data.js"

const Characters = () => {
    const characters = getCharacters();
  
  return (
    <>
    <div>
      <h2>🚨 All characters 🚨</h2>
      <ul>
        {characters.map((character) => (
        <li key={character.id}>
          <Link to={`/characters/${character.id}`}>
            <CharacterDetail character={character} />
          </Link>
        </li>
      ))}
      </ul>
    </div>
    <Outlet />
    </>
  )
}

export default Characters;
