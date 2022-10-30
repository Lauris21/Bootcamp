import Nav from "./components/Nav"
import { Outlet } from "react-router-dom"

function App() {


  return (
    <div className="App">
      <header>Places APp</header>
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
