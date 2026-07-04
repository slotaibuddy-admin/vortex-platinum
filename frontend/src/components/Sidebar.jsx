export default function Sidebar({ activePage, setActivePage }) {
  const nav = [
    { id: 'dashboard', icon: '⊞', label: 'Dashboard' },
    { id: 'agents',    icon: '🤖', label: 'AI Agents' },
    { id: 'tradelog',  icon: '📋', label: 'Trade Log' },
    { id: 'settings',  icon: '⚙️', label: 'Settings' },
  ]
  return (
    <aside style={{
      width: 220, background: 'var(--bg-panel)',
      borderRight: '1px solid #1E2D4A',
      display: 'flex', flexDirection: 'column', padding: '24px 0'
    }}>
      <div style={{ padding: '0 20px 28px', borderBottom: '1px solid #1E2D4A' }}>
        <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--cyan)', letterSpacing: 2 }}>
          ⚡ VORTEX
        </div>
        <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>
          PLATINUM · Dual-AI Web3
        </div>
      </div>
      <nav style={{ padding: '16px 12px', flex: 1 }}>
        {nav.map(n => (
          <button key={n.id} onClick={() => setActivePage(n.id)}
            style={{
              width: '100%', display: 'flex', alignItems: 'center', gap: 10,
              padding: '10px 12px', borderRadius: 10, border: 'none', cursor: 'pointer',
              background: activePage === n.id ? 'rgba(21,122,255,0.15)' : 'transparent',
              color: activePage === n.id ? 'var(--blue)' : 'var(--text-muted)',
              fontSize: 14, fontWeight: activePage === n.id ? 600 : 400,
              marginBottom: 4, transition: 'all .2s'
            }}>
            <span>{n.icon}</span><span>{n.label}</span>
          </button>
        ))}
      </nav>
      <div style={{ padding: '0 20px', fontSize: 11, color: '#2A3A5C' }}>
        v1.0.0 PLATINUM
      </div>
    </aside>
  )
}
