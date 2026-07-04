import StatCard from './StatCard'
import AgentCard from './AgentCard'
import WalletBar from './WalletBar'
import { useAgent } from '../context/AgentContext'
import { useWallet } from '../context/WalletContext'

export default function Dashboard() {
  const { alpha, beta, totalProfit, totalCycles, uptime } = useAgent()
  const { connected, address, balance } = useWallet()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

      <SectionBand color="var(--blue)" title="⚡ VORTEX PLATINUM" sub="Dual-AI Web3 Trading System — Live" />
      <WalletBar />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        <StatCard icon="📈" label="Gesamtprofit" value={`+${totalProfit.toFixed(4)} POL`} color="var(--cyan)" />
        <StatCard icon="🔄" label="Zyklen" value={totalCycles} color="var(--blue)" />
        <StatCard icon="⏱" label="Uptime" value={uptime} color="var(--magenta)" />
        <StatCard icon="💶" label="Kapital" value={`${balance} POL`} color="var(--lime)" />
      </div>

      <SectionBand color="var(--magenta)" title="🤖 Agent Competition" sub="ALPHA vs BETA — Live Scoring" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <AgentCard agent={alpha} name="ALPHA" color="var(--blue)" strategy="Volume-Based (Many Small Trades)" />
        <AgentCard agent={beta}  name="BETA"  color="var(--magenta)" strategy="Timing-Based (Few Large Trades)" />
      </div>

      <SectionBand color="var(--cyan)" title="🔐 Sicherheit & On-Chain" sub="Slippage-Guard · Nonce-Manager · Gas-Optimierung" />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        <StatCard icon="🛡" label="Slippage-Limit" value="0.5%" color="var(--cyan)" />
        <StatCard icon="🔢" label="Nonce-Manager" value="Aktiv" color="var(--lime)" />
        <StatCard icon="⛽" label="Max Gas" value="30 Gwei" color="var(--blue)" />
      </div>

    </div>
  )
}
function SectionBand({ color, title, sub }) {
  return (
    <div style={{
      background: `linear-gradient(90deg, ${color}22, transparent)`,
      borderLeft: `4px solid ${color}`,
      borderRadius: 12, padding: '14px 20px'
    }}>
      <div style={{ fontWeight: 700, fontSize: 16, color }}>{title}</div>
      <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{sub}</div>
    </div>
  )
}
