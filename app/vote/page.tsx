import Image from 'next/image'
const votees = [{name: '田中'}, {name: '田中'}, {name: '田中'}, {name: '田中'}, {name: '田中'}];


export default function Home() {
    
  return (
    <>
        <h1>イベント投票</h1>
        <p>以下の中から投票したい人を選んでください！</p>

        {votees.map((votee, i) => {
            return (
                <button key={i} id="button"> {votee.name} </button>
            );
        })}

    </>
  )
}
