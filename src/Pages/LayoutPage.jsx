import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar'

const LayoutPage = () => (
  <div>
    <NavBar />
    <Outlet />
  </div>
)

export default LayoutPage
