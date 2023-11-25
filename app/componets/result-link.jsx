"use client"
import Image from 'next/image'
import styles from './result-link.module.css'
import Link from 'next/link';
// const votees = [{ name: '田中' }, { name: '田中' }, { name: '田中' }, { name: '田中' }, { name: '田中' }];
// const eventName = "作品の人気投票";
//const eventName = 


export default function ResultLink() {
    const vote = () => {
        alert("田中");
        //vote();
    }
    return (
        <>
            <br></br>
            <br></br>
            <Link className={styles['link']} href="../result">
                結果はこちら
            </Link>
        </>
    )
}
