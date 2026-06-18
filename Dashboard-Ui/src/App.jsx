import { useState } from 'react'

import './App.css'
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import StatsCard from './components/StatsCard';
import RevenueChart from './components/RevenueChart';
import RecentActivity from './components/RecentActivity';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='dashboard'>
      <Sidebar />
      <main className='main'>
        <Navbar />
        <section className='cards'>

          <StatsCard title="Total Users" value="12,345" />
          <StatsCard title="Revenue" value="$98,765" />
          <StatsCard title="Project" value="12" />

          <StatsCard title="Growth" value="25%" />
        </section>

        <section className='table card'>
          <RevenueChart />

          <RecentActivity />
        </section>

      </main>
    </div>
  )
}

export default App
