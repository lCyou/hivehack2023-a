import data  from '../../public/voting.json'
import { useContractRead } from 'wagmi';


export function vote(id) {
    use
    return true;
}

export function VoteButton() {
    
    const contract = useContractRead({
        address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
        abi: data.output.abi,
        functionName: 'getAllCandidate',
    });
    const wdata = contract.data;

    console.log(wdata);

    return (
        <div>
            {wdata.map(({id, name, voteCount}) => (
                    <div key={id}>
                        <h3>{name}</h3>
                        <button onClick={ (id) => vote(id)}>この人に投票する!</button>
                    </div>
                ))
            }
        </div>
    );
    
}
