"use client"
import Image from 'next/image'
// import styles from './page.module.css'
import ResultLink from '../components/result-link'
import { votable, votee } from '../components/vote'

const votees = [{ name: '田中' }, { name: '田中' }, { name: '田中' }, { name: '田中' }, { name: '田中' }];
const eventName = "作品の人気投票";
//const eventName = 


export default function Home() {
    if(votable()){

    }

    const vote = () => {
        alert("田中");
    }
    return (
        <>
            <h1 className={styles['title']}>{eventName}</h1>
            <p className={styles['sentence']}>以下の中から投票したい人を選んでください！</p>

            {votees.map((votee, i) => (
                <button
                    className={styles['btn']}
                    key={i}
                    id="button"
                    onClick={vote}
                >
                    {votee.name}
                </button>
            ))}


            <ResultLink />
        </>
    )
}
