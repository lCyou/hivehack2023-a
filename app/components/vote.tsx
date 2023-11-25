import Image from 'next/image'
import data  from '../../public/voting.json'
import { useContractRead } from 'wagmi';


export function votable() {
    return true;
}

export function votee() {
    
    const contract = useContractRead({
        address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
        abi: data.output.abi,
        functionName: 'getAllCandidate',
    })
    console.log( contract.data )

    return contract.data;
}
  
