export default function AgentCard({ agent, name, color, strategy }) {
  const pct = Math.min(100, Math.round((agent.score / 300) * 100))
  return (
    <div style={{
      background: 'var(--bg-card)', borderRadius: 16,
      border: `1px solid ${color}44`, padding: '20px', display: 'flex', flexDirection: 'column', gap: 14
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ fontWeight: 800, fontSize: 18, color }}>{name}</span>
          {agent.leading && (
            <span style={{ marginLeft: 8, background: color, color: '#0B1020', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 6 }}>LEADING</span>
          )}
        </div>
        <div style={{ fontSize: 28, fontWeight: 800, color }}>
          {agent.score}
        </div>
      </div>
      <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{strategy}</div>

      <div style={{ background: '#1E2D4A', borderRadius: 6, height: 6 }}>
        <div style={{ width: `${pct}%`, background: color, borderRadius: 6, height: '100%', transition: 'width 1s ease' }} />
      </div>

      <div style={{
        background: `${color}15`, border: `1px solid ${color}33`,
        borderRadius: 8, padding: '6px 12px',
        fontSize: 12, color, fontWeight: 600
      }}>
        {agent.status}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <Metric label="Win Rate" value={`${agent.winRate}%`} color={color} />
        <Metric label="Trades" value={agent.trades} color={color} />
        <Metric label="Profit" value={`+${agent.profit.toFixed(4)} POL`} color={color} />
        <Metric label="Zyklus" value={`#${agent.cycle}`} color={color} />
      </div>

      <div>
        <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 6 }}>Profit History</div>
        <div style={{ display: 'flex', gap: 3, height: 32, alignItems: 'flex-end' }}>
          {agent.history.map((h, i) => (
            <div key={i} style={{
              flex: 1, background: h > 0 ? color : '#FF4B6E',
              borderRadius: 3, height: `${Math.min(100, Math.abs(h) * 1000 + 20)}%`,
              opacity: 0.7 + (i / agent.history.length) * 0.3
            }} />
          ))}
        </div>
      </div>
    </div>
  )
}

function Metric({ label, value, color }) {
  return (
    <div style={{ background: '#0B1020', borderRadius: 8, padding: '8px 10px' }}>
      <div style={{ fontSize: 10, color: 'var(--text-muted)', marginBottom: 3 }}>{label}</div>
      <div style={{ fontSize: 14, fontWeight: 700, color }}>{value}</div>
    </div>
  )
}
