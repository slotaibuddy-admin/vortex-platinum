import { createContext, useContext, useState, useCallback } from 'react'
import { ethers } from 'ethers'

const WalletContext = createContext(null)
export const useWallet = () => useContext(WalletContext)

export function WalletProvider({ children }) {
  const [connected, setConnected] = useState(false)
  const [address, setAddress]     = useState('')
  const [balance, setBalance]     = useState('0.0000')
  const [network, setNetwork]     = useState('')
  const [provider, setProvider]   = useState(null)

  const connect = useCallback(async () => {
    try {
      if (!window.ethereum) { alert('Bitte MetaMask oder Uniswap Wallet installieren'); return }
      const prov = new ethers.BrowserProvider(window.ethereum)
      await prov.send('eth_requestAccounts', [])
      const signer = await prov.getSigner()
      const addr   = await signer.getAddress()
      const bal    = await prov.getBalance(addr)
      const net    = await prov.getNetwork()
      setProvider(prov)
      setAddress(addr)
      setBalance(parseFloat(ethers.formatEther(bal)).toFixed(4))
      setNetwork(net.name === 'matic' ? 'Polygon' : net.name)
      setConnected(true)
    } catch (e) { console.error('Wallet connect failed:', e) }
  }, [])

  const disconnect = useCallback(() => {
    setConnected(false); setAddress(''); setBalance('0.0000'); setNetwork(''); setProvider(null)
  }, [])

  return (
    <WalletContext.Provider value={{ connected, address, balance, network, provider, connect, disconnect }}>
      {children}
    </WalletContext.Provider>
  )
}
