
import { Outlet } from 'react-router'
import Login from './Componentes/Login/Login'
import Menu from './Componentes/Menu/Menu'
import Productos from './Componentes/Productos/Productos'

function App() {

  return (
    <>
    <Menu/>
    <Outlet/>

    </>
  )
}

export default App
