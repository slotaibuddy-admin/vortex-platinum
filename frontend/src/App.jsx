import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import Ticker from './components/Ticker'
import { WalletProvider } from './context/WalletContext'
import { AgentProvider } from './context/AgentContext'

export default function App() {
  const [activePage, setActivePage] = useState('dashboard')

  return (
    <WalletProvider>
      <AgentProvider>
        <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-main)' }}>
          <Sidebar activePage={activePage} setActivePage={setActivePage} />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Ticker />
            <main style={{ flex: 1, padding: '24px', overflowY: 'auto' }}>
              {activePage === 'dashboard' && <Dashboard />}
            </main>
          </div>
        </div>
      </AgentProvider>
    </WalletProvider>
  )
}
