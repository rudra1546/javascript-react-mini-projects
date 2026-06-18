import { NavLink } from 'react-router-dom'
function Sidebar() {
  return (
    <aside className='sidebar'>
      <h2>DashPro</h2>
      <NavLink to="/" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Dashboard</NavLink>
      <NavLink to="/analytics" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Analytics</NavLink>
      <NavLink to="/messages" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Messages</NavLink>
      <NavLink to="/settings" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Settings</NavLink>
    </aside>
  )
}

export default Sidebar