import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="divHome">
    <div className="image1"></div>
    <section>
        <h2>Character of Mario Kart 🚗</h2>
        <span>Check out the characters page 🦊:</span>
        <Link to="characters">Characters</Link>
    </section>
    <div className="image2"></div>
    </div>
  )
}

export default Home