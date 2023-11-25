import Image from 'next/image'
const votees = [{name: '田中', voting: 1}, {name: '田中', voting: 1}, {name: '田中', voting: 1}, {name: '田中', voting: 1}, {name: '田中', voting: 1}];
export default function Home() {
  return (
    <>
    {votees.map((votee, i) => {
        return (
            <h2 key={i} >{votee.name}は{votee.voting}です</h2>
        );
    })}
    </>
  )
}
