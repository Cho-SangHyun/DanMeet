import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './main.module.css';

const Main = ({authService}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [userId, setUserId] = useState(
        location.state?.userId
    );

    const logout = () => {
        authService.logout(() => {
            navigate("home");
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
            메인
            <button onClick={logout}>로그아웃</button>
        </div>
    )
}

export default Main;