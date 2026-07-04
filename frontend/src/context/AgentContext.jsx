import { createContext, useContext, useState, useEffect, useRef } from 'react'

const AgentContext = createContext(null)
export const useAgent = () => useContext(AgentContext)

const mkHistory = () => Array.from({ length: 12 }, () => (Math.random() - 0.3) * 0.01)

const INIT = {
  alpha: { score: 145, winRate: 73.5, trades: 29, profit: 0.1247, cycle: 29, leading: true,  status: '🧠 ML: Q-Table Update...', history: mkHistory() },
  beta:  { score: 120, winRate: 68.6, trades: 14, profit: 0.4707, cycle: 14, leading: false, status: '📊 Momentum Analyse...', history: mkHistory() },
}

export function AgentProvider({ children }) {
  const [alpha, setAlpha] = useState(INIT.alpha)
  const [beta,  setBeta]  = useState(INIT.beta)
  const [totalCycles, setTotalCycles] = useState(43)
  const [seconds, setSeconds] = useState(0)
  const timerRef = useRef(null)

  const uptime = new Date(seconds * 1000).toISOString().slice(11, 19)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSeconds(s => s + 1)
    }, 1000)
    const agentTick = setInterval(() => {
      setAlpha(a => {
        const gain = (Math.random() - 0.3) * 0.003
        const newHistory = [...a.history.slice(1), gain]
        return {
          ...a,
          profit: parseFloat((a.profit + gain).toFixed(4)),
          score: a.score + (gain > 0 ? 1 : 0),
          trades: a.trades + (Math.random() > 0.6 ? 1 : 0),
          winRate: parseFloat((a.winRate + (gain > 0 ? 0.1 : -0.05)).toFixed(1)),
          cycle: a.cycle + 1,
          status: gain > 0 ? '✅ Trade erfolgreich' : '🔄 Nächste Opportunity...',
          history: newHistory,
        }
      })
      setBeta(b => {
        const gain = (Math.random() - 0.25) * 0.006
        const newHistory = [...b.history.slice(1), gain]
        return {
          ...b,
          profit: parseFloat((b.profit + gain).toFixed(4)),
          score: b.score + (gain > 0 ? 1 : 0),
          trades: b.trades + (Math.random() > 0.7 ? 1 : 0),
          cycle: b.cycle + 1,
          status: gain > 0 ? '💰 Profit gesichert' : '⏳ Timing analysieren...',
          history: newHistory,
        }
      })
      setTotalCycles(c => c + 1)
    }, 5000)
    return () => { clearInterval(timerRef.current); clearInterval(agentTick) }
  }, [])

  const totalProfit = alpha.profit + beta.profit

  return (
    <AgentContext.Provider value={{ alpha, beta, totalProfit, totalCycles, uptime }}>
      {children}
    </AgentContext.Provider>
  )
}
