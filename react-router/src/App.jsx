import { NavLink, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className="App">
      <header className="header">
        <h1>Ready to discover everything about YOGA?</h1>
      </header>
      <div>
        <nav>
          <NavLink to="">Home </NavLink>
          <NavLink to="poses">Poses </NavLink>
          <NavLink to="about">About </NavLink>
        </nav>
        <main>
          <Outlet /> 
        </main>
      </div>
    </div>
  )
}

export default App
// el outlet me dice que en todas las páginas voy a tener todo lo que he declarado anteriormente(home,poses y aboutsi la ruta no está renderizada se renderizará la route path)