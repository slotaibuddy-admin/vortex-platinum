export default function StatCard({ icon, label, value, color }) {
  return (
    <div style={{
      background: 'var(--bg-card)', borderRadius: 14,
      border: `1px solid ${color}33`, padding: '18px 20px',
      display: 'flex', flexDirection: 'column', gap: 8
    }}>
      <div style={{ fontSize: 22 }}>{icon}</div>
      <div style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 1 }}>{label}</div>
      <div style={{ fontSize: 20, fontWeight: 700, color }}>{value}</div>
    </div>
  )
}
