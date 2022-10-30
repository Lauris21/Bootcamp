import { Outlet } from 'react-router-dom'
import './App.css'
import Header from "./components/Header"
import NavBar from "./components/NavBar"


function App() {
 
  return (
    <div className="App">
      <Header />
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
