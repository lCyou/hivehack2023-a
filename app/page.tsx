"use client"
import Image from 'next/image'
import Profile from './components/profile'
import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { createPublicClient, http } from 'viem'
import { localhost } from 'wagmi/chains' 
import { publicProvider } from 'wagmi/providers/public'
import {clientConf} from './components/client'
import { use } from 'react'
 

const { publicClient } = configureChains([localhost], [publicProvider()])

const config = createConfig({
  autoConnect: true,
  publicClient
})

export default function Home() {
  return (
      <Profile />
  )
}
