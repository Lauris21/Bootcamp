import './App.css'
import { Outlet } from 'react-router-dom'
import Header from "./components/Header"
import Nav from "./components/Nav"


function App() {

  return (
    <div className="App">
    <Header />
    <Nav />
    <Outlet />
    </div>
  )
}

export default App
