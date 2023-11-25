import { useEffect } from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'

import { InjectedConnector } from 'wagmi/connectors/injected'

function Profile() {
  const { address, isConnecting, isDisconnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()


  useEffect(() => {
    if(isDisconnected){
        connect()
    }
  }
  , [isDisconnected])

  
    return (
        
        <div>
            <p>Address: {address}</p>
            {/* <button onClick={() => connect()}>Connect Wallet</button> */}
            <button >Connect</button>
            <button onClick={() => disconnect()}>Disconnect</button>
        </div>
    )
}

export default Profile;