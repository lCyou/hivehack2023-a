import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { createPublicClient, http } from 'viem'
import { localhost } from 'wagmi/chains' 
import { publicProvider } from 'wagmi/providers/public'

const { publicClient } = configureChains([localhost], [publicProvider()])

export const clientConf = createConfig({
  autoConnect: true,
  publicClient
})
