"use client"
// import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
// import ResultLink from '../components/result-link'
import { VoteButton } from '../components/vote.jsx'

// const votees = [{ name: '田中' }, { name: '田中' }, { name: '田中' }, { name: '田中' }, { name: '田中' }];
const eventName = "作品の人気投票";

export default function Home() {

    const vote = () => {
        alert("田中");
    }
    
    return (
        <div>
            <h1 className={styles['title']}>{eventName}</h1>
            <p className={styles['sentence']}>以下の中から投票したい人を選んでください！</p>
            <VoteButton />
            <Link href="/result">結果はこちら！</Link>
        </div>
    )
}
