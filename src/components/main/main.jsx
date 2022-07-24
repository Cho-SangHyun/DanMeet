import React, { useState } from 'react';
import styles from "./main.module.css";
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import LoginModal from '../loginModal/loginModal';
import { useCallback } from 'react';

const Main = (props) => {
    // 로그인창 열고 닫는 것과 관련된 state. true면 open, false면 close되도록
    const [showModal, setShowModal] = useState(true);

    const openModal = useCallback(() => {
        setShowModal(true);
    }, []);
    const closeModal = useCallback(() => {
        setShowModal(false);
    }, []);

    return(
        <div className={styles.main}>
            <Navbar showModal={showModal} openModal={openModal}/>
            {showModal && <LoginModal closeModal={closeModal}/>}
            <section className={`${styles.main_section} ${styles.section1}`}></section>
            <section className={`${styles.main_section} ${styles.section2}`}></section>
            <section className={`${styles.main_section} ${styles.section3}`}></section>
            <section className={`${styles.main_section} ${styles.section4}`}></section>
            <Footer />
        </div>
    )
}

export default Main;