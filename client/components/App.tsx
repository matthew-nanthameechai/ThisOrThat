import { Outlet } from 'react-router-dom'
import Nav from './Nav.tsx'

function App() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

export default App
