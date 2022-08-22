import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import styles from './main.module.css';

const Main = ({authService}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [userId, setUserId] = useState(
        location.state?.userId
    );

    const logout = () => {
        authService.logout(() => {
            navigate("/home");
        });
    };

    useEffect(() => {
        authService.onAuthChange(user => {
            if(user){
                setUserId(user.uid);
            }
            else{
                navigate("/home");
            }
        })
    }, [authService, navigate]);

    return(
        <div className={styles.main}>
            <Navbar contents={[
                {type: "button", onClick: logout, text: "로그아웃"},
                {type: "button", onClick: () => {navigate("/mypage")}, text: "마이페이지"},
            ]}/>
            <section className={styles.main_section}>
                <h1 className={styles.main_section_title}>어떤 사람과 친해지고 싶으신가요?</h1>
                <ul className={styles.main_buttons}>
                    <li><Link to="/senior" state={{userId: userId}}>선배</Link></li>
                    <li><Link to="/junior" state={{userId: userId}}>후배</Link></li>
                    <li><Link to="/friend" state={{userId: userId}}>친구</Link></li>
                </ul>
            </section>
        </div>
    )
}

export default Main;