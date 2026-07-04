import { useState, useEffect } from 'react'

const MESSAGES = [
  '🤖 Agent ALPHA: Uniswap v3 Quote abgerufen — MATIC/USDC',
  '📈 Agent BETA: Momentum erkannt — Swap initiiert',
  '🧠 ML-Modell: Q-Table Update — Epsilon 0.094',
  '⛽ Gas-Optimierung: 23 Gwei — Trade ausgeführt',
  '🔐 Slippage-Guard: 0.5% Limit gesetzt',
  '✅ ALPHA Cycle #30 abgeschlossen — +0.0034 POL',
  '🔄 BETA analysiert Orderbook-Imbalance...',
  '💰 Profit-Split: 65% Admin / 35% Reinvest',
]

export default function Ticker() {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % MESSAGES.length), 3500)
    return () => clearInterval(t)
  }, [])
  return (
    <div style={{
      background: '#0A0F1E', borderBottom: '1px solid #1E2D4A',
      padding: '8px 24px', display: 'flex', alignItems: 'center', gap: 12
    }}>
      <span style={{
        background: 'var(--cyan)', color: '#0B1020',
        fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 4
      }}>LIVE</span>
      <span style={{ fontSize: 13, color: 'var(--text-muted)', transition: 'all .3s' }}>
        {MESSAGES[idx]}
      </span>
    </div>
  )
}
