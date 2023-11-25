"use client"
import Image from 'next/image'
import Profile from './components/profile'
import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { createPublicClient, http } from 'viem'
import { localhost } from 'wagmi/chains' 
import { publicProvider } from 'wagmi/providers/public'
 

const { publicClient } = configureChains([localhost], [publicProvider()])
 
// const config = createConfig({
//   autoConnect: true,
//   publicClient,

const config = createConfig({
  autoConnect: true,
  publicClient
})

export default function Home() {
  return (
    <WagmiConfig config = {config}>
      <Profile />
    </WagmiConfig>
  )
}
