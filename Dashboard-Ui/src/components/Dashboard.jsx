import Sidebar from './Sidebar';
import Navbar from './Navbar';
import StatsCard from './StatsCard';
import RevenueChart from './RevenueChart';
import RecentActivity from './RecentActivity';
function Dashboard(){
    return (
    <>
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
    </>

     
  )
}
export default Dashboard;