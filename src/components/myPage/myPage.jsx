import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import styles from "./myPage.module.css";

const MyPage = ({authService}) => {
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
        });
    }, [authService, navigate]);

    return(
        <div className={styles.main}>
            <Navbar contents={[
                {type: "button", onClick: logout, text: "로그아웃"},
                {type: "button", onClick: () => {navigate("/mypage")}, text: "마이페이지"},
            ]}/>
            <section className={styles.main_section}>
                My Page
            </section>
        </div>
    )
}

export default MyPage;