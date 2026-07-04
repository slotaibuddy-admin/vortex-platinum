import { useWallet } from '../context/WalletContext'

export default function WalletBar() {
  const { connected, address, balance, network, connect, disconnect } = useWallet()
  return (
    <div style={{
      background: 'var(--bg-card)', borderRadius: 14,
      border: '1px solid #1E2D4A', padding: '14px 20px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{
          width: 10, height: 10, borderRadius: '50%',
          background: connected ? 'var(--lime)' : '#FF4B6E',
          boxShadow: connected ? '0 0 8px var(--lime)' : '0 0 8px #FF4B6E'
        }} />
        <div>
          <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Wallet</div>
          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>
            {connected ? `${address.slice(0,6)}...${address.slice(-4)}` : 'Nicht verbunden'}
          </div>
        </div>
        {connected && (
          <>
            <div style={{ width: 1, height: 30, background: '#1E2D4A' }} />
            <div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Balance</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--cyan)' }}>{balance} POL</div>
            </div>
            <div style={{ width: 1, height: 30, background: '#1E2D4A' }} />
            <div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Netzwerk</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--blue)' }}>{network}</div>
            </div>
          </>
        )}
      </div>
      <button onClick={connected ? disconnect : connect} style={{
        background: connected ? 'rgba(255,75,110,0.15)' : 'rgba(21,122,255,0.15)',
        border: `1px solid ${connected ? '#FF4B6E' : 'var(--blue)'}`,
        color: connected ? '#FF4B6E' : 'var(--blue)',
        borderRadius: 10, padding: '8px 18px', cursor: 'pointer',
        fontSize: 13, fontWeight: 600
      }}>
        {connected ? '🔌 Trennen' : '🦊 Wallet verbinden'}
      </button>
    </div>
  )
}
