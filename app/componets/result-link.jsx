"use client"
import Image from 'next/image'
import styles from './result-link.module.css'
// const votees = [{ name: '田中' }, { name: '田中' }, { name: '田中' }, { name: '田中' }, { name: '田中' }];
// const eventName = "作品の人気投票";
//const eventName = 


export default function ResultLink() {
    const vote = () => {
        alert("田中");
    }
    return (
        <>
            <a>結果はこちら</a>
        </>
    )
}
