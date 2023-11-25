"use client"
import Image from 'next/image'
import styles from './result-link.module.css'
import Link from 'next/link';
// const votees = [{ name: '田中' }, { name: '田中' }, { name: '田中' }, { name: '田中' }, { name: '田中' }];
// const eventName = "作品の人気投票";
//const eventName = 


export default function ResultLink() {

    return (
        <>
            <br></br>
            <br></br>
            <h1 className={styles['result']}>得票最多の候補者は{}です！！</h1>
        </>
    )
}
