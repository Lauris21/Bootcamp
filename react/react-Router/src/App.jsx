import { Outlet } from 'react-router-dom'
import './App.css'

import Header  from './components/header'
import NavBarLink from "./components/navLink"


function App() {
  return (
    <div className='App'>
      <Header />
      <NavBarLink />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
