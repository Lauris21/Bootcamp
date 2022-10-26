import React from 'react'

const CharacterDetail = ({character}) => {

  return (
    <div>
        <h2>{character.name}</h2>
        <h3>Gender: {character.genero}</h3>
        <h4>Specie: {character.especie}</h4>
        <p>{character.grupo}</p>
        <img src={character.img} alt={character.name} />
    </div>
  )
}

export default CharacterDetail;
