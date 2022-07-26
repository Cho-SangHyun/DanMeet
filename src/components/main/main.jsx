import React, { useState, useCallback, useEffect } from 'react';
import styles from "./main.module.css";
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import LoginModal from '../loginModal/loginModal';


const Main = ({authService}) => {
    // 이걸로 로그인여부를 따짐.
    const [userId, setUserId] = useState(null);
    // 로그인창 열고 닫는 것과 관련된 state. true면 open, false면 close되도록
    const [showModal, setShowModal] = useState(false);

    const openModal = useCallback(() => {
        setShowModal(true);
    }, []);
    const closeModal = useCallback(() => {
        setShowModal(false);
    }, []);

    useEffect(() => {
        // 현재 로그인돼있으면 그 유저의 아이디를 userId state로 설정
        authService.onAuthChange(user => {
            if(user){
                setUserId(user.uid);
            };
        })
    })
    return(
        <div className={styles.main}>
            <Navbar openModal={openModal} userId={userId} authService={authService} setUserId={setUserId}/>
            {showModal && <LoginModal closeModal={closeModal} authService={authService}/>}
            <section className={`${styles.main_section} ${styles.section1}`}></section>
            <section className={`${styles.main_section} ${styles.section2}`}></section>
            <section className={`${styles.main_section} ${styles.section3}`}></section>
            <section className={`${styles.main_section} ${styles.section4}`}></section>
            <Footer />
        </div>
    )
}

export default Main;