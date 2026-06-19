import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Message from './pages/Messages';
import Settings from './pages/Settings';
import Messages from './pages/Messages';
import Analytics from './pages/Analytics';
function App() {

  return (<>
    <BrowserRouter>
      <div className='dashboard'>
        <Sidebar />
        
        <main className='main'>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />

          </Routes>

        </main>

      </div>
    </BrowserRouter>
  </>
  )

}

export default App
