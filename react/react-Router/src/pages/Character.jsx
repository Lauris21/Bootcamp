import { useParams } from "react-router-dom";
import CharacterDetail from "../components/CharacterDetail"
import {getCharacter} from "../data/data.js"

export default function Character(){
  const params = useParams();
  const character = getCharacter(params.id)

  if (!character) return <p>The character not found</p>

  return (
    <div className="divCharacter">
      <h2>🚗My character🚗</h2>
      <CharacterDetail character={character} />
    </div>
  )
}