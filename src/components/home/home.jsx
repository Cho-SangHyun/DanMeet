import React, { useState, useCallback, useEffect } from 'react';
import styles from "./home.module.css";
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import LoginModal from '../loginModal/loginModal';
import { useNavigate } from 'react-router-dom';


const Home = ({authService}) => {
    const navigate = useNavigate();
    // 로그인창 열고 닫는 것과 관련된 state. true면 open, false면 close되도록
    const [showModal, setShowModal] = useState(false);

    const openModal = useCallback(() => {
        setShowModal(true);
    }, []);
    const closeModal = useCallback(() => {
        setShowModal(false);
    }, []);

    useEffect(() => {
        // 현재 로그인돼있으면 main으로 이동
        authService.onAuthChange(user => {
            if(user){
                navigate("/", {
                    state: {
                        userId: user.uid,
                    },
                });
            };
        })
    });

    return(
        <div className={styles.home}>
            <Navbar contents={[
                {type: "button", onClick: () => {setTimeout(openModal, 50);}, text: "로그인"},
                {type: "link", to: "/signup", text: "회원가입"}
            ]}/>
            {showModal && <LoginModal closeModal={closeModal} authService={authService}/>}
            <section className={`${styles.home_section} ${styles.section1}`}>
                <h1>클릭 한 번으로 시작하는 학교에서 친구 만들기</h1>
            </section>
            <section className={`${styles.home_section} ${styles.section2}`}></section>
            <section className={`${styles.home_section} ${styles.section3}`}></section>
            <section className={`${styles.home_section} ${styles.section4}`}></section>
            <Footer />
        </div>
    )
}

export default Home;