import Image from 'next/image'
import data  from '../../public/voting.json'
import { useContractRead } from 'wagmi';

export function votable() {

    const a = useContractRead({
        address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
        abi: data.output.abi,
        functionName: 'getAllCandidate',
    })

    console.log(a.data)

    return true;
}

export function votee() {
    return   
}
  

useContractRead