import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='dashboard'>
      <aside className='sidebar'>
        <h2>DashPro</h2>
        <a>DashBoard</a>
        <a>Analytics</a>
        <a>Messages</a>
        <a>Settings</a>
      </aside>

      <main className='main'>
        <nav className='navbar'>
          <div>
            <h1>Dashboard</h1>
            <p>Welcome to your dashboard!</p>
          </div>
          <button>Profile</button>
        </nav>
        <section className='cards'>
          <div className='card'>
            <p>Total Users</p>
            <h2>12,345</h2>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
