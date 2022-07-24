import React from 'react';
import styles from "./main.module.css";
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

const Main = (props) => {
    return(
        <div className={styles.main}>
            <Navbar />
            <section className={`${styles.main_section} ${styles.section1}`}></section>
            <section className={`${styles.main_section} ${styles.section2}`}></section>
            <section className={`${styles.main_section} ${styles.section3}`}></section>
            <section className={`${styles.main_section} ${styles.section4}`}></section>
            <Footer />
        </div>
    )
}

export default Main;