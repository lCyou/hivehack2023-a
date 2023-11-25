import Image from 'next/image'

import styles from './page.module.css'
const votees = [{name: '田中', voting: 1}, {name: '田中', voting: 1}, {name: '田中', voting: 1}, {name: '田中', voting: 1}, {name: '田中', voting: 1}];
const eventName = "作品の人気投票";

export default function Home() {
  return (
    <>
        <h1 className={styles['title']}>{eventName}</h1>
        <p className={styles['sentence']}>投票の結果は以下のとおりです。</p>
        {votees.map((votee, i) => {
            return (
            
                <h2 className={styles['result']} key={i} >{votee.name}は{votee.voting}です</h2>
            );
        })}

    </>
  )
}
